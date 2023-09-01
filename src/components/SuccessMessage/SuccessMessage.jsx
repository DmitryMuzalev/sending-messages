import { useDispatch, useSelector } from 'react-redux';
import {
  selectSentLetters,
  toggleStatusSent,
} from '../../redux/slices/sentLettersSlice';
import classes from './SuccessMessage.module.scss';

function SuccessMessage() {
  const dispatch = useDispatch();
  const { letters } = useSelector(selectSentLetters);

  const mail = letters.length ? letters[letters.length - 1].mca[0] : '';

  return (
    <div className={classes.message}>
      <h2>Сообщение поставлено в очередь на отправку</h2>
      <p>
        {`Совсем скоро сообщение вылетит из сервера, и будет двигаться в сторону
        почты получателя «${mail}» со скоростью электронов.`}
      </p>
      <button className="btn" onClick={() => dispatch(toggleStatusSent())}>
        Новое сообщение
      </button>
    </div>
  );
}
export { SuccessMessage };
