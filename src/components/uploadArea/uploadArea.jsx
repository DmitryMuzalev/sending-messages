import { useDispatch } from 'react-redux';
import classes from '../Form/Form.module.scss';
import { addFiles, toggleIsUpload } from '../../redux/slices/uploadFilesSlice';
import { useRef } from 'react';

function UploadArea({ register }) {
  const dispatch = useDispatch();
  const uploadFileRef = useRef();

  const handelChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const newFiles = [...e.target.files];
      dispatch(addFiles(newFiles));
    }
  };

  return (
    <div className={classes.upload__area}>
      <button
        className={classes.upload__closed}
        onClick={() => dispatch(toggleIsUpload())}
      >
        <i className="icon-close"></i>
      </button>
      <div>
        <h3>Бросайте файлы сюда, я ловлю</h3>
        <p>
          Мы принимаем картинки (jpg, png, gif), офисные файлы (doc, xls, pdf) и
          zip-архивы. <br /> Размеры файла до 5 МБ
        </p>
      </div>
      <span>или</span>
      <div>
        <input
          type="file"
          {...register('files')}
          multiple
          hidden
          ref={uploadFileRef}
          onChange={handelChange}
        />
        <button
          className="btn"
          type="button"
          onClick={() => uploadFileRef.current.click()}
        >
          Выберите файлы
        </button>
      </div>
    </div>
  );
}
export { UploadArea };
