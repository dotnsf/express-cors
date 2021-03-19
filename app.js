//. app.js
var express = require( 'express' ),
    app = express();

var settings = require( './settings' );

app.use( express.static( __dirname + '/public' ) );

//. CORS
if( settings && settings.cors && settings.cors.length && settings.cors[0] ){
  var cors = require( 'cors' );
  var option = {
    origin: settings.cors,
    optionSuccessStatus: 200
  };
  app.use( cors( option ) );
}

app.get( '/ping', function( req, res ){
  res.contentType( 'application/json; charset=utf-8' );
  res.write( JSON.stringify( { status: 'OK' } ) );
  res.end();
});


var port = process.env.PORT || 8080;
app.listen( port );
console.log( "server starting on " + port + " ..." );
