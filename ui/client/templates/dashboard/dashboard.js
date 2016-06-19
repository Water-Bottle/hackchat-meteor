// Template.dashboard.events({

// 	"click .logout": function(event){
// 		Meteor.logout();
// 	}
// });

Meteor.logout(function(err){
	if(err){
		console.log("error occured");
	}
	else{
		console.log("Logged out");
		Router.go('/')
	}

});
