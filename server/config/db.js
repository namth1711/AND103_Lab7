const mongoose = require('mongoose');

const local = "mongodb+srv://namth:Nwi1jQe4DYvNlwvV@cluster0.0xpiljw.mongodb.net/AND103";

const connect = async () => {
    try {
        await mongoose.connect(local);
        console.log('Connect success');
    } catch (error) {
        console.error('Connection to MongoDB failed:', error);
    }
}

module.exports = { connect };
