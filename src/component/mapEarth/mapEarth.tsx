
import React from 'react';

import {
  ComposableMap,
  Geographies,
  Geography,
  Graticule,
  Line,

} from "react-simple-maps";
import { Marker } from "react-simple-maps"
const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";


const markers: {
  markerOffset: number;
  name: string;
  coordinates: [number, number];
}[] = [
    {
      markerOffset: -30,
      name: "Buenos Aires",
      coordinates: [-58.3816, -34.6037]
    },
    { markerOffset: 15, name: "La Paz", coordinates: [2.8522, 49] },
    { markerOffset: 15, name: "Brasilia", coordinates: [-74.006, 40.7128] },
    {
      markerOffset: 15, name: "casablanca", coordinates: [-7.5898434
        , 31.5731104]
    },

  ]

const MapEarth = ()=>{


    return (
        <div className='map' >
        <ComposableMap
          projection="geoEqualEarth"
          projectionConfig={{
            scale: 300,
            center: [-40, 30]
          }}
        >
  
          <Graticule stroke="#DDD" />
          <Geographies
            geography={geoUrl}
            fill="#D6D6DA"
            stroke="#FFFFFF"
            strokeWidth={0.5}
          >
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography key={geo.rsmKey} geography={geo} />
              ))
            }
          </Geographies>
  
          <Line
            from={[2.3522, 48.8566]}
            to={[-74.006, 40.7128]}
            stroke="#FF5533"
            strokeWidth={4}
            strokeLinecap="square"
          />
          <Line
            from={[-7.5898434
              , 33.5731104]}
            to={[2.3522, 48.8566]}
            stroke="#FF5533"
            strokeWidth={4}
            strokeLinecap="round"
          />
          {markers.map(({ name, coordinates, markerOffset }) => (
            <Marker key={name} coordinates={coordinates} >
              <g
                fill="none"
                stroke="#FF5533"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                transform="translate(-12, -24)"
              >
                <circle cx="12" cy="10" r="3" />
                <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
              </g>
              <text
                textAnchor="middle"
                y={markerOffset}
                style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
              >
                {name}
              </text>
            </Marker>
          ))}
  
        </ComposableMap>
      </div>
    )
}
export default MapEarth 