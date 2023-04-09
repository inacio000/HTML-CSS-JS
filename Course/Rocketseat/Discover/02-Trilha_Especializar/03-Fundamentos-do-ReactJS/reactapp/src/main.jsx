import React from 'react'
import ReactDOM from 'react-dom/client'
import './style/global.css'
import { Home } from './Pages/Home'
import { GetGitHubUser } from './Pages/GetGitHubUser'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GetGitHubUser />
  </React.StrictMode>,
)
