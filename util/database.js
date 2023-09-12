// const Sequelize = require('sequelize');

// const sequelize = new Sequelize('node_complete','root','root', {
//         dialect: 'mysql', 
//         host: 'db',
//         port: '3306'
//     }
// );

// module.exports = sequelize;

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const mongoConnect = (callback) => {
    MongoClient
    .connect('mongodb+srv://singhutkarsh5032:<password>@cluster0.6id40bv.mongodb.net/?retryWrites=true&w=majority')
    .then(result => {
        console.log('connected!')
        callback(result);
    })
    .catch(err => console.log(err));
}

module.exports = mongoConnect;