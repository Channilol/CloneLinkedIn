import './App.css';
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';
import ProfilePage from './components/profilePage/ProfilePage';
import Footer from './components/footer/Footer';
import MyHeader from './components/MyHeader/MyHeader';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MyHeader/>
        <Routes>
          <Route path='/' element={<ProfilePage/>}/>
        </Routes>
        <Footer/>
      </div>  
    </BrowserRouter>
  );
}

export default App;