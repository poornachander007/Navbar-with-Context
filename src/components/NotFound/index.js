// Write your code here
// Write your code here
// Write your code here
import './index.css'

import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'

const notFoundUrl = 'https://assets.ccbp.in/frontend/react-js/not-found-img.png'

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
            <img className="image_content" alt="not found" src={notFoundUrl} />
            <h1 className="heading_image_name">Lost Your Way?</h1>
            <p className="notFoundDescriptions">
              we cannot seem to find the page you are looking for
            </p>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
