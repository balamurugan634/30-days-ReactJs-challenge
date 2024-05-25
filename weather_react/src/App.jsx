import { useState } from "react";
import "./App.css";
import Box from "./components/Box";
import clear from "./assets/clear.png";
import wind from "./assets/wind.svg";
import cloud from "./assets/cloud.png";
import snow from "./assets/snow.png";
import shower from "./assets/shower.png";
import rain from "./assets/rain.png";
import temp from "./assets/thermometer-sun.svg";
function App() {
  const [weather, setWeather] = useState(snow);
  const [text, setText] = useState("london");
  const [city, setCity] = useState("london");
  const [deg, setDeg] = useState(0);
  const [lon, setLon] = useState(0);
  const [country, setCountry] = useState("GB");
  const [lat, setLat] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [windspeed, setWindspeed] = useState(0);
  const [citynotfound, setCitynotfound] = useState(false);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState(null);

  const weathericon = {
    "01d": clear,
    "01n": clear,
    "02d": cloud,
    "02n": cloud,
    "03d": shower,
    "03n": shower,
    "04d": shower,
    "04n": shower,
    "09d": rain,
    "09n": rain,
    "10d": rain,
    "10n": rain,
    "13d": snow,
    "13n": snow,
  };
  async function handleSubmit() {
    // console.log(data)
    try {
      const fetch_data = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${text}&&appid=b19e0818681a4d17b3dd9ed4c5554c78&units=Metric`
      );
      const data = await fetch_data.json();
      console.log(data);
      if (data.cod === "404") {
        console.log("not found");
        setCity("not found");
        setCitynotfound(true);
        setLoad(false);
        return;
      } else {
        setDeg(Math.floor(data.main.temp));
        setCountry(data.sys.country);
        setLat(data.coord.lat);
        setLon(data.coord.lon);
        setWindspeed(data.wind.speed);
        setHumidity(data.main.humidity);
        setCity(data.name);
        setLoad(true)
        setWeather(weathericon[data.weather[0].icon] || clear);
        setCitynotfound(false);
      }
    } catch (error) {
      console.error("an error", error.message);
      setError("error occured");
    } finally {
      setLoad(false);
    }
  }
  // function handledown(e){
  //   if(e.key==="Enter"){
  //     handleSubmit()
  //   }
  // }
  function handleKey(e){
    if(e.key==="Enter"){
      handleSubmit()
    }
  }
  return (
    <div className="full-box">
      <div className="box">
        <div className="input-area">
          <input
            type="text"
            value={text}
            id="searchval"
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e)=>handleKey(e)}
          />
          <span>
            <button onClick={handleSubmit}>search</button>
          </span>
        </div>
        {/* <h1 className='weather'>{weather}</h1> */}
        {/* <div className="immg-cont">
          <img src={weather} alt="sdf" />
        </div>
        <div className="details">
          <h3 className='temp'>{deg}&deg;C</h3>
          <h1 className='city'>{city}</h1>
          <h3 className='country'>{country}</h3>
        </div>
        <div className="cord">
          <div className="cord-head">
            <h3>lat</h3>
            <h3>lon</h3>
          </div>
          <div className="cord-val">
            <p>{lat}</p>
            <p>{lon}</p>
          </div>
        </div>
        <div className="card-footer">
        <div className="card-head">
            <h3><img src={wind} alt="" /> </h3>
            <h3><img src={temp} alt="" /></h3>
          </div>
          <div className="card-val">
            <p>{windspeed}</p>
            <p>{humidity}</p>
          </div>
        </div> */}
        {!load && !citynotfound &&
          <Box
            weather={weather}
            wind={wind}
            humidity={humidity}
            temp={temp}
            windspeed={windspeed}
            lat={lat}
            lon={lon}
            city={city}
            country={country}
            deg={deg}
          />
        }
        {load && <div className="load-message">...loading</div>}
        {error && <div className="error-message">{error}</div>}
        {citynotfound && <div className="city-not">city not found</div>}
      </div>
    </div>
  );
}

export default App;
