import React from 'react';
import DG from '2gis-maps';
import { useEffect } from 'react';
import { mainInfo } from '../models';


const mapCenterLat = (mainInfo.mapOffice.lat + mainInfo.mapProm.lat) / 2;
const mapCenterLon = (mainInfo.mapOffice.lon + mainInfo.mapProm.lon) / 2;

const Map = () => {
    useEffect(()=>{
        const map = DG.map('map', {
            'center': [ mapCenterLat, mapCenterLon ],
            'zoom': 15,
            'zoomControl': false,
            'fullscreenControl': false,
        });
        DG.marker([ mainInfo.mapOffice.lat, mainInfo.mapOffice.lon ])
            .addTo(map)
            .bindLabel('Офис', {
                static: true
            });
        DG.marker([ mainInfo.mapProm.lat, mainInfo.mapProm.lon ])
            .addTo(map)
            .bindLabel('Производство', {
                static: true
            });
    }, [])
    return (<div id='map' className='w-850 h-400 bg-red-400 sm:w-full sm:h-72'></div>);
};

export default Map;