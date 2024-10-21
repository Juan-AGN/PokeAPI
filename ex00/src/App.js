
import './App.css';
import React, { useState } from 'react';

function App() {
  const [animal, setAnimal] = useState('');
  const [ability, setAbility] = useState('');

  return (
    <div className="bigdiv">
      <div className="basic_box">
        <div>
          <p>Animal: 
          <Form_one animal={animal} setAnimal={setAnimal}/></p>
          <br></br>
          <Form_ability ability={ability} setAbility={setAbility} />
        </div>
      </div>
      <div className="basic_box">
        {console.log("Valor mostrado en la página:", animal)}
      </div>
    </div>
  );
}

function Form_one({ animal, setAnimal }) {
  const handleAnimalChange = (event) => {
    setAnimal(event.target.value);
  };

  return (
    <div>
      <input
        className="input_on_div"
        type="text"
        value={animal}
        onChange={handleAnimalChange}
      />
    </div>
  );
}

function Form_ability({ ability, setAbility }) {
  const handleAbilityChange = (event) => {
    setAbility(event.target.value);
  };

  return (
    <div>
      <select name="ability" id="ability" value={ability} onChange={handleAbilityChange}>
        <option value="overgrow">Overgrow</option>
        <option value="blaze">Blaze</option>
        <option value="torrent">Torrent</option>
        <option value="shield-dust">Shield Dust</option>
        <option value="shed-skin">Shed Skin</option>
        <option value="intimidate">Intimidate</option>
        <option value="static">Static</option>
        <option value="volt-absorb">Volt Absorb</option>
        <option value="flame-body">Flame Body</option>
        <option value="run-away">Run Away</option>
        <option value="keen-eye">Keen Eye</option>
        <option value="guts">Guts</option>
        <option value="compound-eyes">Compound Eyes</option>
        <option value="swarm">Swarm</option>
        <option value="synchronize">Synchronize</option>
        <option value="inner-focus">Inner Focus</option>
        <option value="levitate">Levitate</option>
      </select>
    </div>
  );
}

function Finish_button({ Animal, Ability }) {
}

export default App;
