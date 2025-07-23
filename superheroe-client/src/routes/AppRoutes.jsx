import { BrowserRouter, Route, Routes } from 'react-router';
import { useEffect, useState } from 'react';

import Menu from '../components/Menu/Menu';
import App from '../App';
import { ThemeContex } from '../context/ThemeContext';
import Detail from '../components/Detail/Detail';

export default function AppRoutes() {
  const URL_API = 'https://bambace.github.io/fake-api-superheroes/superheroes.json';

  const [heroes, setHeroes] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(null);

  useEffect(() => {
    getHeroesApi();
  }, []);

  useEffect(() => {
    if (heroes !== null) {
      const favHeroesId = heroes.filter(h => h.isFavorite).map(h => h.id);
      localStorage.setItem('fav-heroes-id', JSON.stringify(favHeroesId));
    
    }
  }, [heroes]);

  useEffect(()=>{
  
      const lsDarkMode = JSON.parse(localStorage.getItem('heroes-dark-mode'))

      setIsDarkMode(lsDarkMode)

  },[])

  useEffect(()=>{
   
    localStorage.setItem('heroes-dark-mode',
    JSON.stringify(isDarkMode))
  },[isDarkMode])
  

  function getHeroesApi() {
    fetch(URL_API)
      .then(res => res.json())
      .then(data => {
        const lsFavHeroesId = JSON.parse(localStorage.getItem('fav-heroes-id')) || [];
        const newHeroes = data.map(h => ({
          ...h,
          isFavorite: lsFavHeroesId.includes(h.id)
        }));
        setHeroes(newHeroes);
      });
  }

  function toggleFavorite(id) {
    const newHeroes = heroes.map(h =>
      id === h.id ? { ...h, isFavorite: !h.isFavorite } : h
    );
    setHeroes(newHeroes);
  }

  return (
    <ThemeContex.Provider value={{ isDarkMode, setIsDarkMode }}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <App heroes={heroes} toggleFavorite={toggleFavorite}>
                <Menu title="Home page" />
              </App>
            }
          />
          <Route
            path="/favorite"
            element={
              <App heroes={heroes ? heroes.filter(h => h.isFavorite) : []} toggleFavorite={toggleFavorite}>
                <Menu title="Preferiti" />
              </App>
            }
          />

          <Route path='detail/:id'
          element={
            <Detail heroes={heroes}>
              <Menu title="Dettagli eroe" />
            </Detail>
          }
          />
       


          <Route path="*" element={<h1>Errore, pagina non trovata</h1>} />
        </Routes>
      </BrowserRouter>
    </ThemeContex.Provider>
  );
}
