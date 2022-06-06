import React from 'react'
var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

function Mymap() {
           
    mapboxgl.accessToken = 'pk.eyJ1IjoiaGFyc2hpdG1pc2hyYSIsImEiOiJja3dia211b3MwMTd5Mm5xdm1yd2o1dmlxIn0.QQokhJ0cV4yV5EVchp1ymg';
    var map = new mapboxgl.Map({
    container: 'mymap',
    style: 'mapbox://styles/mapbox/streets-v11'
    });
  return (
    <>
    </>
  )
}

export default Mymap