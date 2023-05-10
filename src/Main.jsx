import './style/style.css'
import Header from './Header'
import styled from 'styled-components'
import devPic from './assets/devPic.jpg'
import AboutMe from './AboutMe'
import { Button } from '@mui/material'
import Services from './Services'
import Projects from './Projects'
import { size } from './style/breakpoint'

const PrezWrapper = styled.section`
  justify-content: center;
  & .prez_container {
    flex-direction: column;
    margin: 0 3vw;
    justify-content: space-between;
    align-items: center;
    max-width: 1170px;
    @media ${size.tablet} {
      flex-direction: row-reverse;
    }
    & img {
      width: 100%;
      margin-bottom: 30px;
      border-radius: 15px;
      @media ${size.tablet} {
      width: 50%;
    }
    }
    & .prez_insideDiv {
      flex-direction: column;
      
      @media ${size.mobileM} {
        margin-right: 72px;
    }
      & .prez_insideH1 {
        text-align: left;
      }
      & h1 {
        text-align: right;
        font-family: 'Kanit', sans-serif;
        line-height: 40px;
      }
      & .prez_insideP {
        line-height: 30px;
        max-width: 400px;
        color: #7e8083;
        text-shadow: rgba(0, 0, 0, 7%) 1px 1px 1px;
      }

      & .button_contact_div {
        padding: 20px 0;
        width: 100%;
        justify-content: center;
        & button {
          padding: 15px 60px;
        }
      }
    }
  }
`

function Main() {
  return (
    <div className="main">
      <div className="backgroundPrez">
        <Header />
        <PrezWrapper className="prez_wrapper">
          <div className="prez_container">
          <img src={devPic} alt="" />
            <div className="prez_insideDiv">
              <div className="prez_insideH1">
                <h1>
                  Rozczko Rodolphe <br /> Developpeur Web Freelance
                </h1>
              </div>
              <p className="prez_insideP">
                Besoin d'un developpeur freelance ? <br />
                Je suis votre partenaire idéal pour créer, développer ou migrer
                votre site internet sur des technologies récentes, comme React,
                Sass ou encore NodeJs...
              </p>
              <div className="button_contact_div">
                <Button variant="outlined">Me contacter</Button>
              </div>
            </div>
            
          </div>
        </PrezWrapper>
      </div>
      <AboutMe />
      <div className="backgroundServices">
      <Services />
      </div>
      <Projects />
    </div>
  )
}

export default Main
