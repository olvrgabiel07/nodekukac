var http = require('http'),
    arquivo = require('fs');

var servidor = http.createServer( function( request, response ) {
    arquivo.readFile('kukac.html', function( err, html ) {
    response.writeHead(200, {"Content-Type": "text/html"});
    
     if( err ) response.write('Não foi encontrado.');
     
         response.write( html );
         response.end();

    });
    
 });

    servidor.listen(3000, function() {
        console.log('Servidor no ar.');
    });

