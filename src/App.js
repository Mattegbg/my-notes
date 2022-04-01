import React from 'react';
import { Routes, Route } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import NotesPage from './pages/NotesPage';
import NotePage from './pages/NotePage';






function App() {
  return (

    //Nedan skapar vi routes -> path -> ID för vår data.js
    //Dark i containern kommer från CSS
    <div className="container dark"> 
      <div className="app">
      <Header /> 
      <Routes>

        <Route element={<NotesPage />} exact path="/" />
        <Route element={<NotePage />} exact path="/note/:id" />

      </Routes>
      </div>
    </div>

  );
}

export default App;
