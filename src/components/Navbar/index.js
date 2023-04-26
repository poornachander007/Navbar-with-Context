// Write your code here
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'

import './index.css'

const websiteDarkUrl =
  'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'
// website logo

const websiteLightUrl =
  'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'

const lightThemeUrl =
  'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'

const darkThemeUrl =
  'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const onClickChangeTheme = () => {
        toggleTheme()
      }
      const renderNavBarBasedOnMode = () => (
        <nav
          className={`navBar ${isDarkTheme ? 'navBarDarkBg' : 'navBarLightBg'}`}
        >
          <img
            className="logo_website"
            alt="website logo"
            src={isDarkTheme ? websiteLightUrl : websiteDarkUrl}
          />
          <ul
            className={`ul_container ${
              isDarkTheme ? 'lightColorFont' : 'darkColorFont'
            }`}
          >
            <li className="li_option">
              <Link
                className={`link_to_navigate ${
                  isDarkTheme ? 'lightColorFont' : 'darkColorFont'
                }`}
                to="/"
              >
                Home
              </Link>
            </li>

            <li className="li_option">
              <Link
                className={`link_to_navigate ${
                  isDarkTheme ? 'lightColorFont' : 'darkColorFont'
                }`}
                to="/about"
              >
                About
              </Link>
            </li>
          </ul>
          <button
            data-testid="theme"
            onClick={onClickChangeTheme}
            type="button"
            className="button"
          >
            <img
              className="icon_Theme"
              alt="theme"
              src={isDarkTheme ? lightThemeUrl : darkThemeUrl}
            />
          </button>
        </nav>
      )
      return renderNavBarBasedOnMode()
    }}
  </ThemeContext.Consumer>
)

export default Navbar
