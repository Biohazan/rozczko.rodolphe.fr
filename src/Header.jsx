import styled from 'styled-components'
import './style/style.css'
import { Button } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import { size } from './style/breakpoint'

const HeaderWrapper = styled.div`
  .ul_navbar, input {
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
    & #toggle:checked {
      background-color: red;
    }
    & label {
      font-size: 30px;
      cursor: pointer;
      @media ${size.tablet} {
        display: none;
      }
    }
  }
  #toggle:checked + * .ul_navbar {
    display: flex;
    flex-direction: column;
    position: fixed;
    height: 100%;
    background-color: #fff;
    margin: 0;
    padding: 50px;
    right: 0;
    top: 0;
    z-index: 10;
  }

  .div_navbar,
  ul {
    align-items: center;
  }
  .div_navbar {
    justify-content: center;
  }
  .div_navbar {
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
  }
`

function Header() {
  return (
    <HeaderWrapper>
      <nav className="navbar">
      <label for="toggle">☰</label>
        <input type="checkbox" id="toggle" />
        <div className="div_navbar">
        
          <ul className="ul_navbar">
            <a href="/" className="li_navbar">
              Accueil
            </a>
            <a href="/#service_title" className="li_navbar">
              Services
            </a>
            <a href="/" className="li_navbar">
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
