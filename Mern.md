## Starting to Learn Mern Authentication


### Routes to create in this

- **POST /api/users** - Register a user
- **POST /api/users/auth** - Authentication a user and get token
- **POST /api/users/logout** - Logout user and clear cookie
- **GET /api/users/profile** - Get user profile
- **PUT /api/users/profile** - Update profile

###  Installation packages
npm i express dotenv mongoose bcryptjs jsonwebtoken cookie-parser

npm install react-bootstrap `react-icons` to use font-awesome icons
npm install redux
- Chrome Redux DevTools
- npm i @reduxjs/toolkit react-redux
- npm i react-toastify setting notification

### Some Steps

1) Do `npm init` to initialize the repository.
2) created backend/server.js
3) Specify Es6 import in module

4) Create and run simple server
5) Specify scripts(start, server) in packages.json
6) Run `server` scripts
7) Create .env file and import in `server.js`
- Create Variables

8) Create controller folder `userController`
9) Create routes folder `userRoutes`
10) Specify Routes and import in server.js

11) Client setup to make API Calls
12) Install and import `express-async-handler`
- Handle try and catch 

13) Create middleware/errorMiddleware
14) Create all routes in userRouter

### Setup in MongoDB Online Database

1) Login or Create A/c to MongoDB.com Atlas
- Create User

2) To Connect in App
- Choose the given Connection string
- SET it into `env` Variable and make changes to password
- Create `db.js` to connect database in server.js file
- Use password special characters in url encoded format
- @ = %40

### Creating Models in Database

1) Create Models Folder
2) Create A UserModel
3) Import that into server.js
4) Work on register end-point to resend req.body
4) Use body parser middleware

5) Creating create user endpoint properly
6) Check for user
7) Using hashing and salting to the password in userModel

8) Creating generateToken for token
- To use it in userController
9) Setting a cookie in that for token


10) Working on Auth API Endpoint
11) Using matchPassword method in userSchema

11) Working on Logout API Endpoint
12) AuthMiddleware File Created
- Generate cookie parser

13) AuthMiddleware token check on profile endpoint


## Building Frontend

1) Using Vite, Redux Toolkit and Bootstrap
2) Customizing `vite.config.js` file 
3) Customizing `package.json` of backend

4) Adding Navbar as Header
5) Create Hero and HomeScreen
6) Making Routes in Main.jsx
7) Convert `anchor` tag to `Link` to avoid hard refresh

<!-- Complex Further -->

8) Creating Form Components FormContainer
9) Creating LoginScreen wrap in FormContainer
10) Creating RegisterScreen with same login syntax

11) Creating `store.jsx` and import in `main.jsx` Creating Reducers
12) create slice such as apiSlice and authSlice
13) worked on toast notification

<!-- 02:41:00 -->
<!-- 02:46:00 -->

14) Create Another Drowdown if login

## Running script for each

Start        - backend for once
Server       - backend for auto-restart
Client       - Frontend vite running
Dev for Both - For Frontend and Backend Server


## All TimeLines

Dependencies and Express Server
Script & Nodemon
.env File
<!-- 10:59 -->
User Routes & Controller SetUp
Postman Workspace Setup
Async Handler
Custom Error Middlerware
User Controller Functions
<!-- 37:00 -->
MongoDB Connection Setup
User Model
Register User Endpoint
<!-- 58:50 -->
Generate JWT And Save Cookie
Auth User Endpoint
Logout and Destroy Cookie
Auth Protect Middleware
Updata User Profile Endpoint
<!-- 1:28:00 -->
Starting the Frontend
Concurrency Setup
React BootStrap Setup
Header Component
HomeScreen & Hero
<!-- 1:44:00 -->
React & Router Setup
Login and Registration Form UI
<!-- 2:05:00 -->
Redux Toolkit Setup
Auth Slice & API Slice
Login functionallity
<!-- 2:37:00 -->
React Toastify Setup
Auth Header Links
Logout Finctionality
<!-- 2:57:00 -->
Start Profile
PrivateRoute Component
ProfileScreen Component
Update Profile Component
<!-- 3:11:00 -->
Prepare For Production
Create A Linode / Server
SSH Into Server & Provision
Clone Files On To Server
PM2 Setup
NGINX Setup