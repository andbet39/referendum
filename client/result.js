Template.Result.onCreated(function(){
    var self = this;
    self.autorun(function(){
        self.subscribe('voteyes');
        self.subscribe('voteno');
    });

});

Template.Result.helpers({
	voteyes:function(){
		return Counts.get('voteyes');
	},
	voteno:function(){
		return Counts.get('voteno');
	},
	totalvote:function(){
		var tot = Counts.get('voteno') +Counts.get('voteyes');
		return tot;
	},
	perc_yes:function(){
		var tot = 100* (Counts.get('voteyes')/(Counts.get('voteno') +Counts.get('voteyes')));
		return tot;
	},
	perc_no:function(){
		var tot = 100* ( Counts.get('voteno')/(Counts.get('voteno') +Counts.get('voteyes')));

		return tot;
	},
})