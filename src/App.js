import './App.css';
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';
import ProfilePage from './components/profilePage/ProfilePage';
import MyHeader from './components/MyHeader/MyHeader';
import HomepagePROVA from './components/homepagePROVA/HomepagePROVA';
import Homepage from './components/Homepage/Homepage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MyHeader/>
        <Routes>
          <Route path='/homepage' element={<Homepage/>}/>
          <Route path='/' element={<HomepagePROVA />} />
          <Route path='/profile/:user' element={<ProfilePage/>}/>
        </Routes>
      </div>  
    </BrowserRouter>
  );
}

export default App;