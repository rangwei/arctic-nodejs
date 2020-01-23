'use strict'

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var SurveySchema = new Schema(
    {
        ID: {
            type: String,
            required: 'OBJECT ID'
        },
        type: {
            type: Number
        },
        q1: {
            type: Number
        },
        q2: {
            type: Number
        },
        q3: {
            type: Number
        },
        q4: {
            type: Number
        },
        q5: {
            type: Number
        }
    }
);

module.exports = mongoose.model('Surveys', SurveySchema);