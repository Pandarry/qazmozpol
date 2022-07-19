import '../css/normalize.css';
import '../css/style.css';
import '../css/media.css';

const Footer = () => {
  return(
    <footer className="footer" id='footer'>
      <div className="container">
        <div className="footer-top">
          <div className="footer-contacts-item">
            <span className="footer-contacts-text">Телефоны</span>
            <a href="tel:+77756720505" className="footer-contacts-value">+7 775 672 0505</a>
          </div>
          <div className="footer-contacts-item">
            <span className="footer-contacts-text">Адрес</span>
            <address className="footer-contacts-value">Almaty, hz kakoi street</address>
          </div>
        </div>
        <div className="footer-middle">
          <div className="footer-column">
            <h3 className="footer-title">Компания</h3>
            <ul className="footer-list list-reset">
              <li className="footer-item">
                <a href="#main" className="footer-link">О нас</a>
              </li>
              <li className="footer-item">
                <a href="#services" className="footer-link">Наши работы</a>
              </li>
              <li className="footer-item">
                <a href="#services" className="footer-link">Блог</a>
              </li>
              <li className="footer-item">
                <a href="#footer" className="footer-link">Контакты</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h3 className="footer-title">Социальные сети</h3>
            <a href="mailto:qazmozpol@gmail.com" className="footer-mail">qazmozpol@gmail.com</a>
            <ul className="social list-reset">
              <li className="social-item">
                <a 
                  href="https://www.instagram.com/qazmozpol/" 
                  target="_blank"
                  rel="noreferrer" 
                  className="social-link">Instagram</a>
              </li>
              <li className="social-item">
                <a 
                  href="https://wa.me/77012685959" 
                  target="_blank"
                  rel="noreferrer" 
                  className="social-link">WhatsApp</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-title">Полезные ссылки</h3>
            <ul className="footer-list list-reset">
              <li className="footer-item">
                <a href="https://nastroike.com/uchimsya-vmeste/mozaichnye-poly-vidy-tehnologiya-ukladki-osobennosti-shlifovki-i-polirovki"
                   className="footer-link"
                   target="_blank"
                   rel="noreferrer">Что такое мозаичный пол</a>
              </li>
              <li className="footer-item">
                <a href="https://lasarstroi.ru/statiy.html?id=12"
                   className="footer-link"
                   target="_blank"
                   rel="noreferrer">Преимущества мозаичного пола</a>
              </li>
              <li className="footer-item">
                <a href="https://www.atlasconcordeusa.com/en/tile-gallery/"
                   className="footer-link"
                   target="_blank"
                   rel="noreferrer">Немного эстетики</a>
              </li>
            </ul>
          </div>


          
        </div>
        <div className="footer-bottom">
          <a href="/#" className="logo">QAZMOZPOL</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;