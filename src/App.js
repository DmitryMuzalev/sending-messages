import { useSelector } from 'react-redux';
import { Form } from './components/Form/Form';
import { Header } from './components/Header/Header';
import { ListSentLetters } from './components/ListSentLetters/ListSentLetters';
import { Main } from './components/Main/Main';
import { SuccessMessage } from './components/SuccessMessage/SuccessMessage';
import { selectSentLetters } from './redux/slices/sentLettersSlice';

function App() {
  const { isSent } = useSelector(selectSentLetters);
  return (
    <div className="app">
      <Header />

      <Main>{!isSent ? <Form /> : <SuccessMessage />}</Main>
      <ListSentLetters />
    </div>
  );
}

export default App;
