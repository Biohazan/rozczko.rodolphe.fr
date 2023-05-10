import styled from 'styled-components'
import backEndPic from './assets/backEnd.jpg'
import frontEndPic from './assets/frontEnd.jpg'
import seoPic from './assets/seo.jpg'
import './style/style.css'

const ServiceWrapper = styled.section`
  position: relative;
  & .strongColor {
    color: #da9d21e6;
  }
  & #service_title {
    position: absolute;
    top: -30px;
    right: 0px;
    background-color: #fff;
      text-align: end;
      margin-right: 20px;
      color: #90daf5;
      text-shadow: rgba(0, 0, 0, 7%) 1px 1px 1px;
      text-decoration: underline;
  }
  & .card_wrapper {
    margin-top: 100px;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
    margin: 50px 20px;
  }
  & .card_hover {
    position: relative;
    
  }
  & .card_container {
    font-family: 'Kanit', sans-serif;
    position: relative;
    width: 20vw;
    min-width: 190px;
    max-width: 300px;
    height: 400px;
    padding: 10px;
    flex-direction: column;
    box-shadow: #80808040 -2px 5px 20px;
    border-radius: 20px;
    transition: 0.4s ease-in;
    background: linear-gradient(0deg, #e7f8fe 0%, #00ff6240 100%);
    color: #7b7b7b;
    cursor: pointer;
    backdrop-filter: blur(25px);
    z-index: 2;
    & img {
      width: 100%;
      height: 20vw;
      max-height: 220px;
      object-fit: contain;
      background-color: #fff;
    }
  }
  & .card_hidden,
  .card_visible {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  /* Card hidden and visible */
  & .card_hidden {
    flex-direction: column;
    justify-content: space-between;
    transform: scale(0);
    opacity: 0;
    transition: transform 0.4s ease-in, opacity 0.8s ease-in; 
    & h3 {
      padding: 0px 20px;
      margin-top: 2vw;
      line-height: 30px;
      /* color: #a50c00; */
      font-weight: 400;
      font-size: 1.2em;
    }
    & .card_hidden_list {
      flex-direction: column;
      padding: 0;
      width: 100%;
      /* color: #da9d21e6; */
      z-index: 1;
      & h4 {
        text-decoration: underline;
        margin: 10px 0;
        font-weight: 600;
        font-size: 1.2em;
      }
      & p {
        font-style: italic;
        padding: 0 50px;
        margin-top: 0;
      }
    }
  }
  & .card_visible {
    transform: scale(1);
    transition: 0.4s ease-in;
    justify-content: space-around;
    & h2 {
      text-decoration: underline;
    }
  }

  /* Animation */
  .card_hover::before,
  .card_hover::after {
    content: '';
    position: absolute;
    opacity: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    transition: 0.5s;
    transition-delay: 0.3s;
    background: linear-gradient(0deg, #e7f8fe 0%, #00ff6240 100%);
    z-index: 1;
  }

  & .card_hover:hover {
    &::before {
      transform: rotate(20deg);
      box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
      opacity: 1;
    }
      &::after {
        transform: rotate(10deg);
        box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
        opacity: 1;
      }

    & .card_container {
      transform: rotate3d(0, 1, 0, 180deg);
      box-shadow: #808080cf -2px 5px 20px;
      & .card_visible {
        opacity: 0;
        transform: scale(0);
        transition: 0.4s ease-in;
      }
      & .card_hidden {
        opacity: 1;
        transform: rotate3d(0, 1, 0, 180deg) scale(1);
        transition: transform 0.4s ease-in, opacity 0.8s ease-in;
      }
    }
    
  }
`

function Services() {
  return (
    <ServiceWrapper >
      <div className="service_container">
      <h1 id="service_title">Les services que je vous propose</h1>
        {/* <div className="service_title">
          
        </div> */}
        <div className="card_wrapper">
          <div className="card_hover">
            
            <div className="card_container">
              <div className="card_visible">
                <img src={frontEndPic} alt="" />
                <h2>Developpeur Front-End</h2>
              </div>
              <div className="card_hidden">
                <h3>
                  Création de site: <br /> <strong className='strongColor'>E-commerce, Site vitrine,
                  Portfolio</strong>... <br />
                  Le tout de manière <strong className='strongColor'>responsive</strong>  afin qu'il s'adapte à toutes les
                  tailles d'écrans.
                </h3>
                <div className="card_hidden_list">
                  <h4>Technologie utilisé: </h4>
                  <p>Html, Css, Javascript, React, Sass..</p>{/* 34 */}
                   
                </div>
              </div>
            </div>
          </div>

          <div className="card_hover">
            <div className="card_container">
              <div className="card_visible">
                <img src={backEndPic} alt="" />
                <h2>Developpeur Back-End</h2>
              </div>
              <div className="card_hidden">
                <h3>
                  Création <strong className='strongColor'>d'API</strong>  pour l'exploitation de votre site E-commerce,
                  <strong className='strongColor'> gestion des utilisateurs</strong>, <strong className='strongColor'> sécurisation des formulaires</strong> <br />{' '}
                  Mise en place de base de données <strong className='strongColor'>SQL</strong> et <strong className='strongColor'>NoSQL</strong>
                </h3>
                <div className="card_hidden_list">
                  <h4>Technologie utilisé: </h4>
                  <p>NodeJs, Express, MongoDb, MySQL....</p>{/* 33 */}
                </div>
              </div>
            </div>
          </div>
          <div className="card_hover">
            <div className="card_container">
              <div className="card_visible">
                <img src={seoPic} alt="" />
                <h2>Référencement SEO</h2>
              </div>
              <div className="card_hidden">
                <h3>
                  Améliorer le <strong className='strongColor'>référencement naturel</strong>  de votre site en
                  travaillant sur des <strong className='strongColor'>mots clefs pertinents</strong>, sur <strong className='strongColor'>l'accessibilité </strong> 
                  des personnes et les <strong className='strongColor'>performances</strong> de vos pages
                </h3>
                <div className="card_hidden_list">
                  <h4>Technologie utilisé: </h4>
                  <p>Lighthouse, Search Console, Wave...</p>{/* 34 */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ServiceWrapper>
  )
}

export default Services
