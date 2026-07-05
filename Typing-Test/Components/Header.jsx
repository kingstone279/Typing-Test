import logoLarge from '../src/assets/logo-large.svg'
import iconRestart from '../src/assets/icon-restart.svg'
import iconPersonalBest from '../src/assets/icon-personal-best.svg'
import '../Components/header.css'
export function Header(){
    return(
        <div className='header'>
          <img src={logoLarge} className='logo-large'/>
          <div className="personal-best">
            <img src={iconPersonalBest} className='iconPersonalBest'/>
            <p>Personal best: 50 WPM </p>
          </div>
        </div>
    )
}