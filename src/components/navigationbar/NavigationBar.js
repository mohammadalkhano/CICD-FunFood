import React from 'react';
import './NavigationBar.css';
import { useHistory } from 'react-router-dom';
import LogoType from '../../shared/images/logotype.png';

export const NavigationBar = () => {
  const history = useHistory();

  return (
    <div className="NavigationBarWrapper">
      <img
        onClick={() => history.push('/')}
        className="LogoType"
        src={LogoType}
        alt="oops"
      />

      <span className="button" onClick={() => history.push('/Home')}>
        Home
      </span>
      <span className="button" onClick={() => history.push('/Recipes')}>
        Recipes
      </span>
      <span className="button" onClick={() => history.push('/About')}>
        About
      </span>
      <span className="button" onClick={() => history.push('/Contact')}>
        Contact
      </span>
    </div>
  );
};
