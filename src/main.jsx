
import './index.css'
import UpdateExp from './Update'
import AppExp from './Insert'
import GetAdmin from './GetAdmin'
import DeleteAdmin from './DeleteAdmin'
import UpdateEx from './UpdateAdmin'
import AppStaff from './Staff'
import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter, Form } from 'react-router-dom'
import Parent from './Parent.jsx'

import MyComponent from './Image.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <MyComponent />
<BrowserRouter>

<Parent></Parent>

</BrowserRouter>
    
  </React.StrictMode>,
)
