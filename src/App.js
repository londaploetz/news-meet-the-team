import './App.css';
import { Brand, Navbar, SideNav, Team, Footer, WeatherBar } from './components';

const App = () => (
  <div className="App">
    <Brand />
    <Navbar />
    <WeatherBar />
    <Team />
    <Footer />
  </div>
);

export default App;
