const MongoClient = require('mongodb').MongoClient;

const state = {
    db: null,
};

export default {
    async connect(host = 'localhost', port = '27017', dbname = 'webchat') {
        return new Promise((resolve, reject) => {
            MongoClient.connect('mongodb://' + host + ':' + port + '/' + dbname + '', (err, database) => {
                if (err) return reject(err);
                state.db = database.db(dbname);
                resolve(database);
            });
        })
    },

    get() {
        return state.db
    }
};