export default function Footer() {

  return (
    <footer className="footer">
      <div className="container">
        <h3 className="footer__heading">ohmyfood</h3>
        <nav className="footer__navigation">
          <ul>
            <li>
              <a href="#"><i className="fa-solid fa-utensils"></i>Proposer un restaurant</a>
            </li>
            <li>
              <a href="#"><i className="fa-solid fa-handshake-angle"></i>Devenir partenaire</a>
            </li>
            <li><a href="#">Mentions légales</a></li>
            <li><a href="mailto:contact@ohmyfood.com">Contact</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}