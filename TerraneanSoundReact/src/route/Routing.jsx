import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Register from '../login/Register';
import Login from '../login/Login';
import Header from '../sides/Header';

const Routing = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Navigate to="/register" />} />
                
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/header' element={<Header />} />
            </Routes>

        </BrowserRouter>
    )
}

export default Routing;