const mongoose = require('mongoose');

const ResourceSchema = mongoose.Schema({
    name: String,
    isHired: Boolean
});

const BlockSchema = mongoose.Schema({

    blockNo: Number,
    startCount: Number,
    endCount: Number,
    boardPosition: Number,
    resources: [ResourceSchema]

});

const PlayerSchema = mongoose.Schema({
privateKey: String,
publicKey: String,
coinCount: Number,
card: String,
blocks: [BlockSchema]

});


module.exports = mongoose.model('Player',PlayerSchema);