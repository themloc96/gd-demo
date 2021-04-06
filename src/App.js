import logo from './logo.svg';
import './App.css';
import LogoComponents from './components/company/header/LogoComponents';
import UploadImageComponents from './components/company/header/UploadImageComponents';
import ButtonDeleteComponents from './components/company/header/ButtonDeleteComponents';
import InputComponents from './components/form/InputComponents';

function App() {
  return (
    <div className="App">
      <div className="boxs">
        <LogoComponents />
        <div className="d-flex align-center mt-4">
          <UploadImageComponents />
          <ButtonDeleteComponents />
        </div>
      </div>

      <div className="boxs mt-30">
          <InputComponents />
      </div>
    </div>
  );
}

export default App;
