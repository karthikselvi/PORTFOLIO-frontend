import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import store from './redux/store'
import { Provider } from 'react-redux'
import { StyleProvider } from '@ant-design/cssinjs';

// Config `hashPriority` to `high` instead of default `low`
// Which will remove `:where` wrapper
export default () => (
  <StyleProvider hashPriority="high">
    <MyApp />
  </StyleProvider>
);


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
