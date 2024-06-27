- This is a basic fullstack application made using node.js, react.js, express.js, JWT, etc.
- Authorization and Authentication is being applied usng JWT Token.
- home page has Task manager where users can create tasks just like to-do-list and tasks are stored locally using states.
- User needs to login and generate token in-order to access home page else access. vice-versa is true when user tries 
  to access login page to login again but wont be allowed if user is already logged in.
- APIs created are POST:/login, POST:/register, POST:/ and JSONs can be viewed on /api/auth/regsiter and /api/task.
- logout option is not given in-order to check authorization and authentication, user needs to erase the localstorage where token is stored.
