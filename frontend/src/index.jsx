import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.css'
import ReactDOM from 'react-dom/client'
import init from './init.jsx'

const app = async () => {
  const root = ReactDOM.createRoot(document.querySelector('#chat'))
  root.render(await init())
}

app()
