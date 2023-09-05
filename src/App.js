import './App.css';
import HeroSection from './components/Hero';
import Navigation from './components/Navigation';



const App = () => {
  return (
    <div className="logo">
     <Navigation/>
      <HeroSection/>
    </div>
  );
};

export default App;
