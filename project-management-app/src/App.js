//import LoginPage from './pages/LoginPage';
//import LoginForm from './components/LoginForm';
//import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './app/store';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Text here to edit 
        </p>
        <a
          className="App-link"
          href="https:// " /* make new link */
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
    </div>
  );
}

export default App;

