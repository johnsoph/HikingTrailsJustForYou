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

  clickedHike = event => event.InfoList.classList.add('visable');
  render() {
    return (
      /*<div className="App">
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
            <button type="submit">Push Me</button>
          </form>
          <p>{this.state.responseToPost}</p>
        </header>
      </div>*/


        <div className="App">

          <header className="App-header">
            <p className="Title"> PATAGUCCI </p>
            <button className="Login-Button"> Login </button>
            <button className="SignUp-Button"> Sign Up </button>
          </header>

          <body className="App-filter">
            <p> Find Hiking Trails and PataGucci Gear Recommended for You! </p>

            <select name="hiking_vibe" id="hiking_vibe">
              <option value="easy_and_chill">Easy and Chill</option>
              <option value="best_match">Best Match My Fitness Level</option>
              <option value="challenge_me">Challenge Me</option>
            </select>

            <input type="text" placeholder="Zip Code"/>
            <p> Just For You Hikes </p>

            <label className="switch">
              <input type="checkbox"/>
              <span className="slider round"></span>
            </label>

          </body>
          <div className="HikesAndInfo">

            <div className="hikeList">
              <div className="hike" onClick={this.clickedHike}>
                <h1> Trail Name </h1>
                <p> Description </p>
              </div>

              <div className="hike">
                <h1> Trail Name </h1>
                <p> Description </p>
              </div>

              <div className="hike">
                <h1> Trail Name </h1>
                <p> Description </p>
              </div>
            </div>

            <div className="InfoList">
              <div className="InfoPanel">
              <p> Hiking Difficulty: </p>
              <p> Dog Friendly: </p>
              <button className="navigateButton"> Navigate </button>
              </div>

              <div className="RecommendedGear">
              <button className="gearList"> Recommended PataGucci Gear </button>
              </div>

              <div className="Map">
              <h1> MAP </h1>
              </div>
            </div>

          </div>
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
