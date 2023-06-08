import styled from 'styled-components'
import './style/style.css'
import { Button } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import { size } from './style/breakpoint'
import colors from './style/color'
import { useEffect } from 'react'

const HeaderWrapper = styled.div`
  .ul_navbar,
  input {
    display: none;
  }
  .ul_navbar {
    @media ${size.tablet} {
      display: flex;
    }
  }
  .navbar {
    /* flex-direction: row-reverse; */
    width: 100%;
    justify-content: space-around;
    align-items: center;
    @media ${size.tablet} {
      justify-content: center;
    }
    & label {
      display: flex;
      flex-direction: column;
      cursor: pointer;
      width: 44px;
      height: 30px;
      & span {
        margin: 4px 0px;
        float: right;
        height: 2px;
        background-color: black;
        width: 100%;
      }
      & span:last-child {
        width: calc(100% - 10px);
        transition: all 0.4s ease-in-out;
      }

      @media ${size.tablet} {
        display: none;
      }
    }
  }
  .div_navbar,
  ul {
    align-items: center;
  }
  .div_navbar {
    justify-content: center;
    max-width: 1140px;
    height: 81px;
    & button {
      & .MuiButton-endIcon {
        margin-left: 0 !important;
      }
      justify-content: center;
      align-items: center;
      border-radius: 50px;
      padding: 8px 13px;
      min-width: 10px;
      text-align: center;
    }
  }
  .ul_navbar {
    padding: 0;
    flex-wrap: wrap;
    position: relative;

    & a {
      padding: 5px 5px;
      margin: 10px 20px;
      list-style: none;
      cursor: pointer;
      text-decoration: none;
      color: inherit;
      &:hover {
        border-bottom: 1px solid black;
      }
    }
    & i {
      cursor: pointer;
      position: absolute;
      top: 10px;
      right: 10px;
      font-size: 25px;
      color: ${colors.fontBlue};
    }
    @media ${size.tablet} {
      & i {
        display: none;
      }
    }
  }
  #toggle:checked + * span:last-child {
    width: 100%;
  }

  #toggle:checked ~ .div_navbar {
    & .ul_navbar {
      display: flex;
      flex-direction: column;
      position: fixed;
      height: 100%;
      background-color: #fff;
      margin: 0;
      padding: 50px 60px;
      padding-left: 5px;
      right: 0;
      top: 0;
      z-index: 10;
      font-size: 1.2em;
    }
  }
`

function Header() {


  useEffect(() => {
    const inputToggle = document.getElementById('toggle')
    const cross = document.getElementById('menu_cross')
    const iconMenu = document.getElementById('div_navbar')
    const ulNavbar = document.getElementById('ul_navbar')

    window.addEventListener('click', (e) => {
      if (
        inputToggle.checked === true &&
        (e.target === cross || e.composedPath().find((el) => el === ulNavbar))
      ) {
        inputToggle.checked = false
      }
    })
  }, [])

  

  return (
    <HeaderWrapper>
      <nav className="navbar" id="home">
        <input type="checkbox" id="toggle" />
        <div className="hoverMenu">
          <label htmlFor="toggle">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
        <div className="div_navbar" id="div_navbar">
          <ul className="ul_navbar" id='ul_navbar'>
            <i className="fa-regular fa-circle-xmark" id="menu_cross"></i>
            <a href="/#home" className="li_navbar">
              Accueil
            </a>
            <a href="/#service_title" className="li_navbar">
              Services
            </a>
            <a href="/#projects_title" className="li_navbar">
              Projets
            </a>
            <a href="/" className="li_navbar">
              Contact
            </a>
          </ul>
          <Button
            className="sendButton"
            variant="outlined"
            endIcon={<SendIcon />}
          ></Button>
        </div>
      </nav>
    </HeaderWrapper>
  )
}

export default Header
