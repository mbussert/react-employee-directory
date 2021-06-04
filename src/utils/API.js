import axios from "axios";

const instance = axios.create({
  baseURL: "https://randomuser.me/api/?results=25",
});

export default instance;
