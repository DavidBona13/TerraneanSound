import { BrowserRouter, Routes, Route} from 'react-router-dom';

const Routing = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>

            <Route path='/login' element={<Login />} />
            <Route path='/registro' element={<Registro />} />
        </BrowserRouter>
    )
}

export default Routing;