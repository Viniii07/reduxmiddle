import logo from './logo.svg';
import './App.css';
import { Header } from './Components/Header';
import { Footer } from './Components/Footer';
import { Menu } from './Components/Menu';
import ReduxMiddleWare from './Components/ReduxMiddleWare';
import { ReduxToolKitEx } from './ReduxToolKit/ReduxToolKitEx';

function App() {
  return (
    <div className="App">
      {/* <Header/>
      <Footer/>
      <Menu/> */}
      <ReduxMiddleWare/>
      <h1>
        <ReduxToolKitEx/>
      </h1>
    </div>
  );
}

export default App;
