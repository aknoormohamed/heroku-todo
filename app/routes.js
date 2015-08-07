var Todo = require('./models/todo');
var Todo1 = require('./models/todo1');

function getTodos(res){
	Todo.find(function(err, todos) {

			// if there is an error retrieving, send the error. nothing after res.send(err) will execute
			if (err)
				res.send(err)

			res.json(todos); // return all todos in JSON format
		});
};
function getTodos1(res){
	Todo1.find(function(err, todos) {

			// if there is an error retrieving, send the error. nothing after res.send(err) will execute
			if (err)
				res.send(err)

			res.json(todos); // return all todos in JSON format
		});
};

module.exports = function(app) {

	// api ---------------------------------------------------------------------
	// get all todos
	app.get('/api/todos', function(req, res) {

		// use mongoose to get all todos in the database
		getTodos(res);
	});
	// app.get('/a', function(req, res) {

	// 	// use mongoose to get all todos in the database
	// 	res.send("ddd");
	// });

	// create todo and send back all todos after creation
	app.post('/api/todos', function(req, res) {

		// create a todo, information comes from AJAX request from Angular
		Todo.create({
			text : req.body.text,
			done : false
		}, function(err, todo) {
			if (err)
				res.send(err);

			// get and return all the todos after you create another
			getTodos(res);
		});

	});
	app.post('/api/todos/update', function(req, res) {

	var conditions = { _id:req.body._id};
var update = { text : req.body.text};
Todo.findOneAndUpdate(conditions, update, function (err)
{
  if (err)
  {
      res.json('nope');
  }
  else
  {
     getTodos(res);
  }
});	});
app.post('/api/todos1/update', function(req, res) {

	var conditions = { _id:req.body._id};
var update =   { text : req.body.text,des:req.body.des};
Todo1.findOneAndUpdate(conditions, update, function (err)
{
  if (err)
  {
      res.json('nope');
  }
  else
  {
     getTodos1(res);
  }
});


// 		Todo.findOne({ _id:req.body._id}, function(err, todo) {
//     if (err)
//     {
//         // TODO: Handle the error!
//     }
//     if (! todo)
//     {
//         res.json('nope');
//     }
//     else
//     {
       
//        Todo.update({
// 			text : req.body.text,
// 			done : false
// 		},function (err) {
//             if (err)
//             {
//                 // TODO: Handle the error!
//             }
//             res.json('yep');
//         });
//     }
// });



	});
	// 	Todo.update({
	// 		text : req.body.text,
	// 		done : false
	// 	}, function(err, todo) {
	// 		if (err)
	// 			res.send(err);

	// 		// get and return all the todos after you create another
	// 		getTodos(res);
	// 	});

	// });

	// delete a todo
	app.delete('/api/todos/:todo_id', function(req, res) {
		Todo.remove({
			_id : req.params.todo_id
		}, function(err, todo) {
			if (err)
				res.send(err);

			getTodos(res);
		});
	});
	app.get('/api/todosdetails/:todo_id', function(req, res) {
		Todo1.find({
			_id : req.params.todo_id
		}, function(err, todo) {
			if (err)
				res.send(err);

			getTodos1(res);
		});
	});



	// ***************************
	app.get('/api/todos1', function(req, res) {

		// use mongoose to get all todos in the database
		getTodos1(res);
	});

	// create todo and send back all todos after creation
	app.post('/api/todos1', function(req, res) {

		// create a todo, information comes from AJAX request from Angular
		Todo1.create({
			text : req.body.text,
			cat : req.body.cat,
			des : req.body.des,

			done : false
		}, function(err, todo) {
			if (err)
				res.send(err);

			// get and return all the todos after you create another
			getTodos1(res);
		});

	});

	// delete a todo
	app.delete('/api/todos1/:todo_id', function(req, res) {
		Todo1.remove({
			_id : req.params.todo_id
		}, function(err, todo) {
			if (err)
				res.send(err);

			getTodos1(res);
		});
	});

	// application -------------------------------------------------------------
	// app.get('*', function(req, res) {
	// 	res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
	// });
};
