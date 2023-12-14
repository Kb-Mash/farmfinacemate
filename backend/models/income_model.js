const mongoose = require('mongoose');


const IncomeSchema =new mongoose.Schema({
    description: {
        type: String,
        trim: true,
        required: [true, 'Please add a description'],
        maxLength: 50
    },
    amount: {
        type: Number,
        trim: true,
        required: [true, 'Please add an amount'],
        maxLength: 20
    },
    date: {
        type: Date,
        default: Date.now
    },
    type: {
        type: String,
        default: 'income'
    },
    category: {
        type: String,
        trim: true,
        required: [true, 'Please add a category']
    },
}, {timestamps: true});

module.exports = mongoose.model('Income', IncomeSchema);
