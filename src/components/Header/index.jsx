import logo from '../../assets/images/logo/ohmyfood@2x.svg'

export default function Header() {

  return (
    <header className="header">
      <img src={logo} alt="ohmyfood - logo" className="header__logo" />
    </header>
  )
}