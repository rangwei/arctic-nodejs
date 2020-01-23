'use strict';


var mongoose = require('mongoose'),
Survey = mongoose.model('Surveys');

exports.list_all_surveys = function(req, res) {
  Survey.find({}, function(err, Survey) {
    if (err)
      res.send(err);
    res.json(Survey);
  });
};




exports.create_a_survey = function(req, res) {
  var new_Survey = new Survey(req.body);
  
  
  new_Survey.ID = mongoose.Types.ObjectId();
  new_Survey.save(function(err, Survey) {
    if (err)
      res.send(err);
    res.json(Survey);
  });
};


exports.read_a_survey = function(req, res) {
  Survey.findById(req.params.SurveyId, function(err, Survey) {
    if (err)
      res.send(err);
    res.json(Survey);
  });
};


exports.update_a_survey = function(req, res) {
  Survey.findOneAndUpdate({_id: req.params.SurveyId}, req.body, {new: true}, function(err, Survey) {
    if (err)
      res.send(err);
    res.json(Survey);
  });
};


exports.delete_a_survey = function(req, res) {


  Survey.remove({
    _id: req.params.SurveyId
  }, function(err, Survey) {
    if (err)
      res.send(err);
    res.json({ message: 'Survey successfully deleted' });
  });
};
