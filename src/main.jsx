import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { GlobalStyles } from './styles/GlobalStyles.js'
import { Provider } from 'react-redux'
import {persistor, store} from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>

    <PersistGate persistor={persistor}>
      <GlobalStyles/>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate> 
    </Provider>
  </React.StrictMode>,
)
