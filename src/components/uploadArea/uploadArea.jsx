import { useDispatch } from 'react-redux';
import classes from '../Form/Form.module.scss';
import { addFiles, toggleIsUpload } from '../../redux/slices/uploadFilesSlice';
import { useRef } from 'react';

function UploadArea() {
  const dispatch = useDispatch();
  const uploadFileRef = useRef();

  const handleUploadFiles = (e) => {
    if (e.target.files && e.target.files[0]) {
      dispatch(addFiles([...e.target.files]));
      dispatch(toggleIsUpload());
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      dispatch(addFiles([...e.dataTransfer.files]));
      dispatch(toggleIsUpload());
    }
  };

  return (
    <div
      className={classes.upload__area}
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
    >
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
      <input
        type="file"
        name="files"
        accept=".png, .jpg, .jpeg, .doc, .docx, .xls, .xlsx, .pdf, .zip, .rar, .7zip"
        multiple
        hidden
        onChange={handleUploadFiles}
        ref={uploadFileRef}
      />
      <button
        className="btn"
        type="button"
        onClick={() => uploadFileRef.current.click()}
      >
        Выберите файлы
      </button>
    </div>
  );
}
export { UploadArea };
/* 

    
*/
