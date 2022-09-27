import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import LandingPage from './Components/LandingPage/LandingPage';
import CreateEventPage from './Components/CreateEventPage/CreateEventPage'
import EventPage from './Components/EventPage/EventPage'
import { useState } from 'react'


function App() {
  const [name, setName] = useState('')
  const [event, setEvent] = useState('')
  const [start, setStart] = useState('')
  const [end, setEnd] = useState('')
  const [location, setLocation] = useState('')

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/create' element={<CreateEventPage name={name} setName={setName} setEvent={setEvent} setStart={setStart} setEnd={setEnd} setLocation={setLocation}/>}/>
        <Route path='/event' element={<EventPage/>} name={name} event={event} start={start} end={end} location={location}/>
      </Routes>
    </div>
  );
}

export default App;
