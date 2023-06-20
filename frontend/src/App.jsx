import { Navigate, Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing.jsx';
import Form from './pages/Form.jsx';
import Result from './pages/Result.jsx';

const App = () => {
    return (
        <>
            <Routes>
                <Route path='/home' element={<Landing />} />
                <Route path='/form' element={<Form />}></Route>
                <Route path='/result' element={<Result />}></Route>
                <Route path='*' element={<Navigate to='/home' />} />
            </Routes>
        </>
    );
};

export default App;
