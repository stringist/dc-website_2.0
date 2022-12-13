import { useMemo } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import styles from "../../styles/About.module.scss";
export default function GoogleMaps({ ...props }) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) return <div>Loading...</div>;
  return (
    <article className={styles.map_container}>
      <Map lat={props.lat} lng={props.lng} />
      <h3>{props.titel}</h3>
      <p>{props.adresse}</p>
      <p>
        <span> Hours this week:</span>
        <span>{props.hoursMonFri}</span> {props.hoursWedFri}
      </p>
    </article>
  );
}

function Map(props) {
  const center = useMemo(() => ({ lat: props.lat, lng: props.lng }), []);
  /*   console.log(props.lat);
   */
  return (
    <GoogleMap
      zoom={13}
      center={center}
      mapContainerClassName={styles.map_inner}
    >
      <MarkerF position={center} />
    </GoogleMap>
  );
}
