'use strinct'

var CoreUser = require('./CoreUser')
var MoodleConnection = require('./MoodleConnection')

function MoodleSdk ({ host, connection }) {
  this.connection = new MoodleConnection({ host })
  this.CoreUser = new CoreUser({ connection })
}

MoodleSdk.prototype.coreUserCreateUsers = function (params) {
  return this.CoreUser.createUser(params)
}

module.exports = MoodleSdk
