import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import Books from './compnents/Books';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
     <Books/>
    </div>
    </Provider>
  );
}

export default App;
