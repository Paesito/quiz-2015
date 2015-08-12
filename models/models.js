// models.js crea e inicializa la tabla Quiz y la Base de Datos utilizando sequelize

// sequelize.sync() construye la Base de Datos segun la Estructura de la tabla

var path = require ('path');

// Postgres DATABASE_URL = postgres://user:passwd@host:port/database
// SQLite DATABASE_URL = sqlite://:@:/

var url = process.env.DATABASE_URL.match(/(.*)\:\/\/(.*?)\:(.*)@(.*)\:(.*)\/(.*)/);
var DB_name = (url[6] || null);
var user = (url[2] || null);
var pwd = (url[3] || null);
var protocol = (url[1] || null);
var dialect = (url[1] || null);
var port = (url[5] || null);
var host = (url[4] || null);
var storage = process.env.DATABASE_STORAGE;

// Cargar Modelo ORM
var Sequelize = require ('sequelize');

// Usar Base de Datos SQlite3
var sequelize = new Sequelize (DB_name, user, pwd, 
								{dialect: protocol,
								 protocol: protocol,
								 port: port,
								 host: host, 
								 storage: storage,	// solo SQLite (.env)
								 omitNull: true		// solo Postgres
								}
							  );

// Importar la defncion de la tabla Quiz en quiz.js
var Quiz = sequelize.import(path.join(__dirname,'quiz'));

// Exportar la defincion de la tabla Quiz
exports.Quiz = Quiz;

// sequelize.sync() crear e inicializar la tabla de preguntas de la Base de Datos
// sequelize.sync() crea automaticamente el fichero quiz.sqlite con la Base de Datos 
// y sus datos inicales
sequelize.sync().success(function(){
	//success(..)ejecuta el manejador una vez creada la tabla

	// Quiz.count()success() devuelve en count el numero de filas de la tabla
	Quiz.count().success(function (count){
		// La tabla se iniciliza solo si esta vacia
		if(count===0){
			//Quiz.create crea la primera pregunta y la guarda en la tabla.
			Quiz.create({
					     pregunta: 'Capital de Italia ?',
						 respuesta: 'Roma'
					    }).success(function(){console.log('Base de datos Inicilizada')});

		};
	});
});