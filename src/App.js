import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ProvideRouter } from './routers/Routers';

function App() {
    return (
        <Router>
            <Routes>
                {ProvideRouter.routes.map((provide, index) => {
                    return <Route key={index} path={provide.path} element={provide.element}></Route>;
                })}
            </Routes>
        </Router>
    );
}

export default App;
