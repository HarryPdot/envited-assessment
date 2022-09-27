import './CreateEventPage.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const CreateEventPage = ({setEnd, setEvent, setLocation, setName, setStart, name}) => {

    const handleName= (e) => {
        setName(e.target.value)
        console.log(name)
    }

    const handleEvent= (e) => {
        setEvent(e.target.value)

    }    

    const handleStart= (e) => {
        setStart(e.target.value)
        
    }   

    const handleEnd= (e) => {
        setEnd(e.target.value)
        
    }    

    const handleLocation= (e) => {
        setLocation(e.target.value)
        
    }

    return (
        <div className='landing-page-container'>
            <input type='text' placeholder='Name' onChange={handleName}/>
            <input type='text' placeholder='Event' onChange={handleEvent}/>
            <input type='text' placeholder='Start' onChange={handleStart}/>
            <input type='text' placeholder='End' onChange={handleEnd}/>
            <input type='text' placeholder='Location' onChange={handleLocation}/>
        
            <Link to='/event'>
                <input type='submit' placeholder='Submit'/>
            </Link>
        </div>
    )
}

export default CreateEventPage