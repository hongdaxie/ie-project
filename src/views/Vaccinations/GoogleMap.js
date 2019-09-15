import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons'

const MapMarker = () => <FontAwesomeIcon  icon={faMapMarkerAlt} style={{fontSize:"24px", color:"red"}} />

export default class GoogleMap extends Component {
    constructor(){
        super()
        this.state ={
            zoom: 13
        }
    }

    // defaultCenter = {
    //     center: {
    //       lat: this.props.latitude,
    //       lng: this.props.longitude
    //     },
    //     zoom: 13
    //   };
    
    componentDidMount(){
        this.setState({
            center : {
                lat : this.props.item.latitude,
                lng : this.props.item.longitude
            },
            name : this.props.item.name
        })
    }

    //   renderMarkers = (map, maps) => {
    //     let marker = new maps.Marker({
    //       position: this.state.center,
    //       map,
    //       title: this.state.name,
    //     });
    //   }

    render() {
        // console.log(this.props)
        return (
            // <div></div>
            <div style={{ height: '50vh', width: '90%', margin:"auto", marginBottom:"24px"}}>
                <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyC73kt0rEvtd2U-QKDGrEYvbV1S-dlX0EI"}}
                defaultCenter={this.state.center}
                defaultZoom={this.state.zoom}
                // onGoogleApiLoaded={({map, maps}) => this.renderMarkers(map, maps)}
                >
                <MapMarker
                    lat={this.props.item.latitude}
                    // -37.877093, 145.044425
                    lng={this.props.item.longitude}
                />
                </GoogleMapReact>
            </div>
        )
    }
}
