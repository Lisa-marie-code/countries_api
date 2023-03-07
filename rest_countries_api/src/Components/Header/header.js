import React,{useEffect,useState} from 'react';
import "./header.css"



export const Theme = () =>{

  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const body = document.querySelector('body');
    body.classList.toggle('dark-theme', theme === 'dark');
  }, [theme]);

const toggleTheme = () => {
  setTheme(theme === 'light' ? 'dark' : 'light');
  
};
  return(
      <div>
          <div className='title-bar'>
              <h2>Where in the world?</h2>
              <div>
              <h4 onClick={toggleTheme}>Dark Mode</h4>
              
              </div>
          </div>
      </div>
  )
}




export default Theme ;