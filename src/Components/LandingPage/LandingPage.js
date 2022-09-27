import './LandingPage.css'
import Battery from '../Assets/Icons/Battery.svg'
import Signal from '../Assets/Icons/Signal.svg'
import Wifi from '../Assets/Icons/Wifi.svg'
import aA from '../Assets/Icons/aA.svg'
import Lock from '../Assets/Icons/Lock.svg'
import Reload from '../Assets/Icons/Reload.svg'
import Image from '../Assets/Images/LandingPageImage.png'
import Back from '../Assets/Icons/Back.svg'
import Forward from '../Assets/Icons/Forward.svg'
import Share from '../Assets/Icons/Share.svg'
import Bookmark from '../Assets/Icons/Bookmark.svg'
import Tab from '../Assets/Icons/Tab.svg'
import Home from '../Assets/Icons/Home.svg'
import { Link } from 'react-router-dom'


const LandingPage = () => {
    return (
        <div className='landing-page-container'>
            <section className='top'>
                <div className='time'>9:41</div>
                <div className='top-right-icons'>
                    <img src={Wifi} alt='Wifi logo'/>
                    <img src={Signal} alt='Signal logo'/>
                    <img src={Battery} alt='Battery logo'/>
                </div>                
            </section>
            <section className='landing-page-heading-container'>
                <h1 className='landing-page-heading'>
                    <span>Imagine if</span>
                    <span>Snapchat</span>
                    <span>had events.</span>
                </h1>
                <div className='landing-page-heading-description'>
                    Easily host and share events with your friends across any social media.
                </div>
            </section>
            <section className='image-button-container'>
                <img src={Image} alt='EventsImage' className='landing-page-image'/>
                <Link to='/create'>
                    <button className='landing-page-create-button'> 🎉 Create my event</button>
                </Link>
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

export default LandingPage