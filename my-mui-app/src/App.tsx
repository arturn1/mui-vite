import CustomRoutes from './routes'
import './App.css'
import ToastConatinerCustom from './shared/components/ToastConatinerCustom'
import Container from '@mui/material/Container'
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
      <Container >
        <CustomRoutes />
        <ToastConatinerCustom />
      </Container >
    </>
  )
}

export default App
