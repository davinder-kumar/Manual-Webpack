const path = require("path")
module.exports ={
        devtool : "cheap-module-eval-source-map",
        entry : "./src/index.js",
        output : {
            path : "",
            publicPath : path.resolve(__dirname__, "dist"),
            filename : "bundle.js"

        },
        resolve : {
            extensions : ['.js','.jsx']
        },
        module : {
            rules : [
                {
                    test : //
                }
            ]
        }
}