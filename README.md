![](https://cdn.jsdelivr.net/gh/vicdata4/lit-course/assets/images/logo_.png?v=4&s=100)

## Quickstart

```
git clone https://github.com/vicdata4/lit-course-server.git

cd lit-course-server
```

```
npm install
```

Create config.js file

```js
module.exports = {
  publicPath: '',
  port: 3000,
  origin: `http://localhost:${this.port}`,
  mongodb: {
    domain: 'localhost',
    port: '27017'
  }
};
```

Replace the empty `publicPath` value `''` with your `absolute/path/to/your/lit-course/build`

Run server
```
npm run server
```

From the browser
```
http://localhost:3000/
```

## MongoDB Configuration

Run mongodb
```
./mongod --dbpath /absolute-path
```

```
./mongo
```

Create data base

```
use lit-course
```

Create collection
```
db.createCollection('lit-data')
```



