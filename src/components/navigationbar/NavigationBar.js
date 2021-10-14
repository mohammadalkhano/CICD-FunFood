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

      <span className="button" onClick={() => history.push('/AboutView')}>
        Home
      </span>
      <span className="button" onClick={() => history.push('/Recipe')}>
        Recipes
      </span>
      <span className="button" onClick={() => history.push('/AboutView')}>
        About
      </span>
      <span className="button" onClick={() => history.push('/ContactView')}>
        Contact
      </span>
    </div>
  );
};
