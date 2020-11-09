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
  publicPath: 'absolute/path/to/your/lit-course/build', // required
  port: 3000,
  origin: `http://localhost:${this.port}`,
  mongodb: {
    domain: 'localhost',
    port: '27017'
  }
};
```

Run server
```
npm run server
```

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



