//import logo from './logo.svg';
import './App.css';
import UserDetailsContext from './components/UserDetailsContext';
import { BrowserRouter } from 'react-router-dom';
import MyRouter from './components/MyRouter';
function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <UserDetailsContext>
          <h1 >פרקטיקום</h1>
          <MyRouter />
        </UserDetailsContext>
      </BrowserRouter>
    </div>
  );
}

export default App;
