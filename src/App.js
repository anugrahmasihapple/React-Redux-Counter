import { Provider } from 'react-redux';
import store from './store';

import './App.css';
import Counter from './components/Counter';
import Count from './components/Count';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <h1>The React & Redux Counter App</h1>
      <Counter />,
      <Count />
    </div>
    </Provider>
  );
}

export default App;
