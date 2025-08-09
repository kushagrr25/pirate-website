import './navbar.css'
import leadlogo from './images/leadlogo.png'
import  rope from './images/rope3.png'
import anchor from './images/anchor.png'
import compass from './images/compass.png'
import { NavLink } from 'react-router-dom';
function Navbar(){
return(
  <>
  <div id='navblock'>
    
    <img id='navlogo' src={leadlogo} />
    <img className='compass' src={compass} />
    
    <ul className='navlinks'>
  <li>
    <NavLink 
      to='/' 
      className={({ isActive }) => isActive ? 'active-link' : 'navlink'}
      style={{ textDecoration: 'none' }}
    >
      Home
    </NavLink>
  </li>
  <li>
    <NavLink 
      to='/events' 
      className={({ isActive }) => isActive ? 'active-link' : 'navlink'}
      style={{ textDecoration: 'none' }}
    >
      Events
    </NavLink>
  </li>
  <li>
    <NavLink 
      to='/sponsors' 
      className={({ isActive }) => isActive ? 'active-link' : 'navlink'}
      style={{ textDecoration: 'none' }}
    >
      Our Sponsors
    </NavLink>
  </li>
  <li>
    <NavLink 
      to='/contact'  // make sure this route exists
      className={({ isActive }) => isActive ? 'active-link' : 'navlink'}
      style={{ textDecorationLine: 'none' }}
    >
      Contact Us
    </NavLink>
  </li>
</ul>

  </div>
  <div id='rope' style={{backgroundImage: `URL(${rope})`}}></div>
  <img className='anchor' src={anchor} />
  </>
);
}
export default Navbar;