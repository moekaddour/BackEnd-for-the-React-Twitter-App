# Back End for React assignment

This server was built by "Nodejs" and "Express" to fetch data from the Twitter Api
It was hard to send request from the fronEnd to the Api while building the React app in the localhost environment because of an error about a Cross-Origin Request being blocked.
So I had to build this simple server to avoid this error.

Basically, there are two routes each represent an end point to get the tweets for each of Donald Trump and Hillary Clinton, when sending HTTP request from the frontEnd the endpoint trigger its controller then the controller which is a function send a request to the Twitter Api to get the tweets then sending them to the frontEnd.

I used "Twit" package which make it easier to send requests to the Twitter Api you can check the configuration here: "https://www.npmjs.com/package/twit"

"http://localhost:5000/trump" this is the endpoint responsible for fetching Trump's tweets
"http://localhost:5000/hillary" this is the endpoint responsible for fetching hillary's tweets

## Installation

Git clone the file, then run
```bash
npm install 
```
inside the directory you just cloned to install the dependencies in the Json file then in the terminal in the same directory run "npm start" and you will get this message "listening on post 5000"

---
After that you can git clone the fronEnd files "https://github.com/Mohammedkaddour/React-Assignment-for-Twitter-Api" and run
```bash
npm install 
```
inside the directory you got after cloned the files then run "npm start" to run the React app in the local environment, "Don't worry the React App is already connected to the backEnd" you can check the proxy in the Json file and you will see "http://localhost:5000"

When React app is running you will get the Trump's tweets and there a button above and in the middle of screen to switch between Trump and Hillary tweets, the tweets will be gotten each 15 sec.



##