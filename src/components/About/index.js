// Write your code here
import Navbar from '../Navbar'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <>
          <Navbar />
          {!isDarkTheme ? (
            <div className="Light">
              <div className>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/about-light-img.png"
                  className="home-image"
                  alt="home"
                />
                <h1 className="home-heading-light">About</h1>
              </div>
            </div>
          ) : (
            <div className="main-home-container">
              <div className="dark">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/about-dark-img.png"
                  className="home-image"
                  alt="home"
                />
                <h1 className="home-heading-dark">About</h1>
              </div>
            </div>
          )}
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
