Meteor.methods({
    AddVote: function(vote_str,voted_cookie) {

	    var client_ip = this.connection.clientAddress;
       	if(voted_cookie==null || voted_cookie=="no" || voted_cookie==false){
       		Votes.insert({vote:vote_str,client_ip:client_ip});
       	}
       	return "OK";
    }
});