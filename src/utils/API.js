import axios from "axios";

// export default {
//   getRandomUser: function () {
//     return axios.get("https://randomuser.me/api/?results=25");
//   },
// };

const instance = axios.create({
  baseURL: "https://randomuser.me/api/?results=25",
});

export default instance;
