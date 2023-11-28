import logo from './logo.svg';
import './App.css';
import PassMessage from './PassMessage';
import FailMessage from './FailMessage';

function App(props) {
  const isPass = props.isPass;
  if (isPass) {
    return <PassMessage />;
  }
  return <FailMessage />;
}

export default App;
