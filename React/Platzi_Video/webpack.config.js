/* webpack nos ayuda a agrupar y optimizar todos los documentos del proyecto (js,html, css y multimedia)

lo primero que debemos hacer es ingresar este comando en la terminal.
"npm install webpack webpack-cli html-webpack-plugin html-loader --save-dev "
    --save-dev = significa que se guarda como una dependencia de desarollo.
    ES IMPORTANTE QUE LO INSTALES EN LA CARPETA QUE VAS A DESARROLLAR
*/

/* en la raiz del proyecto se debe crear un archivo webpack.config.js
     este es la hoja de cocigo*/

/* primero comenzaremos llamando un "modulo path" es un modulo que permite utilidades para trabajar con los path,
 directory y files
*/

const path = require ('path');


/* ahora hay que instanciar el plugin que instalamos con webpack "html-webpack-plugin"*/
const HtmlWebPackPlugin = require ('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

/*se crea un nuevo modulo el que se exporta. El que es un objeto y se le colocan los  objetos a configurar*/
module.exports = {
  entry: './src/index.js', /* entrada del proyecto*/
  output : { /* es donde guardaremos nuestero archivos resultantes de la complicacion*/
     
    path: path.resolve(__dirname,'dist'), /* path se llama para decirle donde se guardara, se instancia con resolve, 
       que nos permite detectar el directorio en donde estamos y pasandole un directorio donde vamos a guardar */
     
       filename: 'bundle.js', /* nombre archivo principal*/
  },
  resolve: {
      extensions : [ '.js', '.jsx'], /* el nuevo elemnto sirve para resolver las nuevas extensiones que se 
      utilizaran */
  },


  module : {  /* se crea un modulo para poner las reglas que dispondremos en este proyecto*/
      rules: [
          {
              test: /\.(js|jsx)$/, /* la regla principal que es la identificacion de los archivos*/
            exclude: /node_modules/, /* se excluyen los node-modules*/
            use: {
                loader: "babel-loader", /* se llama al loeader que se instalo previamente con babel */
            },
        },
              {
                test: /\.js$/,
                enforce: 'pre',
                use: ['source-map-loader'],
              },
            
       {
           test:/\.html$/, /* es una nueva regla para trabajar con los archivos html*/
           use: [
               {
                   loader: 'html-loader' /* es el loader que instalamos */
               }, 
           ],
       },   
       
       {
        test:/\.(png|gif|jpg)$/,/* es una nueva regla para TRABAJAR LAS IMAGENES */
        use: [
            {
                'loader': 'file-loader',
                options :{
                    name: 'assets/[hash].[ext]' /* el programa compila el nombre con hash mas la extension, enviamos name raros*/
                }
            }, 
        ],
    }, 
       {
           test: /\.(s*)css$/,
           use: [
            {
                loader: MiniCssExtractPlugin.loader,
           },
           'css-loader',
           'sass-loader'
               
           ]
       }
    ]

  },
  plugins : [   /* añadimos los plugins que necesitamos */
      new HtmlWebPackPlugin({
          template: './public/index.html', /* es una referencia al html*/
          filename: './index.html'
      }),
      new MiniCssExtractPlugin({
          filename: 'assets/[name].css'
      }),
  ]
};
