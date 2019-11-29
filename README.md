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

### Tailing the logs

'''
 heroku logs --tail --app malibu
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

Go T3amMaliboo !!
