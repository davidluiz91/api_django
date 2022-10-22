import './App.css';
import Header from './components/header';
import Pagamento from './components/header';
import Cliente from './components/header/cliente';
import Funcionario from './components/header/funcionario';
import InputText from './components/InputText/InputText';

function App() {
  return (
    <div className='app'>
      <Header/>
      <Pagamento/>
      <Funcionario/>
      <InputText/>
      <Cliente/>
    </div>
  )
}

export default App;
