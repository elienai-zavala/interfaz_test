# Proyect name: interfaz_test
Create a React App without 'create-react-app'

## 1. Creamos el repositorio en Github
- Clonar el proyecto utilizando el comando `git clone URL_REPOSITORIO`

## 2. Iniciar el proyecto
- Iniciar proyecto de React con el comando `npm init -y`
- Se crea el JSON por defecto `package.json`
- Ahora creamos el React y ReactDOM con el comando `npm install react react-dom --save`
  - Importante revisar que las versiones de estos paquetes se instalen con 0 vulneravilidades

## 3. Instalación de Babel
- Babel es una herramienta que nos ayuda a transpilar nuestro código React y JavaScript modernos a un código JavaScript que pueda entender los navegadores.
- Se agrega al proyecto con el siguiente comando `npm install @babel/core @babel/preset-env @babel/preset-react babel-loader --save-dev`
- Ahora vamos a instalar un plugin para transpilar clases o funciones flecha en funciones normales `npm install babel-plugin-transform-class-properties --save-dev`
- Vamos a crear un archivo en la raíz del proyecto llamado `.babelrc` el cual tendrá toda la configuración requerida de Babel:
```
  {
      "presets": [
          "@babel/preset-env",
          "@babel/preset-react"
      ],
      "plugins": [
          "transform-class-properties"
      ]
  }
```

## 4. instalación de Webpack
- Es una herramienta que nos puede ayudar a compilar todos nuestros archivos de JavaScript en un sólo archivo o paquete que podemos usar en producción.
- Utilizamos el comando `npm install webpack webpack-cli html-webpack-plugin html-loader --save-dev`
- Vamos a crear un archivo `webpack.config.js` que será para nuestra configuración de Webpack en el proyecto:
```
  const path = require("path");
  const HtmlWebPackPlugin = require("html-webpack-plugin");

  module.exports = {
    entry: "./src/index.js",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "bundle.js",
    },
    resolve: {
      extensions: [".js", ".jsx"],
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: "html-loader",
            },
          ],
        },
      ],
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: "./public/index.html",
        filename: "./index.html",
      }),
    ],
  };
```

## 5. Creamos estructura del proyecto
- Crear carpeta `src/` para guardar nuestros archivos de JS
- Crear carpeta `public/` para archivos estáticos como imágenes, index.html, íconos, etc.
- El archivo `src/index.js` será el archivo principal de nuestro proyecto, donde vamos a importar el resto de nuestros componentes y contenedores de nuestra aplicación.
- Vamos a crear nuestros componentes en la carpeta `src/components` y los contenedores de estos componentes en la carpeta `src/containers`.
![image](https://user-images.githubusercontent.com/114093542/191854479-97b0728d-d4cc-4ed3-b622-9dba7ef49639.png)
> Nota: Todos nuestros componentes deben comenzar con una letra mayúscula a pesar de que los archivos sigan alguna otra convención.
- Debemos de verificar que la carpeta `node_modules/` se encuentre en el archivo `.gitignore` para no subirlo a Github ni a producción porque es una carpeta muy pesada y puede dañar nuestro proyecto.
- También agregar la carpeta `dist/` en el archivo `.gitignore`, esta carpeta almacenara la compilación de nuestro proyecto.

## 6. Creando nuestros archivos
- Ya esta hecha la estructura de nuestro proyecto, vamos a crear un componente llamado `src/components/About.jsx` lo cual sólo nos mostrara un "Hola Mundo".
```
  import React from "react";

  const About = () => {
    return (
      <div>
        <h1> Hola Mundo! </h1>
      </div>
    );
  };

  export default About
```
-Creamos un archivo `src/index.js`, vamos añadir nuestro componente para después enviarlo a nuestro archivo `index.html`.
```
  import React from "react";
  import ReactDOM from "react-dom";
  import About from "./components/About";

  ReactDOM.render(<About />, document.getElementById("app"));
```
- Creamos un archivo `public/index.html` hacemos la referencia por medio del id "app" para que busque y empujar nuestra aplicación.
```
  <!DOCTYPE html>
  <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>React</title>
      </head>
      <body>
          <div id="app"></div>
      </body>
  </html>
```

## 7. Creando nuestro servidor local
- Vamos a usar Webpack Dev Server para crear un servidor local que nos permita visualizar los cambios de nuestro proyecto en tiempo real, es decir, sin recargar el navegador.
- Utilizamos el comando `npm install webpack-dev-server --save-dev`
- También, vamos a crear dos nuevos scripts en nuestro `package.json`.
```
  "scripts": {
    "start": "webpack-cli serve --open --mode development",
    "build": "webpack --mode production",
    "test": "echo \"Error: no test specified\" && exit 1"
  }
```
- Creamos la carpeta llamada dist donde se almacenará la compilación del proyecto con el sigueinte comando `npm run build`
- Al final la estructura final del proyecto sería:
![image](https://user-images.githubusercontent.com/114093542/191856346-5907c07a-28bc-402d-b05a-b72cac9b4a38.png)

## 8. Inicializamos nuestra aplicación:
- Con el comando `npm run start`
