import { useDispatch } from 'react-redux';
import classes from './FilePicker.module.scss';
import { toggleIsUpload } from '../../redux/slices/uploadFilesSlice';

function LinkOfUpload() {
  const dispatch = useDispatch();
  return (
    <a
      href="#upload-file"
      className={classes.upload__link}
      onMouseDown={(e) => e.preventDefault()}
      onClick={(e) => {
        e.preventDefault();
        dispatch(toggleIsUpload());
      }}
    >
      <i className="icon-paperclip"></i>
      <span>Прикрепить файл</span>
    </a>
  );
}
export { LinkOfUpload };
