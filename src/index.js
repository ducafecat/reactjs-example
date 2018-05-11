import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import Sidebar from './sidebar'
import './index.css'

ReactDOM.render(<Sidebar />, document.getElementById('root'))
registerServiceWorker()
