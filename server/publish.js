Meteor.publish('voteyes', function() {
  Counts.publish(this, 'voteyes', Votes.find({vote:"Y"}));
});

Meteor.publish('voteno', function() {
  Counts.publish(this, 'voteno', Votes.find({vote:"N"}));
});