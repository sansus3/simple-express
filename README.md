# simple-express
Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. [Link] (https://expressjs.com/en/starter/installing.html).
La documentación que viene a continuación viene directamente de la documentación oficial.

## Crear en primer lugar el package.json
```
npm init
```
>This command prompts you for a number of things, such as the name and version of your application. For now, you can simply hit RETURN to accept the defaults for most of them, with the following exception: index.js. Enter app.js

## Instala express

```
npm install express
```

## Hello World
```
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
```

Para correr la aplicación
```
node app.js
```

## Serving static files 
>To serve static files such as images, CSS files, and JavaScript files, use the express.static built-in middleware function in Express. The function signature is:
```
express.static(root, [options])
```

