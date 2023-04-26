// Write your code here
// Write your code here
import './index.css'

import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'

const aboutLightUrl =
  'https://assets.ccbp.in/frontend/react-js/about-light-img.png'

const aboutDarkUrl =
  'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <div className="page_container">
          <Navbar />
          <div
            className={`content_container ${
              isDarkTheme ? 'lightColorFont darkBg' : 'darkColorFont lightBg'
            }`}
          >
            <img
              className="image_content"
              alt="about"
              src={isDarkTheme ? aboutDarkUrl : aboutLightUrl}
            />
            <h1 className="heading_image_name">About</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
