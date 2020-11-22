import store from '../redux/store'
import { initHikes } from '../redux/actions'

const hikeURL = "https://www.hikingproject.com/data/get-trails?lat=44.56448&lon=-123.2896&maxDistance=10&key=200968807-358e68bfeeebd4e58f0e1c1155369e11";

export function callAPI(){
    fetch(hikeURL)
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
    }
