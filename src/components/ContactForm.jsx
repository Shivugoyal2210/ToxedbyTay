import React from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

const ContactForm = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyCKt-9unVURf4GzKYwukndCxAGD2w2aIvE',
  });
  return (
    <GoogleMap
      zoom={10}
      center={{ lat: 33.627, lng: -112.06618194683227 }}
    ></GoogleMap>
  );
};

export default ContactForm;
