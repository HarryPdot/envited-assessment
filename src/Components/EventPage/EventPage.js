import './EventPage.css'
import aA from '../Assets/Icons/aA.svg'
import Lock from '../Assets/Icons/Lock.svg'
import Reload from '../Assets/Icons/Reload.svg'
import Back from '../Assets/Icons/Back.svg'
import Forward from '../Assets/Icons/Forward.svg'
import Share from '../Assets/Icons/Share.svg'
import Bookmark from '../Assets/Icons/Bookmark.svg'
import Tab from '../Assets/Icons/Tab.svg'
import Home from '../Assets/Icons/Home.svg'
import EventImage from '../Assets/Images/EventPageImage.png'
import Calendar from '../Assets/Icons/Calendar.svg'
import Location from '../Assets/Icons/Location.svg'
import Stroke from '../Assets/Icons/Stroke.svg'


const EventPage = ({name, location, start, end, event}) => {
    return (
        <div className='event-page-container'>
            <img className='event-image' src={EventImage} alt='event'/>
            <section className='event-details'>
                <h1>{event}</h1>
                <span className='host'>Hosted by {name}</span>
            </section>
            <section className='event-time-place'>
                <div>
                    <div className='svg-border'>
                        <img src={Calendar} alt='Calender'/>
                    </div>
                    <div className='from-to-date'>
                        <span className='from'>{start}</span>
                        <span className='to'>to <span className='to-date'>{end}</span> UTC +10</span>
                    </div>
                </div>
                <img src={Stroke} alt='Stroke'/>
            </section>
            <section className='event-time-place'>
                <div>
                    <div className='svg-border'>
                        <img src={Location} alt='Location'/>
                    </div>
                    <div className='from-to-date'>
                        <span className='from'>{location}</span>
                        <span className='to'>
                            <span>Suburb</span>,
                            <span>State</span>,
                            <span>Postcode</span>
                        </span>
                    </div>
                </div>
                <img src={Stroke} alt='Stroke'/>
            </section>


            <footer className='domain-section'>
                <div className='url'>
                    <img src={aA} alt='aA logo'/>
                    <span className='domain-span'><img src={Lock} alt='Lock logo'/>domain.com</span>
                    <img src={Reload} alt='Reload logo'/>
                </div>
                <nav className='toolbar-container'>
                    <img src={Back} alt='Back logo'/>
                    <img src={Forward} alt='Forward logo'/>
                    <img src={Share} alt='Share logo'/>
                    <img src={Bookmark} alt='Bookmark logo'/>
                    <img src={Tab} alt='Tab logo'/>
                </nav>
                <img className='home-button' src={Home} alt='Home logo'/>
            </footer>
        </div>
    )
}

export default EventPage