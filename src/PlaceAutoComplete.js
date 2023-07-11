import React, { useEffect, useRef } from 'react';
import { FormControl } from 'react-bootstrap';

const PlaceAutocomplete = ({ onPlaceSelect }) => {
  const autocompleteRef = useRef(null);

  useEffect(() => {
    const autocomplete = new window.google.maps.places.Autocomplete(autocompleteRef.current);
    autocomplete.addListener('place_changed', () => {
      const place = autocomplete.getPlace();
      onPlaceSelect(place);
    });
  }, [onPlaceSelect]);

  return (
    <FormControl
      ref={autocompleteRef}
      type="text"
      placeholder="Enter a location"
    />
  );
};

export default PlaceAutocomplete;