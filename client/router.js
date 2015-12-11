var Router = Backbone.Router.extend({
	routes: {
		'': 'index',
		'playing/:artist/:title/': 'playing'
	},
	

	index: function() {
		console.log("I'm here!");
	},
	playing: function(artist, title) {
		for (var i = 0; i < library.models.length; i++){
			if(library.models[i].get('artist') === artist && library.models[i].get('title') === title){
				console.log(library.models[i])
			}
	}
	// _.each(library.models, function(model){
	// 	console.log(model)
	// })
		
	}
});

var appRouter = new Router();
appRouter.navigate('index', true);
Backbone.history.start();