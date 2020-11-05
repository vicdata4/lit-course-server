# server

#### Requirements

Documentation

https://expressjs.com/en/resources/middleware/csurf.html

https://www.npmjs.com/package/multer

https://www.npmjs.com/package/adm-zip

* node v10.15.3</br>
* npm v6.4.1

#### Dependencies

* node-express ^4.17.1</br>

## Run server

```git clone https://github.com/vicdata4/lit-course-server.git```

```npm install```

```cd lit-course-server```

Create config.js file

```
module.exports = {
  secret: 'auth-private-key',
  prefix: 'prefix-string',
  publicPath: 'build-path',
  origin: 'http://ip:3000',
  mongodb: {
    domain: 'localhost',
    port: '27017'
  }
};
```

```node server.js```

## MongoDB Configuration

Run mongodb
```
./mongod --dbpath /absolute-path
```

```
./mongo
```

### Create collections

```
use lit-course
```

Create collections
```
db.createCollection('lit-course')
```



