'use strict';
const path = require('path');

module.exports = {
    rootPath: path.normalize(__dirname + '/../'),
    geoJsonPath: path.normalize(__dirname + '/../geoJSON'),
    publicPath : path.normalize(__dirname + '/../public'),
    port: process.env.PORT || 8080,
}