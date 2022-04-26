/**
 * This JS is imported from SurveyJS, then I edited the fields manually in js to customize the survey.
 */

 Survey
 .StylesManager
 .applyTheme("modern");

var json = {
 "title": "Hiking Survey",
 "description": "Please take this short survey about your favorite hike!",
 "logo": "Photos/icons8-mountain-50.png",
 "logoWidth": 60,
 "logoHeight": 60,
 "elements": [
     {
         "name": "hike_name",
         "type": "text",
         "title": "Name Of Favorite Hike: ",
         "placeHolder": "Hike Name",
     }, 
     
     {
         "name": "hike_location",
         "type": "text",
         "title": "Hike Location: ",
         "placeHolder": "Location",
     }, 
     
     {
         "name": "description",
         "type": "text",
         "title": "Hike Description (Optional): ",
         "placeHolder": "Description",
     }
 ]
};

window.survey = new Survey.Model(json);

survey
 .onComplete
 .add(function (sender) {
     document
         .querySelector('#surveyResult')
         .textContent = "Result JSON:\n" + JSON.stringify(sender.data, null, 3);
 });

$("#surveyElement").Survey({model: survey});