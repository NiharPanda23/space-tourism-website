import { images } from "../constants"

const NavBar = () => {
  return (
    <div className="absolute">
      <div>
        <ul>
          <li>
            <img src={images.logo} alt="logo" />
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>00 Home</li>
          <li>01 Destination</li>
          <li>02 Crew</li>
          <li>03 Technology</li>
          <li><img src={images.menu} alt="Menu" /></li>
        </ul>
      </div>
      
    </div>
  )
}

export default NavBar