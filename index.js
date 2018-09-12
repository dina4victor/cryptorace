const hapi = require('hapi');
const mongoose = require('mongoose');
const Player = require('./Player');

const server = hapi.server({
    port: 4000,
    host: 'localhost'
});

// mongoose.connect('mongodb://admin:dina1986@ds239682.mlab.com:39682/cryptorace');
mongoose.connect('mongodb://127.0.0.1:27017/cryptorace');

mongoose.connection.once('open', () => {
    console.log('connected to database');
});


const init = async () => {

    server.route([
        {
            method: 'GET',
            path: '/',
            handler: function (request, reply) {
                return '<H1> Crypto Race API </H1>'
            }
        },
        {
            method: 'GET',
            path: '/api/v1/player',
            handler: function (request, reply) {
                return Player.find();
            }
        },
        {
            method: 'GET',
            path: '/api/v1/player/{privateKey}',
            handler: function (request, reply) {
                const privateKey = `${encodeURIComponent(request.params.privateKey)}`;
                console.log(privateKey);
                return Player.find({ "privateKey": privateKey });
            }
        },
        {
            method: 'PUT',
            path: '/api/v1/player/{privateKey}',
            handler: function (request, reply) {
                const privateKey = `${encodeURIComponent(request.params.privateKey)}`;
                console.log(privateKey)
                const temp = JSON.parse(request.payload);

                const player = new Player(temp);

                return Player.update({ "privateKey": privateKey }, temp, { upsert: true }
                );
            }
        },
        {
            method: 'POST',
            path: '/api/v1/player',
            handler: function (request, reply) {
                const temp = JSON.parse(request.payload)
                const player = new Player(temp);
                return player.save();
            }
        }
    ])
    await server.start();
    console.log(`server running at: ${server.info.uri}`);
}

init();