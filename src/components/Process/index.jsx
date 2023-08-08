export default function Process() {

  return (
    <section className="process">
      <div className="container">
        <h2 className="process__heading">Fonctionnement</h2>

        <ul className="process__steps">
          <li className="card-informations card--gray">
            <span className="card__chip card__chip--purple">1</span>
            <i className="card-informations__icon fa-solid fa-mobile-screen-button"></i>
            <span className="card-informations__text">Choisissez un restaurant</span>
          </li>
          <li className="card-informations card--gray">
            <span className="card__chip card__chip--purple">2</span>
            <i className="card-informations__icon fa-solid fa-list-ul"></i>
            <span className="card-informations__text">Composez votre menu</span>
          </li>
          <li className="card-informations card--pink">
            <span className="card__chip card__chip--purple">3</span>
            <i className="card-informations__icon card-informations__icon--purple fa-solid fa-store"></i>
            <span className="card-informations__text">Dégustez au restaurant</span>
          </li>
        </ul>
      </div>
    </section>
  )
}