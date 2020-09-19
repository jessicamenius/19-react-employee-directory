const axios = require("axios");

export default {
  getEmployees: function () {
    return axios.get("https://randomuser.me/api/?results=200&nat=us");
  },
};
