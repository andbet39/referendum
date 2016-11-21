Votes = new Mongo.Collection('votes');

Votes.allow({
    insert: function(userId, doc) {
        return true;
    }
});


VoteSchema = new SimpleSchema({
    vote: {
        type: String,
        label: 'Vote'
    },
    client_ip: {
        type: String,
        label: 'Client Ip'
    },
    createdAt: {
        type: Date,
        label: 'Created At',
        autoValue: function() {
            return new Date();
        },
        autoform: {
            type: 'hidden'
        }
    }
});

Votes.attachSchema(VoteSchema);