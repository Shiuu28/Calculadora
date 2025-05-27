import { useState } from 'react';
import './App.css';
import { calcularOperacion } from './operaciones';

function App() {
  const [pantalla, setPantalla] = useState('');

  const agregar = (valor) => {
    setPantalla((prevPantalla) => prevPantalla + valor);
  };

  const limpiar = () => {
    setPantalla('');
  };

  const calcular = () => {
    const resultado = calcularOperacion(pantalla);
    setPantalla(resultado);
  };


  return (
    <div className="calculadora">
      <input
        type="text"
        id="pantalla"
        value={pantalla}
        disabled
        readOnly
      />

      <div className="botones">
        <button onClick={() => agregar('7')}>7</button>
        <button onClick={() => agregar('8')}>8</button>
        <button onClick={() => agregar('9')}>9</button>
        <button onClick={() => agregar('/')}>/</button>

        <button onClick={() => agregar('4')}>4</button>
        <button onClick={() => agregar('5')}>5</button>
        <button onClick={() => agregar('6')}>6</button>
        <button onClick={() => agregar('*')}>*</button>

        <button onClick={() => agregar('1')}>1</button>
        <button onClick={() => agregar('2')}>2</button>
        <button onClick={() => agregar('3')}>3</button>
        <button onClick={() => agregar('-')}>-</button>

        <button onClick={() => agregar('0')}>0</button>
        <button onClick={() => agregar('.')}>.</button>
        <button onClick={limpiar} className="limpiar" >C</button>
        <button onClick={() => agregar('+')}>+</button>

        <button onClick={calcular} className="igual" style={{ gridColumn: 'span 4' }}>=</button>
      </div>
    </div>
  );
}

export default App;
