var express = require('express');
var router = express.Router();

// Importamos el modulo quiz_controller 
var quizController = require('../controllers/quiz_controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Quiz' });
});

// Autoload de comandos con :quizId
router.param('quizId', quizController.load); //autoload :quizId

// Importamos dos nuevas rutas haciendo un GET ejecutando los controladores de quiz_controller

router.get('/quizes', quizController.index);
router.get('/quizes/:quizId(\\d+)', quizController.show);
router.get('/quizes/:quizId(\\d+)/answer' , quizController.answer);

module.exports = router;
