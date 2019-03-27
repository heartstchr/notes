# pre-requisit
    > $ node -v
    ```
    v8.11.4
    ```

    > $ mongo --version
    ```
    MongoDB shell version v4.0.0
    ```
# installation

    > $ npm i
    > npm start

# Folder Structure

    .
├── LICENSE
├── README.md
├── client
│   ├── app.js
│   ├── controller
│   │   └── login.js
│   ├── package-lock.json
│   ├── package.json
│   ├── service
│   │   └── auth.service.js
│   └── views
│       ├── index.html
│       └── notes
│           └── index.html
├── config
│   └── default.json
├── database.js
├── package-lock.json
├── package.json
├── public
│   └── style.css
├── server
│   ├── constant.js
│   ├── controller
│   │   ├── notes.js
│   │   └── user.js
│   └── model
│       ├── notes.js
│       └── user.js
└── server.js