# HikingTrailsJustForYou

Feature #1 - Kalise Ball
The first one is I would like the app to gather the basic information from the user such as age, gender, daily activity level, etc depends on what you think would be a good factor to estimate their physical fitness level. Then, the gathered information will be used to estimate the user’s physical fitness level. You can design and define your own set of levels. I would say probably at least 3 or 4 levels.

Feature #2 - Phillip Johnson
The second feature, the app can retrieve all nearby hiking trails information such as name, distance, difficult level (easy, medium, hard), hiking time estimation, and trailhead location and display them as a list.

Feature #3 - Evan McKague
Next, I would like to have any kind of UI, that you will be the one who design, allows the user to interact to enable the “best choice” feature. This will filter the result with the user’s physical fitness level and show only the matched trails. Users can also choose how they want to feel during their hike; “easy and chill”, “best match my fitness level” or “challenge me more!” This will affect the search results based on what the user select.

Feature #4 - Cliff Webb
I want the app to guide me to the trailhead location by clicking the navigation button and bring me to Google Maps or any navigation providers.

Feature #5 - Nicholas Broce
Last but not least, I would love to get well prepared for my hiking by seeing the recommendation on what gears and clothing I should bring and wear. The recommendation will base on the current season and the type of the selected trail. For example, if the trail has a lot of inclined elevation gain, a hiking pole may be useful.

## Heroku Deployment

Deployment will be using Heroku. https://devcenter.heroku.com/articles/git

Running `git remote -v` will show the remote for the heroku. Heroku will deploy off the main branch. 

Deploying when pushing to main = `git push heroku main` 
NOTE: We should be able to change the configuration in heroku to deploy automatically when anything is pushed to main by following these instructions: https://medium.com/make-it-heady/deploying-create-react-app-on-heroku-from-github-49447561f670

Repo owner johnsoph will have to set that up. I tried and don't have access to connect them. 

Everyone on the team has collaborator access to heroku app with their OSU email. 

## React App with Typescript

The react app is located in the client directory. 
Running just the UI and app without the server changes:
`cd client`
`yarn install`
`yarn build`
`yarn start`
navigate to localhost:3000

### adding packages
`yarn add package-name`
`yarn install`
make sure to add the @types/ package as well


## Node Server
The entry point for the server is server.js
To run the server connected to the frontend using nodemon
`yarn install`
`yarn dev`
The server is on localhost:5000 and the UI will launch on localhost:3000 connected to the backend.

# yarn vs npm
personal preference but Kalise likes to use yarn. 
`brew install yarn` if you don't have it and if it's causing you a nightmare headache we can switch over to npm

## mysql db
connected to a mysql db set up on heroku using the .env file. Don't go ham on this, if we use too much storage my personal cc will start getting charged. Recommend downloading mysqlworkbench to visually connect and play with the database.  


