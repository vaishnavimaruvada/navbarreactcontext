import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      return (
        <div className="container">
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
              className="images"
            />
          </div>
          <div className="links">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/about">
              <li>About</li>
            </Link>
          </div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
              className="images"
              onClick={toggleTheme}
            />
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)
export default Navbar
