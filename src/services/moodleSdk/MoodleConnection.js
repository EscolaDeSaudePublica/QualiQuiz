const axios = require('axios')

/**
 * Define moodle connection and send requests
 */
export class MoodleConnection {
  /**
   * Default Moodle REST route
   * @type {string}
   */
  moodleServiceRoute = '/moodle/webservice/rest/server.php'

  /**
   * Build default variables
   * @param baseUrl
   */
  constructor ({ baseUrl }) {
    this.axios = axios({
      baseURL: baseUrl || ''
    })
  }

  /**
   * General request method
   * @param method: String    HTTP method
   * @param params: Object    Params to be sent in the request
   * @returns {*}
   */
  request ({ method, params }) {
    if (method.toLowerCase() === 'get') {
      return this.getRequest({ params })
    }
    if (method.toLowerCase() === 'post') {
      return this.postRequest({ params })
    }
  }

  postRequest ({ params }) {
    return this.axios.post(this.moodleServiceRoute, params)
  }

  getRequest ({ params }) {
    return this.axios.get(this.moodleServiceRoute, { params })
  }
}
