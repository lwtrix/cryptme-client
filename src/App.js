import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navigation from './views/navigation/navigation.comp';
import Home from './views/home/home.comp';
import About from './views/about/about.comp';
import News from './views/news/news.comp';
import Authentication from './views/authentication/authentication';
import AdminDashboard from './views/admin-dashboard/admin-dashboard.comp';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCurrentUser } from './redux/actions/currentUserActions';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCurrentUser = async () => {
      await dispatch(getCurrentUser);
    };
    fetchCurrentUser();
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route element={<Navigation />} path="/">
          <Route element={<Home />} path="/" />
          <Route element={<About />} path="/about" />
          <Route element={<News />} path="/news" />
          <Route element={<Authentication />} path="/auth" />
          <Route element={<AdminDashboard />} path="/admin-dashboard" />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
