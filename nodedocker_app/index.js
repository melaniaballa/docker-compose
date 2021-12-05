const Hapi = require('@hapi/hapi');

const init = async () => {
    const server = Hapi.server({
        port: 3000,
        host: 'nodejsserver'
    });

    await server.register({
        plugin: require('hapi-mongodb'),
        options: {
            url: 'mongodb://mongo:27017/docker-node-mongo',
            settings: {
                useUnifiedTopology: true
            },
        decorate: true
        }
    });

    server.route(
        {
            config: {
                cors: {
                    origin: ['*'],
                    additionalHeaders: ['cache-control', 'x-requested-with']
                }
            },
            method: 'GET',
            path: '/books',
            handler: async (req, h) => {
                const offset = Number(req.query.offset) || 0;

                return await req.mongo.db.collection('books').find({}).skip(offset).limit(20).toArray() == [] ? [] : 'No data inside MongoDB';
            }
        },
        {
            config: {
                cors: {
                    origin: ['*'],
                    additionalHeaders: ['cache-control', 'x-requested-with']
                }
            },
            method: 'POST',
            path: '/item/add',
            handler: async (req, h) => {
                return await req.mongo.db.collection('movies').insertOne(req.payload);
            }
        });

    await server.start();
    console.log(`Server running on ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {
    console.log(`The following error occured on node server side: ${err}. Will exit with status code 1.`);
    process.exit(1);
});

init();
