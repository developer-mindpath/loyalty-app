# Getting Started with App

`Node Version: 16`

#### Environment Setup

Rename `.env.example` to `.env` in both Frontend and Backend Folders. All the required variables are present there.

#### Database Setup

Please use the Latest version of MYSQL.

Please run the command in mysql terminal
`CREATE DATABASE points_DB`

#### Local Development Setup

Use git clone to get a local copy. If you've already got a local copy, make sure you've got the main branch's latest changes using git pull. Then run npm install in the root directory to install the dependencies:

```
git clone git@github.com:developer-mindpath/loyalty-app.git
cd loyalty-app
npm run setup
npm run serve
```

`npm run serve` will start both React and Express Server on ports 3000 and 3001 simultaneously
