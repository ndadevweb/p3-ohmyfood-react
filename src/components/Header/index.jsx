import logo from '../../assets/images/logo/ohmyfood@2x.svg'
import { Link, useLocation } from 'react-router-dom'

export default function Header() {

  const isHomePage = useLocation()?.pathname === '/'

  return (
    <header className="header">
      {
        isHomePage === false && <Link to="/" className="header__back"><i className="fa-solid fa-arrow-left"></i></Link>
      }
      <img src={logo} alt="ohmyfood - logo" className="header__logo" />
    </header>
  )
}