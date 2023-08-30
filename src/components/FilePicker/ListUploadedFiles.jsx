import { useDispatch, useSelector } from 'react-redux';
import classes from './FilePicker.module.scss';
import {
  deleteFile,
  selectUploadFiles,
} from '../../redux/slices/uploadFilesSlice';
import { destructFileName } from '../../functions';

function UploadFile({ file }) {
  const dispatch = useDispatch();
  const [name, format] = destructFileName(file.name);
  return (
    <div className={classes.upload__file}>
      <div>
        <i className="icon-paperclip"></i>
        <p>{name}</p>
        <span>{format}</span>
      </div>
      <button type="button" onClick={() => dispatch(deleteFile(file.name))}>
        <i className="icon-trash"></i>Удалить
      </button>
    </div>
  );
}

function ListUploadedFiles() {
  const { files } = useSelector(selectUploadFiles);
  return (
    <ul className={classes.upload__list}>
      {files.map((file, index) => {
        return (
          <li key={index}>
            <UploadFile file={file} />
          </li>
        );
      })}
    </ul>
  );
}

export { ListUploadedFiles };
