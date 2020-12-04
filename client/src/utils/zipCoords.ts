import React, { useState } from 'react';
import store from '../redux/store'
import { connect, ConnectedProps, shallowEqual, useSelector } from "react-redux";
import { initCoords } from '../redux/actions'
import { callAPI } from '../utils/api';
import { ZipCoords } from '../common/model';


export function callZipAPI(address){
address = `http://open.mapquestapi.com/geocoding/v1/address?key=tt714D6ycWMbGq0gRvHf6V7l5bAHKyzs&location=United+States+${address}`; 

fetch(address)
// fetch("http://open.mapquestapi.com/geocoding/v1/address?key=tt714D6ycWMbGq0gRvHf6V7l5bAHKyzs&location=1600+Pennsylvania+Ave+NW,Washington,DC,205")
    .then(res => res.json())
      .then(
        (result) => {
            store.dispatch(initCoords(result.results))
        //   this.setState({
        //     isLoaded: true,
        //     items: result.items
        //   });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
            console.log(error);
        //   this.setState({
        //     isLoaded: true,
        //     error
        //   });
        }
      )
    }


    // const rstore = store.getState();

    export function loadHikesByZip(coords:ZipCoords){
     const newCoords = coords.locations[0].latLng
     callAPI(newCoords.lat, newCoords.lng)
     debugger
  }

