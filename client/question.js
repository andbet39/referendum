var cookies = new Cookies()

Template.Question.helpers({
    'resultvisible': function(){
    	if (cookies.get('voted') != null){
    		return  true;
    	} else {
    		return null;
    	}
    }
});

Template.Question.events({
	'click .btn-yes':function(){
		var voted_cookie = cookies.get('voted');
		cookies.set('voted', 'y');
		FlowRouter.go('/result');

		Meteor.call('AddVote','Y', voted_cookie);

	},
	'click .btn-no':function(){
		var voted_cookie = cookies.get('voted');
		cookies.set('voted', 'y');
		FlowRouter.go('/result');

		Meteor.call('AddVote','N',voted_cookie);
		FlowRouter.go('result');

	},

})
