import React from 'react';
import DG from '2gis-maps';
import { useEffect } from 'react';
import { mainInfo } from '../models';


const Map = () => {
    useEffect(()=>{
        const map = DG.map('map', {
            'center': [ mainInfo.mapMarker.lat, mainInfo.mapMarker.lon ],
            'zoom': 15,
            'zoomControl': false,
            'fullscreenControl': false,
        });
        DG.marker([ mainInfo.mapMarker.lat, mainInfo.mapMarker.lon ]).addTo(map);
    })
    return (<div>
        <div id='map' className='w-700 h-400 bg-red-400'>
        </div>
    </div>

    );
};

export default Map;