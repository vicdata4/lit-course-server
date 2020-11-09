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

```
node server.js
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



