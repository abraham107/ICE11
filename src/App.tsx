import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// common components
import Header from './Views/components/header';
import Footer from './Views/components/footer';

// content components
import Home from './Views/content/home';
import About from './Views/content/about';
import Projects from './Views/content/projects';
import Services from './Views/content/services';
import Contact from './Views/content/contact';

// TVShow List Components
import TVShowsList from './Views/tvshows-list/tvshows-list';
import AddTVShow from './Views/tvshows-list/add';

// Styles and fonts
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';

// JavaScript Libraries
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
          <Routes>
            <Route path="/" element={<Home username ='ataylor' displayName='Alex Taylor' />}></Route>
            <Route path="/home" element={<Home username ='ataylor' displayName='Alex Taylor' />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/projects" element={<Projects />}></Route>
            <Route path="/services" element={<Services />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/tvshows-list" element={<TVShowsList />}></Route>
            <Route path="/add" element={<AddTVShow />}></Route>
          </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
