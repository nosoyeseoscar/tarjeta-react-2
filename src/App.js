import React from 'react';
import './App.css';
import Tarjeta from './components/tarjeta';

function App() {
  return (
    <div className="App">
      <div className="contenedor">
        <Tarjeta 
          titulo="Soy un Título Largo, muy Largoooo" 
          desc="Soy una descripción muy larga: Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Explicabo laborum suscipit commodi laboriosam, quasi provident molestias corporis minima quis 
          aspernatur repellat nobis, dolore quod voluptate distinctio maiores nisi, optio eligendi?" 
        >
        </Tarjeta>
        <Tarjeta 
          titulo="Soy un Título  2" 
          desc="Soy una descripción muy larga: Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Explicabo laborum suscipit commodi laboriosam, quasi provident molestias corporis minima quis 
          aspernatur repellat nobis, dolore quod voluptate distinctio maiores nisi, optio eligendi?" 
        >
        </Tarjeta>
        <Tarjeta 
          titulo="Soy un Título Largo, muy Largoooo 2" 
          desc="Soy una descripción muy larga: Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Explicabo laborum suscipit commodi laboriosam, quasi provident molestias corporis minima quis 
          aspernatur repellat nobis, dolore quod voluptate distinctio maiores nisi, optio eligendi?" 
        >
        </Tarjeta>
        <Tarjeta 
          titulo="Título" 
          desc="Soy una descripción muy larga: Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Explicabo laborum suscipit commodi laboriosam, quasi provident molestias corporis minima quis 
          aspernatur repellat nobis, dolore quod voluptate distinctio maiores nisi, optio eligendi?" 
        >
        </Tarjeta>
        <Tarjeta 
          titulo="Soy un Título Largo, muy Largoooo 2" 
          desc="Soy una descripción muy larga: Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Explicabo laborum suscipit commodi laboriosam, quasi provident molestias corporis minima quis 
          aspernatur repellat nobis, dolore quod voluptate distinctio maiores nisi, optio eligendi?" 
        >
        </Tarjeta>
        <Tarjeta 
          titulo="Soy un Título Largo, muy Largoooo 2" 
          desc="Soy una descripción muy larga: Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Explicabo laborum suscipit commodi laboriosam, quasi provident molestias corporis minima quis 
          aspernatur repellat nobis, dolore quod voluptate distinctio maiores nisi, optio eligendi?" 
        >
        </Tarjeta>
      </div>      
    </div>

  );
}

export default App;
