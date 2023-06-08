import React, { useState } from 'react';
import Tarjeta from './Tarjeta';

const Formulario = ({setStyles}) => {
    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');
    const [error, setError] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
      
        if (input1.trim().length < 3 || /^\s/.test(input1)) {
          setError('Por favor chequea que la información sea correcta');
          return;
        }
      
        if (input2.length < 6) {
          setError('Por favor chequea que la información sea correcta');
          return;
        }
        
        setInput1('');
        setInput2('');
        setError('');
      
      };

  return (
    <div>
      <h2>Formulario</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="input1">Nombre:</label>
          <input
            type="text"
            id="input1"
            value={input1}
            onChange={(e) => setInput1(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="input2">Apellido:</label>
          <input
            type="text"
            id="input2"
            value={input2}
            onChange={(e) => setInput2(e.target.value)}
          />
        </div>
        <div>
        <label>Fondo:</label>
        <select onChange={(e) => setStyles((prevStyles) => ({...prevStyles, background: e.target.value})) }>
            <option value="transparent">transparent</option>
            <option value="black">black</option>
            <option value="yellow">yellow</option>
            <option value="red">red</option>
            <option value="pink">pink</option>
            <option value="orange">orange</option>
            <option value="blue">blue</option>
            <option value="green">green</option>
        </select>
        </div>

        <div>
        <label>Color de letra:</label>
        <select  onChange={(e) => setStyles((prevStyles) => ({...prevStyles, color: e.target.value})) }>
            <option value="white">white</option>
            <option value="black">black</option>
            <option value="yellow">yellow</option>
            <option value="red">red</option>
            <option value="pink">pink</option>
            <option value="orange">orange</option>
            <option value="blue">blue</option>
            <option value="green">green</option>
        </select>
        </div>

        
        
        <button tipe= 'submit' >Enviar</button>
      </form>
      {input1 && input2 && !error && (
        <Tarjeta info1={input1} info2={input2} />
      )}
    </div>
  );
};

export default Formulario;


    