import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

// const AnyReactComponent = ({ text }) => <div>{text}</div>;


class Map extends Component {
  static defaultProps = {
    center: {
      lat: -37.877093,
      lng: 145.044425
    },
    zoom: 13
  };

  renderMarkers = (map, maps) => {
    //   {lat: -25.363, lng: 131.044}
    let marker = new maps.Marker({
      position: {lat: -37.877093, lng: 145.044425},
      map,
    //   label: "CodeName AntiVirus",
      title: 'Hello World!',
    });
  }

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '50vh', width: '90%', margin:"auto", marginBottom:"24px"}}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyC73kt0rEvtd2U-QKDGrEYvbV1S-dlX0EI"}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          onGoogleApiLoaded={({map, maps}) => this.renderMarkers(map, maps)}
        >
          {/* <AnyReactComponent
            lat={-37.877093}
            // -37.877093, 145.044425
            lng={145.044425}
            text="My Marker"
          /> */}
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;