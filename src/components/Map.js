import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Map as LeafletMap, TileLayer, Marker, Popup } from "react-leaflet";

const styles = theme => ({
  icon: {
    marginRight: theme.spacing.unit * 2
  },
  mapContainer: {
    width: "100%",
    height: "700px"
  }
});

export const Map = props => {
  const { classes } = props;
  const position = [props.lat, props.long];
  const zoom = props.zoom;

  return (
    <div className={classes.mapContainer}>
    <LeafletMap
      center={position}
      zoom={zoom}
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
      <Marker position={position}>
        <Popup>Event</Popup>
      </Marker>

    </LeafletMap>
    </div>
  );
};

export default withStyles(styles)(Map);
