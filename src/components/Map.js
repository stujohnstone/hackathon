import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Map as LeafletMap, TileLayer, Marker, Popup } from "react-leaflet";

const styles = theme => ({
  icon: {
    marginRight: theme.spacing.unit * 2
  },
  mapContainer: {
    paddingTop:"50px",
    width: "100%",
    height: "700px"
  }
});

export const Map = props => {
  const { classes } = props;
  const position = [51.505, -0.09];
  const zoom = 12;

  return (
    <div className={classes.mapContainer}>
    <LeafletMap
      center={[51.4700, -0.4543]}
      zoom={10}
      name={"test"}
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
      <Marker position={[18.1096, 77.2975]}>
        <Popup>Popup for any custom information.</Popup>
      </Marker>

    </LeafletMap>
    </div>
  );
};

export default withStyles(styles)(Map);
