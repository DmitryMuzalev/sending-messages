import classes from '../Form/Form.module.scss';

function LinkOfUpload() {
  return (
    <a
      href="#upload-file"
      className={classes.upload__link}
      onMouseDown={(e) => e.preventDefault()}
      onClick={(e) => {
        e.preventDefault();
        openUploadArea();
      }}
    >
      <i className="icon-paperclip"></i>
      <span>Прикрепить файл</span>
    </a>
  );
}
export { LinkOfUpload };
