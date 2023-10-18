import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navigation from './views/navigation/navigation.comp';
import Home from './views/home/home.comp';
import About from './views/about/about.comp';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route element={<Navigation />} path='/'>
        <Route element={<Home />} path='/' />
        <Route element={<About />} path='/about' />
      </Route>
    </Routes>
    </div>
  );
}

export default App;
