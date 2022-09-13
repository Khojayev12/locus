import './App.css';
import Header from './components/header';
import Home from './pages/home';
import HowWorks from './pages/howworks'

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <HowWorks />
    </div>
  );
}

export default App;
