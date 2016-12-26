const fs = require('fs'),
      path = require('path');

module.exports = function(app, config){
    app.get('/json/:name', (req, res)=>{
        res.sendFile(path.join(config.geoJsonPath, '/', req.params.name));
        /*fs.readFile(path.join(config.geoJsonPath, '/', req.params.name), (err, data)=>{
            if(err)
                res.status(404).json({err: 'not found'});
            else{
                console.log(new Date(), 'read');
                var parsed = JSON.parse(data);
                console.log(new Date(), 'parsed');
                res.send(parsed);
                console.log(new Date(), 'sended');
            }

        })*/
    });
}

