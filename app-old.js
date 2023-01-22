const http = require('http');

http.createServer( ( req, res ) =>{

    // res.writeHead(200, { 'Content-Type': 'application/json' });

    // const persona = {
    //     id: 1,
    //     name: 'Jose Luis'
    // };

    // res.write( JSON.stringify( persona ) );
    res.write('Hola Server');
    res.end();

}).listen(8080);

console.log('Escuchando en el puerto', 8080);