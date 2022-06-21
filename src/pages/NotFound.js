import React from 'react';
import { ButtonBackToHome } from '../components/ButtonBackToHome';

export const NotFound = () => (
  <div>
    <h1 className="title">
      <b>404</b>
    </h1>
    <p className="subtitle">¡Producto no encontrado!</p>
    <ButtonBackToHome />
  </div>
);
