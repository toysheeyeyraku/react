import Header from "./components/header/header";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/home/home'
import LoginPage from './components/loginPage/loginPage'
import './common/commonStyle.css'

function App() {
  return (
    <Router>
      <div className="body">
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<LoginPage/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
