import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
//React Redux
import { Provider } from 'react-redux'
import store from './redux/store/store.js'
//UseContext
import ThemeProvider from './context/ThemeContext.jsx'
import LangContextProvider from './context/LanguageContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider>
          <LangContextProvider>
            <App />
          </LangContextProvider>
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  </StrictMode>,
)
