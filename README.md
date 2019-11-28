This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Usage in Development

1. Clone repo and install dependencies.
2. Run 'npm run dev' from cli to generate public/dist.
3. Run 'npm run dev-server' for development with live-reloading.

### Making Changes

1. git checkout -b pull-request-demo
2. git push origin pull-request-demo

### Using Heroku 

'''
npm install -g heroku
heroku login
'''

verify with the following command
'''
heroku pg:info --app malibuapp
'''

### To establish a psql session with your remote database
'''
heroku pg:psql --app malibuapp
'''

### NPM Scripts

#### **npm run build**

Runs webpack and builds bundle.js and index.html in public folder.

#### **npm run dev-server**

Runs webpack-dev-server. Global test env variables need to be set in env.test and defined in webpack.config.

#### **npm run test**

Runs in test mode. Global test env variables need to be set in env.test and defined in webpack.config.

#### **npm run start**

Starts the server.

#### **heroku-postbuild**

Runs build after deploying to heroku.


