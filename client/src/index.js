import ReactDom from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App'
import store from './store'; // Import the Redux store


// Connect Redux Store to React

const root = document.getElementById("root");

ReactDom.createRoot(root).render(
  <Provider store={store}> {/* Provide the Redux store to the application */}
    <App />
  </Provider>,
);


