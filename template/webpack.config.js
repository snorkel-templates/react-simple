module.exports = function(webpackConfig) {
    webpackConfig.babel.plugins.push('antd');
    webpackConfig.babel.plugins.push('es6-promise');

    // Fix ie8 compatibility
    webpackConfig.module.loaders.unshift({
        test: /\.jsx?$/,
        loader: 'es3ify-loader',
    }, {
        test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
        loader: 'url-loader?limit=50000&name=[path][name].[ext]'
    });

    return webpackConfig;
};
