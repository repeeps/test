const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://jayseo:gKqTaQ4y3Q61yKQa@cluster0.uxjkbrv.mongodb.net/board?retryWrites=true&w=majority&appName=Cluster0";

module.exports = function (callback) {
    return MongoClient.connect(uri, callback);
};