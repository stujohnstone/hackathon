import React, { Children } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Map as LeafletMap, TileLayer, Marker, Popup, Polyline, Rectangle, Polygon } from "react-leaflet";


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

  const multiPolyline = [
    [
      [-26.97543,  -111.54795],
      [40.19407, -113.19774]
    ],
    [
      [-31.51499,  145.89322],
      [-40.66526, -78.59101],
    ],
    [
    [-46.72,55.87],
    [-0.02,-13.05],
    [36.01,-11.22],
    [81.42,42.5]
    ],
    [
    [40.41,82.62],
    [80.42,71.66],
    [-54.44,-64.31],
    [48.01,1.31],
    [-61.19,-80.98]
    ],
    [
    [-4.95,6.3],
    [6.83,-89.86],
    [-18.7,-13.08],
    ],[
    [6.74,17.6],
    [-67.54,-16.4],
    [-16.29,63.92]
    ],
    [
    [-5.99,51.42],
    [-3.95,0.94]
    ],
    [
    [73.85,60.35],
    [-40.91,-17.5]
    ]
  ]
    // LONGITUDE -180 to + 180
  function generateRandomLong() {
    var num = (Math.random()*180).toFixed(3);
    var posorneg = Math.floor(Math.random());
    if (posorneg == 0) {
        num = num * -1;
    }
    return num;
  }
  // LATITUDE -90 to +90
  function generateRandomLat() {
    var num = (Math.random()*90).toFixed(3);
    var posorneg = Math.floor(Math.random());
    if (posorneg == 0) {
        num = num * -1;
    }
    return num;
  }

  function drawLines() {
    console.log('***HERE****');
    var lines = [];
    var routes = Math.floor(Math.random() * 100); 
    var points = Math.floor(Math.random() * 100); 

    for (r = 0; r < routes; r++) {
      var points = [];
      var lat = generateRandomLat();
      var long = generateRandomLong();
      points.push([lat, long]);
      for (p = 0; p < points; p++) {
        lines.push(points)
      }
    }

    const polyline = [
      [0.000, 0.000],
      [-26.97543,  -111.54795]
      [40.19407, -113.19774],
    ]
    console.log(lines);
  }

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
        <Popup>Member of cabin crew tripped on co-pilot's flight bag when delivering coffee to the captain and spilt the entire cup on the centre console. <a href="http://google.com">View it</a></Popup>
      </Marker>
      <Polyline color="red" positions={multiPolyline} />
    </LeafletMap>
    </div>
  );
};

export default withStyles(styles)(Map);
