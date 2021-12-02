import axios from "axios";

//An instance that holds the base URL is created to be used within any component that makes requests to the base URL
const token = localStorage.getItem("token");
console.log(token);
const Axios = axios.create({
  baseURL: "http://localhost:5000/api/v1",
  headers: {
    Authorization: token ? `Bearer ${token}` : null,
  },
});

export default Axios;
