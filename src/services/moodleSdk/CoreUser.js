import hasOwnProperty from './helpersLint'
/**
 * Class with core_user webservice methods
 */
export class CoreUser {
  /**
   * Receive a MoodleConnection instance
   * @param connection: MoodleConnection
   */
  constructor ({ connection }) {
    this.connection = connection
  }

  /**
   * Default params sent on each request
   * @type {{wsfunction: string, moodlewsrestformat: string}}
   */
  defaultParams = {
    moodlewsrestformat: 'json',
    wsfunction: 'core_user_create_users'
  }

  /**
   * Each user into users has:
   * {
   *   username: string,
   *   firstname: string,
   *   lastname: string
   * }
   * @param users: Array
   * @returns {boolean}
   */
  createUsers ({ users }) {
    if (!this.validationCreateUsers(users)) return false
  }

  /**
   * @param users: Array
   * @returns {boolean}
   */
  validationCreateUsers (users) {
    if (!(users instanceof Array) || users.length === 0) {
      return false
    }
    for (const user of users) {
      if (user !== Object(user)) {
        return false
      }
      if (
        !hasOwnProperty(user, 'username') ||
        !hasOwnProperty(user, 'firstname') ||
        !hasOwnProperty(user, 'lastname')
      ) {
        return false
      }
    }
    return true
  }
}
