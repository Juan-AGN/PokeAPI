
import './App.css';
import React, { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { GoogleGenerativeAI, HarmBlockThreshold, HarmCategory  } from "@google/generative-ai";


function App() {
  const [userToken, setUserToken] = useState(null);
  const handleLoginSuccess = (credentialResponse) => {
    const token = credentialResponse.credential;
    setUserToken(token);
    console.log('Login Success, token:', token);
  };
  const handleLoginFailure = (error) => {
    console.error('Login Failed:', error);
  };
  const [animal, setAnimal] = useState('');
  const [ability, setAbility] = useState('Overgrow');
  const [response, setResponse] = useState('');
  const handleGenerateText = async () => {
    if (!userToken) {
      alert('Please login first.');
      return;
    }
    const result = await Finish_button({ Animal: animal, Ability: ability });
    setResponse(result);
  };

  return (
    <div className="bigdiv">
      {!userToken && (
        <GoogleLogin
          onSuccess={handleLoginSuccess}
          onError={handleLoginFailure}
        />
      )}
      {userToken && (
        <>
      <div className="basic_box">
        <div className="inside_box_two">
          <p>ANIMAL: 
          <Form_one animal={animal} setAnimal={setAnimal}/>
          </p>
          <p>HABILITY: 
          <Form_ability ability={ability} setAbility={setAbility} />
          </p>
          <br></br>
          <button className="chat-form-button" type="submit" onClick={handleGenerateText}>
            Generate Text
          </button>
        </div>
      </div>
      <br></br>
      <div className="inside_box">
        {response && <p>{response}</p>} 
      </div>
      </>
      )}
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
        placeholder="Dog"
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

const genAI = new GoogleGenerativeAI("AIzaSyCneQUFRy-ZM5Y5RuwJ4d3i0jUO4Cu7YJw");

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

async function Finish_button({ Animal, Ability }) {
  const promp="Muestrame el nombre (debe contener un nombre parecido al de los pokemons,nada de nombres poco originales), los tipos y una descripcion, no añadas ningun 'aqui tienes un' ni nada de eso, solo pon la respuesta, todo esto separado en tres campos por medio de | | |, sin caracteres especiales, los unicos caracteres permitidos son solo letras, | | |, : para poner seguido del NOMBRE, TIPO y DESCRIPCION (los tres campos antes mencionados que deben estar separados por | | |) y / para separar los tipos en caso de que tenga 2 , la descripcion debe ser breve de como se comportaria en la naturaleza un pokemon que sea un " + Animal + " con la habilidad " + Ability + "en menos de 800 palabras y mas de 600, la abilidad debe integrarse en la descripcion, pon la respuesta en ingles ejemplo: NAME: Pikachu | | | TIPE: Electrico / Normal | | | DESCRIPTION: blablablamuchotextoloquesea";
  const chatSession = model.startChat({
    generationConfig,
    history: [
    ],
  });

  const result = await chatSession.sendMessage(promp);
  console.log("Promp: " + promp);
  console.log(result.response.text());
  return(result.response.text());
}


export default App;
