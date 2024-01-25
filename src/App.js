import './App.css';
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';
import ProfilePage from './components/profilePage/ProfilePage';
import HomepagePROVA from './components/homepagePROVA/HomepagePROVA';
import Homepage from './components/Homepage/Homepage';
import Jobspage from './components/JobsPage/Jobspage';
import JobsPage2 from './components/JobsPage2/JobsPage2';

function App() {
  return (
    <BrowserRouter>
      <div className="App">   
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/jobspage' element={<Jobspage />} />
          <Route path='/jobspage2' element={<JobsPage2 />} />
          <Route path='/homepageprova' element={<HomepagePROVA />} />
          <Route path='/profile/:user' element={<ProfilePage/>}/>
        </Routes>
      </div>  
    </BrowserRouter>
  );
}

export default App;