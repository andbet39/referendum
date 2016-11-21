var cookies = new Cookies()

Template.Question.helpers({
	'prova':function(){
		return 'pippo';
	},
    'resultvisible': function(){

    	console.log ("COOOKIE");
    	console.log (cookies.get('voted'));
    	if (cookies.get('voted') != null){
    		console.log("Visible true");
    		return  true;
    	} else {
    		 console.log("Visible false");

    		return null;
    	}
    }
});

Template.Question.events({
	'click .btn-yes':function(){
		var voted_cookie = cookies.get('voted');

		Meteor.call('AddVote','Y', voted_cookie, function(error, result) {

    			cookies.set('voted', 'y');
    			FlowRouter.go('result');
		});
	},
	'click .btn-no':function(){
		var voted_cookie = cookies.get('voted');

		Meteor.call('AddVote','N',voted_cookie, function(error, result) {

    			cookies.set('voted', 'y');
    			FlowRouter.go('result');
  			
		});
	},

})