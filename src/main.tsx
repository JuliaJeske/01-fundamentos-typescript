import React from 'react'
import ReactDOM from 'react-dom/client'// representação do html 
import {App} from './App'


ReactDOM.createRoot(document.getElementById('root')!).render(//integrando o react para funcionar na web
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
