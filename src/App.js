import { useState } from 'react';
import './App.css';
import useWeather from './hooks/useWeather';

function App() {

  const [city, setCity] = useState('Madrid');

  const [data, loading, error] = useWeather(city);

  console.log(data);

  return (
    <div className="App">
      <input type="text" onChange={(event) => {
        setCity(event.target.value);
      }} />
      {loading && (
        <div>
          <p>Recuperando datos...</p>
        </div>
      )}
      {error && (
        <div>
          <p>No se han podido recuperar los datos</p>
        </div>
      )}
      {data && (
        <div>
          <p>Ciudad: {data.city}</p>
          <p>Temperatura: {data.temp}º</p>
          <p>Temperatura mínima: {data.temp_min}º</p>
          <p>Temperatura máxima: {data.temp_max}º</p>
        </div>
      )}
    </div>
  );
}

export default App;
