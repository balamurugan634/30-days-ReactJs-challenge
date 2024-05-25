import React from 'react'

const Box = (props) => {
  return (
    <div>
        <div className="immg-cont">
          <img src={props.weather} alt="sdf" />
        </div>
        <div className="details">
          <h3 className='temp'>{props.deg}&deg;C</h3>
          <h1 className='city'>{props.city}</h1>
          <h3 className='country'>{props.country}</h3>
        </div>
        <div className="cord">
          <div className="cord-head">
            <h3>lat</h3>
            <h3>lon</h3>
          </div>
          <div className="cord-val">
            <p>{props.lat}</p>
            <p>{props.lon}</p>
          </div>
        </div>
        <div className="card-footer">
        <div className="card-head">
            <h3><img src={props.wind} alt="" /> </h3>
            <h3><img src={props.temp} alt="" /></h3>
          </div>
          <div className="card-val">
            <p>{props.windspeed}</p>
            <p>{props.humidity}</p>
          </div>
        </div>
    </div>
  )
}

export default Box
