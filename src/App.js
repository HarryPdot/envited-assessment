import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import LandingPage from './Components/LandingPage/LandingPage';
import CreateEventPage from './Components/CreateEventPage/CreateEventPage'
import EventPage from './Components/EventPage/EventPage'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/create' element={<CreateEventPage/>}/>
        <Route path='/event' element={<EventPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
