import store from '../redux/store'
import { initHikes } from '../redux/actions'

//const hikeURL = "https://www.hikingproject.com/data/get-trails?lat=44.2590582&lon=-121.2171486&maxDistance=10&key=200968807-358e68bfeeebd4e58f0e1c1155369e11";

export function callAPI(lat, lon){
  var coord = `https://www.hikingproject.com/data/get-trails?lat=${lat}&lon=${lon}&maxDistance=10&maxResults=50&key=200968807-358e68bfeeebd4e58f0e1c1155369e11`;
    fetch(coord)
      .then(res => res.json())
      .then(
        (result) => {
            store.dispatch(initHikes(result.trails))
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
     //return null;
    }