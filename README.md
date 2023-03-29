# workout-buddy-api

This is the backend api of a full stack project called Workout buddy.

This is built with the help of Express.js and Node.js. The Mongo DB is used as the database for storing the workout details and user details.

The workouts are specific for the users and they are accessable only if the user is logged in. The user login will be verified with the help of JWT(JSON web token) that will be provided to the client(browser) at the time of login or signup.

### Routes
There are two api routes provided for the users.
* login  	- /api/user/login (method:post)
* signup  - /api/user/signup (method:post)

And five api routes for workouts.

* workouts      - /api/workouts (method:get)
* workoutById   - /api/workouts/:id (method:get) 
* createWorkout - /api/workouts (method:post)
* deleteWorkout - /api/worouts/:id (method:delete)
* updateWorkout - /api/workouts/:id (method:patch)

This api is hosted online with the help of [render.com](https://render.com/)

Link for this api - [https://workoutbuddy-whov.onrender.com](https://workoutbuddy-whov.onrender.com)

Note: you cannot access the routes directly on browser because you need authentication with JWT. 

It is handle on frontend you can check it by using the following link:
[https://workout-buddy-karthikeyan.netlify.app/](https://workout-buddy-karthikeyan.netlify.app/)

The source code for the frontend - [https://github.com/Karthikeyan-j1112/workout-buddy-client](https://github.com/Karthikeyan-j1112/workout-buddy-client)

