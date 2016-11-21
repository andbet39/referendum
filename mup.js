module.exports = {
  servers: {
    one: {
      host: '193.70.37.67',
      username: 'root',
      // pem:
       password:'isp8EeJu'
      // or leave blank for authenticate from ssh-agent
    }
  },

  meteor: {
    name: 'referendum',
    path: '../referendum',
    servers: {
      one: {}
    },
    buildOptions: {
      serverOnly: true,
    },
    env: {
      ROOT_URL: 'cosavoto.online',
      MONGO_URL: 'mongodb://localhost/meteor'
    },

    //dockerImage: 'kadirahq/meteord'
    deployCheckWaitTime: 60
  },

  mongo: {
    oplog: true,
    port: 27017,
    servers: {
      one: {},
    },
  },
};