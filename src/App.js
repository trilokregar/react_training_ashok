import './App.css';
import Login from './login-component/Login';
import Signup from './Signup-component/Signup';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Login />
        <Signup username="trilok" />
      </header>
    </div>
  );
}

export default App;
