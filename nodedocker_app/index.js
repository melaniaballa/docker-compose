const Hapi = require('@hapi/hapi');
const { books } = require('./data');

const init = async () => {
    const server = Hapi.server({
        port: 3000,
        host: 'nodejsserver',
        // routes: {
        //     cors: true
        //   }
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
            method: 'GET',
            path: '/api/books',
            handler: async (req, h) => {
                console.log(`=================inside BOOKS GET !!!!!!!=====================`);
                const offset = Number(req.query.offset) || 0;
                // await req.mongo.db.collection('books').insertOne({
                //     "title": "Play for Java",
                //     "isbn": "1617290904",
                //     "pageCount": 0,
                //     "publishedDate": { "$date": "2014-03-14T00:00:00.000-0700" },
                //     "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/leroux.jpg",
                //     "status": "PUBLISH",
                //     "authors": ["Nicolas Leroux", "Sietse de Kaper"],
                //     "categories": []
                // });

                return await req.mongo.db.collection('books').find({}).skip(offset).limit(20).toArray();
            }
        },
        {
            method: 'GET',
            path: '/api/aggregate',
            handler: async (req, h) => {
                console.log(`=================Mela:   inside aggregate !!!!!!!=====================`);

                await req.mongo.db.collection('books').insertMany(books);

                const measurePromise = (fn) => {
                    const onPromiseDone = () => performance.now() - start;
                
                    const start = performance.now();
                    return fn().then(onPromiseDone, onPromiseDone);
                }

                return await measurePromise(async () => await req.mongo.db.collection('books').aggregate([{ $sort : { 'isbn' : -1 }}]));
            }
        },
        {
            // config: {
            //     cors: {
            //         origin: ['*'],
            //         additionalHeaders: ['cache-control', 'x-requested-with']
            //     }
            // },
            method: 'POST',
            path: '/api/generate',
            handler: async (req, h) => {
                console.log(`=================inside genearte !!!!!!!=====================`);

                await req.mongo.db.collection('books').insertMany(books);

                return await req.mongo.db.collection('books').find({}).skip(offset).limit(20).toArray();
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
