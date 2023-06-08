import styled from 'styled-components'
import logoReact from './assets/logo.svg'
import logoNodeJs from './assets/logo_NodeJs.svg'
import logoMongodb from './assets/logo_mongodb.svg'
import logoSass from './assets/logo_Sass.svg'
import logoHtml5 from './assets/logo_html5.svg'
import logoTypescript from './assets/logo_typescript.svg'
import { size } from './style/breakpoint'

const AboutMeWrapper = styled.section`
  flex-direction: column;
  align-items: center;
  text-align: center;
  & .aboutMe_container {
    /* & h1 {
      padding: 15px 65px;
      text-shadow: rgba(0, 0, 0, 7%) 1px 1px 1px;
      text-decoration: underline;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 10px;
    } */
  }
  & .aboutMe_div {
    flex-direction: column;
    align-items: center;
    text-align: center;
    line-height: 30px;
    max-width: 850px;
  & p {
    width: 80%;
  }
  }
  & .logosDiv {
    width: 80%;
    max-width: 1170px;
    justify-content: space-between;
    align-items: center;
    padding-top: 7vw;
    margin-bottom: 50px;
    & .logoLanguage {
      height: 20vw;
      max-height: 110px;
    }
  }
`

function AboutMe() {
  return (
    <AboutMeWrapper>
      
      <div className="aboutMe_container">
        <h3>Qui suis je ?</h3>
        <div className="aboutMe_div">
          <p>
            <strong>Developpeur web full stack </strong> depuis 1 ans, et
            passionné d'informatique depuis tout jeune, je vous propose mes
            services pour vous accompagner dans la{' '}
            <strong>création de votre site web ou de votre API REST</strong>, la
            mise a jour, ou l'optimisation de ceux-ci.
          </p>
          <div className="logosDiv">
          <img src={logoHtml5} alt="" className="logoLanguage" />
        <img src={logoSass} alt="" className="logoLanguage" />
          </div>
          <p>
            Ayant des connaissances sur les dernieres technologies en matière de
            site web, je peux aussi vous aider à migrer sur des languages
            moderne tel que React, Sass, Typescript...
          </p>
          <div className="logosDiv">
          <img src={logoReact} alt="" className="logoLanguage" />
          <img src={logoTypescript} alt="" className="logoLanguage" />
          </div>
          <p>
            Pour vos API REST, je peux vous accompagner sur les languages
            NodeJs, Express et mettre en place des bases de données NoSQL via
            MongoDb...
          </p>
        </div>
      </div>
      <div className="logosDiv">
        <img src={logoNodeJs} alt="" className="logoLanguage" />
        <img src={logoMongodb} alt="" className="logoLanguage" />
      </div>
      <div className="switch_line" />
    </AboutMeWrapper>
  )
}

export default AboutMe
