import './App.css';
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';
import ProfilePage from './components/profilePage/ProfilePage';
import Footer from './components/footer/Footer';
import MyHeader from './components/MyHeader/MyHeader';
import HomepagePROVA from './components/homepagePROVA/HomepagePROVA';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MyHeader/>
        <Routes>
          <Route path='/' element={<HomepagePROVA />} />
          <Route path='/profile/:user' element={<ProfilePage/>}/>
        </Routes>
        <Footer/>
      </div>  
    </BrowserRouter>
  );
}

export default App;