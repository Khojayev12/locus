import './App.css';
import Header from './components/header';
import Test from './components/testimonial';
import ContactUs from './pages/contactus';
import Home from './pages/home';
import HowWorks from './pages/howworks'
import Projects from './pages/projects';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <HowWorks />
      <Projects/>
      <Test/>
      <ContactUs/>
    </div>
  );
}

export default App;
