import { useMemo } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
export default function GoogleMaps({ ...props }) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyAwdAIdaPnI9Pjf76sMMGmcOcVhOxoLsjs",
  });

  if (!isLoaded) return <div>Loading...</div>;
  return (
    <>
      <Map lat={props.lat} lng={props.lng} />
      <h3>{props.titel}</h3>
      <p>{props.adresse}</p>
      <p>Hours this week:{props.hours}</p>
    </>
  );
}

function Map(props) {
  const center = useMemo(() => ({ lat: props.lat, lng: props.lng }), []);
  /*   console.log(props.lat);
   */
  return (
    <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
      <MarkerF position={center} />
    </GoogleMap>
  );
}
