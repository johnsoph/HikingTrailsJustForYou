import React, { Component } from "react";

class GetCoords extends Component {
  constructor(props) {
    super(props);
    this.state = {
        mapRegion: 0,
        lastLat: 0,
        lastLong: 0,
    };
  }

  componentDidMount() {
    this.watchID = navigator.geolocation.watchPosition((position) => {
      // Create the object to update this.state.mapRegion through the onRegionChange function
      let region = {
        latitude:       position.coords.latitude,
        longitude:      position.coords.longitude,
      }
      this.onRegionChange(region, region.latitude, region.longitude);
    }, (error)=>console.log(error));
  }

  onRegionChange(region, lastLat, lastLong) {
    this.setState({
      mapRegion: region,
      // If there are no new values set the current ones
      lastLat: lastLat || this.state.lastLat,
      lastLong: lastLong || this.state.lastLong
    });
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
  }

  render() {
    return (
    <div>
        <div>Latitude: { this.state.mapRegion.latitude } </div>
        <div>Longitude: { this.state.mapRegion.longitude } </div>
    </div>
    )
  }
}

export default GetCoords;