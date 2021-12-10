import axios from "axios";

export default axios.create({
  baseURL: '/services',
  headers: {
    "Content-type": "application/json"
  }
});