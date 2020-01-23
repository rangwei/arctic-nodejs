'use strict';
module.exports = function(app) {
  var surveyList = require('../controllers/surveyController');

  // surveyList Routes
  app.route('/surveys')
    .get(surveyList.list_all_surveys)
    .post(surveyList.create_a_survey);


  app.route('/surveys/:surveyId')
    .get(surveyList.read_a_survey)
    .put(surveyList.update_a_survey)
    .delete(surveyList.delete_a_survey);
};