import './style/style.css'
import Header from './Header'
import styled from 'styled-components'
import devPic from './assets/devPic.jpg'
import AboutMe from './AboutMe'
import { Button } from '@mui/material'
import Services from './Services'
import Projects from './Projects'
import { size } from './style/breakpoint'
import { useState } from 'react'
import { useEffect } from 'react'

const PrezWrapper = styled.section`
  @media ${size.tablet} {
    margin-top: 100px;
  }
  & .prez_container {
    flex-direction: column;
    margin: 0 3vw;
    justify-content: space-between;
    align-items: center;
    max-width: 1170px;
    gap: 40px;
    @media ${size.tablet} {
      flex-direction: row;
    }
    & img {
      width: 100%;
      margin-bottom: 30px;
      border-radius: 15px;
      @media ${size.tablet} {
        width: 50%;
        margin-bottom: 0px;
      }
    }
    & .prez_insideDiv {
      flex-direction: column;
      align-items: center;
      text-align: center;
      @media ${size.tablet} {
        text-align: end;
      }
      & .prez_insideH1 {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 50px;
        @media ${size.tablet} {
          align-items: flex-end;
          margin-bottom: 10px;
        }
      }
      & h1 {
        margin: 0;
        font-family: 'Kanit', sans-serif;
        font-size: 2.8em;
        line-height: 54px;
      }
      & h2 {
        margin: 0;
        padding: 0 35px;
        @media ${size.tablet} {
          padding: 0;
        }
      }
      & .prez_insideP {
        line-height: 30px;
        max-width: 400px;
        /* color: #7e8083; */
        text-shadow: rgba(0, 0, 0, 7%) 1px 1px 1px;
        font-size: 1.2em;
        @media ${size.tablet} {
          font-size: 18px;
        }
      }
      & .button_contact_div {
        margin-top: 20px;
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
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [prezHeight, setPrezHeight] = useState()

  window.addEventListener('resize', () => {
    setWindowWidth(window.innerWidth)
    setPrezHeight(document.getElementById('prezHeight').offsetHeight)
  })
  useEffect(() => {
    setTimeout(() => setPrezHeight(document.getElementById('prezHeight').offsetHeight), 100)
  }, [])

  return (
    <div className="main">
      <div className="backgroundPrez">
        <Header />
        <PrezWrapper className="prez_wrapper">
          <div className="prez_container">
            <div className="prez_insideDiv" id="prezHeight">
              <div className="prez_insideH1">
                <h1>Rozczko Rodolphe</h1>
                <h2>Developpeur Web Freelance</h2>
              </div>
              {windowWidth <= 800 && (
                <img src={devPic} alt="Developpeur en train de coder" />
              )}
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
            {windowWidth > 800 && (
              <div className="vertical_line" style={{ height: prezHeight }} />
            )}
            {windowWidth > 800 && (
              <img src={devPic} alt="Developpeur en train de coder" />
            )}
          </div>
        </PrezWrapper>
      </div>
      <div className="horizontal_line" />
      <div className="backgroundAboutMe">
        <AboutMe />
      </div>
      <div className="horizontal_line" />
      <div className="backgroundServices">
        <Services />
      </div>
      <div className="horizontal_line" />
      <Projects />
    </div>
  )
}

export default Main
