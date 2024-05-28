import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../css/menubar.css';


const Menubar = () => {
    const [activeMenu, setActiveMenu] = useState(null);

    const handleClick = (menu) => {
        setActiveMenu(menu);
    };
  
    return (
      <div className="menubar">
        <Link
          className={`mainMenu ${activeMenu === 'recmovie' ? 'activeMenu' : ''}`}
          to='/recmovie'
          onClick={() => handleClick('recmovie')}
        >
          추천영화
        </Link>
  
        <Link
          className={`mainMenu ${activeMenu === 'curscreen' ? 'activeMenu' : ''}`}
          to='/curscreen'
          onClick={() => handleClick('curscreen')}
        >
          현재상영작
        </Link>
  
        <Link
          className={`mainMenu ${activeMenu === 'genre' ? 'activeMenu' : ''}`}
          to='/genre'
          onClick={() => handleClick('genre')}
        >
          장르별영화
        </Link>
      </div>
    );
  };

export default Menubar;