import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/home'
import Form from './pages/form/form'
import Users from './pages/Users/page'

function CustomRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} ></Route>
                <Route path='/form' element={<Form />}></Route>
                <Route path='/users' element={<Users />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default CustomRoutes