import { useSelector } from 'react-redux';
import { selectSentLetters } from '../../redux/slices/sentLettersSlice';

function ListSentLetters() {
  const { letters } = useSelector(selectSentLetters);

  return (
    <div className="sent_letters">
      <h2>Отправленные сообщения</h2>

      {letters.length ? (
        <table>
          <thead>
            <tr>
              <th>Дата</th>
              <th>Тема</th>
              <th>Статус</th>
            </tr>
          </thead>
          <tbody>
            {letters.map((letter, index) => {
              const RUDate = new Intl.DateTimeFormat('ru', {
                day: 'numeric',
                month: 'long',
              });
              return (
                <tr key={index}>
                  <td>{RUDate.format(letter.date)}</td>
                  <td>{letter.subject}</td>
                  <td style={{ color: 'var(--green)' }}>Отправлено</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <p>Сообщения ещё не отправлялись</p>
      )}
    </div>
  );
}

export { ListSentLetters };
