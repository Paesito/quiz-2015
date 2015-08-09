var express = require('express');
var router = express.Router();

// Importamos el modulo quiz_controller 
var quizController = require('../controllers/quiz_controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Quiz' });
});


// Importamos dos nuevas rutas haciendo un GET ejecutando los controladores de quiz_controller
router.get('/quizes/question', quizController.question);
router.get('/quizes/answer' , quizController.answer);

module.exports = router;
