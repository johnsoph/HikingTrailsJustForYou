import store from '../redux/store'
import { initCoords } from '../redux/actions'


export function callZipAPI(address){
// fetch(`http://open.mapquestapi.com/geocoding/v1/address?key=tt714D6ycWMbGq0gRvHf6V7l5bAHKyzs&location=${ address }`)
fetch("http://open.mapquestapi.com/geocoding/v1/address?key=tt714D6ycWMbGq0gRvHf6V7l5bAHKyzs&location=1600+Pennsylvania+Ave+NW,Washington,DC,205")
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