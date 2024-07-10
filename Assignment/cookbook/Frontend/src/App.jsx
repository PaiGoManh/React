import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Authentication/Login';
import Signup from './pages/Authentication/Signup';
import Main from './pages/Main';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' index element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/main/*' element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;
