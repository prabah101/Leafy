import './App.css';
import About from './components/About/About';
import Home from './components/Home/Home';
import UploadComp from './components/Home/UploadComp';
import Landing from './components/Landing/Landing';

function App() {
  return (
    <div className="App">
      <Landing/>
      <Home/>
      {/* <UploadComp /> */}
      <About/>
    </div>
  );
}

export default App;
