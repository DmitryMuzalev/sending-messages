import { Form } from './components/Form/Form';
import { Header } from './components/Header/Header';
import { ListSentLetters } from './components/ListSentLetters/ListSentLetters';

function App() {
  return (
    <div className="app">
      <Header />
      <Form />
      <ListSentLetters />
    </div>
  );
}

export default App;
