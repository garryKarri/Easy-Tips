import React, { useRef } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import s from './Map.module.css';
import { defaultTheme } from './theme';

const API_KEY = process.env.REACT_APP_API_KEY;

const containerStyle = {
  width: '400px',
  height: '400px',
};

const center = {
  lat: 55.75399399999374,
  lng: 37.62209300000001,
};
const defaultOptions = {
  panConstol: true,
  zoomConstol: true,
  mapTypeConstol: false,
  scaleControl: true,
  streetViewControl: false,
  rotateControl: false,
  clickableIcons: false,
  keyboardShortcuts: false,
  scrollwheel: false,
  disableDoubleClickZoom: false,
  fullscreenControl: false,
  styles: defaultTheme,

};

export default function Map() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: API_KEY,
  });
  const mapRef = useRef(undefined);
  const onLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);

  const onUnmount = React.useCallback(() => {
    mapRef.current = undefined;
  }, []);

  return (
    isLoaded

      ? (
        <div className={s.container}>

          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
            onLoad={onLoad}
            onUnmount={onUnmount}
            options={defaultOptions}
          />
        </div>
      )
      : <div>xcjkxcnjk</div>
  );
}
