<<<<<<< HEAD
// import React from 'react';
// import logo from './logo.svg';
// import './App.css';


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>

//       </header>
//     </div>
//   );
// }

// export default App;

// This is just a test page with the post hookup to react backed.
// The above commented out code is the better init page using the functions 
// and newer react typescript code

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import DirectionsButton from './DirectionsButton';

const AnotherPage = () => <h1>Another Page</h1>;
const NotFound = () => <h1>404 Not Found</h1>;
class Home extends Component {
  state = {
    response: '',
    post: '',
    responseToPost: '',
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const response = await fetch('/api/world', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ post: this.state.post }),
    });
    const body = await response.text();

    this.setState({ responseToPost: body });
  };

  render() {
    const destinationExampleOne= 'Mount Scott Hiking Trail, Crater Lake, Oregon';
    const destinationExampleTwo = '46.8689, -121.6592';
    return (
      <div className="App">
        < DirectionsButton destination={destinationExampleOne}/>
        < DirectionsButton destination={destinationExampleTwo}/>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <p>{this.state.response}</p>
          <form onSubmit={this.handleSubmit}>
            <p>
              <strong>Post to Server:</strong>
            </p>
            <input
              type="text"
              value={this.state.post}
              onChange={e => this.setState({ post: e.target.value })}
            />
            <button type="submit">Submit</button>
          </form>
          <p>{this.state.responseToPost}</p>
        </header>
      </div>
    );
  }
}

const App = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/another-page/">Another Page</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/another-page/" component={AnotherPage} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);

export default App;
=======
import React, {useState} from 'react';
import './App.css';
import TitleBarItem from './TitleBarItem'
import FilterBarItem from './FilterBarItem'
import HikeBoxItem from './HikeBoxItem'
import HikeInfoItem from './HikeInfoItem'


const DEFAULT_HIKES = [
  {
    name: 'Mt. Shasta',
    picURL: 'https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350',
    description: 'Its a hike',
    info: 'Information about the hike',
    navLink: 'https://www.youtube.com/watch?v=oHg5SJYRHA0&ab_channel=cotter548',
    gear: {
      clothing: "Jacket",
      waterlevel: "Medium",
      walkinggear: "None",
      shoes: "walking",

    }
  },
  {
    name: 'Oaks Park',
    picURL: 'https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350',
    description: 'Not a real hike',
    info: 'No Info',
    navLink: 'https://www.youtube.com/watch?v=oHg5SJYRHA0&ab_channel=cotter548'
  }
]

function App() {
  const [selectedHikeIndex, setSelectedHikeIndex] = useState(0)
  const [hikes, setHikes] = useState(DEFAULT_HIKES)
  const selectedHike = hikes[selectedHikeIndex]

  return (
    <div className="container">
      <div className="titleBar"> <TitleBarItem/> </div>
      <div className="filterBar"> <FilterBarItem/> </div>
      <div>
        {hikes.map((hike,index) => {
          return(
            <HikeBoxItem
              key={index}
              name={hike.name}
              picURL={hike.picURL}
              description={hike.description}
              handleClick={() => setSelectedHikeIndex(index)}
            />
          )
        })}
        </div>
        <div>
        <HikeInfoItem
          info={selectedHike.info}
          navLink={selectedHike.navLink}
        />
      </div>
    </div>
  );
}

export default App;
>>>>>>> main
