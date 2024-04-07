import Home from "./component/Home";
import Destination from "./component/Destination";
import Crew from "./component/Crew";
import Technology from "./component/Technology";
import NavBar from "./component/NavBar";

const App = () => (
  <>
    <NavBar />
    <section id="home">
      <Home />
    </section>
    <section id="destination">
      <Destination />
    </section>
    <section id="crew">
      <Crew />
    </section>
    <section id="technology">
      <Technology />
    </section>
  </>
)

export default App