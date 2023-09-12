// const Sequelize = require('sequelize');

// const sequelize = new Sequelize('node_complete','root','root', {
//         dialect: 'mysql', 
//         host: 'db',
//         port: '3306'
//     }
// );

// module.exports = sequelize;
const dot = require("dotenv");
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;
dot.config()

const mongoConnect = (callback) => {
    MongoClient
    .connect(`mongodb+srv://singhutkarsh5032:${process.env.Password}@cluster0.6id40bv.mongodb.net/shop?retryWrites=true&w=majority`)
    .then(client => {
        console.log('ConNecTed!')
        _db = client.db();
        callback();
    })
    .catch(err => console.log(err));
}


const getDb = () => {
    if(_db){
        return _db;
    }
    throw 'No Database Found!';
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;

