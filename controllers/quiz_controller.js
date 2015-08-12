
var models = require ('../models/models.js');

// GET /quizes/question
exports.question = function (req , res){
	// con models.Quiz.findAll busca el array de elementos de la tabla Quiz
	// y como solo ha encontrado un elemento al cual se lo pasamos a la funcion "function(quiz)" 
	// cogemos el primer elemento quiz(0).
	models.Quiz.findAll().success(function(quiz){
		res.render('quizes/question', {pregunta : quiz[0].pregunta});
	})
};

// GET /quizes/answer
exports.answer = function (req , res){

	models.Quiz.findAll().success(function(quiz){

		if(req.query.respuesta === quiz[0].respuesta){

			res.render('quizes/answer' , {respuesta : 'Correcto'});

		}else {

			res.render('quizes/answer' , {respuesta : 'Incorrecto'});

		}

	})
	
};