// Write your code here
import './index.css'

import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'

const homeLightUrl =
  'https://assets.ccbp.in/frontend/react-js/home-light-img.png'

const homeDarkUrl = 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'

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
              alt="home"
              src={isDarkTheme ? homeDarkUrl : homeLightUrl}
            />
            <h1 className="heading_image_name">Home</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
