var path=require("path");
module.exports={
	entry:"./index.js",
	output:{
        path:path.resolve(__dirname,"build")
	},
    module: {
        loaders:[{
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        },{
            test: /\.js[x]?$/,
            loader: 'babel-loader?presets[]=es2015&presets[]=react'
        }]
    }
}