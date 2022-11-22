import {BrowserRouter as Router, Navigate, Toutes, Route} from 'react-router-dom'
import HomePage from 'scenes/homePage'
import LoginPage from 'scenes/loginPage'
import ProfilePage from 'scenes/profilePage'


function App() {

  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path='/' element={<LoginPage/>}/>
        <Route path='/home' element={<HomePage/>}/>
        <Route path='/profile/:userid' element={<ProfilePage/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
