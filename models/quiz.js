// quiz.js define la estructura de la tabla de quizes (preguntas)con 2 campos (tipo string):

//	- pregunta: DataTypes.string
//	- respuesta: DataTypes.string

// Definicion de la tabla de Quiz

module.exports = function (sequelize , DataTypes) {

	return sequelize.define ('Quiz' , { pregunta: DataTypes.STRING, respuesta: DataTypes.STRING,});

}