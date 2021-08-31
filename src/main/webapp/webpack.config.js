const path= require('path');
// to minimise js bundles

const TerserPlugin = require('terser-webpack-plugin');
//const MiniCssExtractPlugin= require('mini-css-extract-plugin'); // then run npm install of  it 
//const {CleanWebPlugin} = require('create-webpack-plugin');
module.exports={
  devtool:'eval-source-map',//for debugging  in browser
  entry:{  //"../resources/static/jetresources/js_scripts/index.js"
	//for multi-page bundles
	"index":"./ts_scripts/index.tsx",
	"index2":"./ts_scripts/index2.tsx"
    },
  resolve:{
	  //to be able to use es2016 modules
	extensions:['.ts','.js','tsx']  
  },
  output:{
	  filename:'[name].bundle.js',//since we will have  many pages 
	  path:path.resolve(__dirname,'./dist'),
	 //tells webpack where images are located
	  publicPath:"dist/images/"
  },
  mode:'none',
  // download every other external dependencies  into a separate folders
  optimization:{
	splitChunks:{
	  chunks:"all",
	  minSize:100000,
	  automaticNameDelimiter:'_'
	}  
  },
  //config for modiles
  module:{
	  rules:[
		  // for  files and  images
		  {
			  test:/\.(png|jpg)$/,
			  use:[
				  'file-loader'
			  ]
		  },
		  //for css 
	 //css files will  be  dynamically loaded in html page
		  {
			 test:/\.css$/,
			 use:[
				 'style-loader','css-loader'
			 ]
		   },
		 //babel use  npm install touch-cli -g to create a file
		   {
			 test: /\.js|ts|tsx$/,
			 exclude: /node_modules/,
			 use:{
				loader:'babel-loader',
				options:{
					presets:['@babel/env','@babel/typescript'],
					plugins:['transform-class-properties',
					           '@babel/plugin-syntax-jsx',
					        ['@babel/plugin-transform-react-jsx',
				             {
						        "pragma":"dom",
							//  "throwIfNamespace":false,
							//  "runtime":"automatic", 
							//  "importSource":"./ts_scripts"	 
							 }],
							 ['@babel/transform-runtime',
							 {"regenerator": true}
							   ]
				             ]
				   }
			 }
		   },
		   // for ts-loader
		  /* {
			 test:/\.ts$/,
			 use:'ts-loader',
			 //includes only typescript in this dir alone
			 include:[path.resolve(__dirname,'src/main/resources/static/jetresources/ts_scripts')]
		     //include:'src/main/resources/static/jetresources/ts_scripts'
		   },*/
		   		   	   	   
	  ]
  },
  plugins:[
	  new TerserPlugin(),
//	   new MiniCssExtractPlugin({
//		   // extract css into separate bundles
//		   //then use MiniCssExtractPlugin.loader to replace style.loader in css and scss
//		   filename:'style.css'
//	   }),  
//      new CleanWebPlugin({
//    	  cleanOnceBeforeBuildPatterns:[
//    		 "**/*",path.join(process.cwd(),'build/**/*')  
//    	  ]
//      })
	   ]
}