import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Map as LeafletMap, TileLayer, Marker, Popup } from "react-leaflet";

const styles = theme => ({
  icon: {
    marginRight: theme.spacing.unit * 2
  },
  mapContainer: {
    width: "100%",
    height: "400px"
  }
});

export const Map = props => {
  const { classes } = props;
  const position = [51.505, -0.09];
  const zoom = 12;

  return (
    <div className={classes.mapContainer}>
    <LeafletMap
      center={[50, 10]}
      zoom={6}
      maxZoom={10}
      attributionControl={true}
      zoomControl={true}
      doubleClickZoom={true}
      scrollWheelZoom={true}
      dragging={true}
      animate={true}
      easeLinearity={0.35}
    >
      <TileLayer url="https://{s}.tile.osm.org/{z}/{x}/{y}.png" />
      <Marker position={[50, 10]}>
        <Popup>Popup for any custom information.</Popup>
      </Marker>
    </LeafletMap>
    </div>
  );
};

export default withStyles(styles)(Map);
