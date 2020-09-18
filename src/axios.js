import axios from "axios";

const instance = axios.create({
  // API (cloud function)
  baseURL: "https://us-central1-e-commerce-2fdd5.cloudfunctions.net/api",
  //"http://localhost:5001/e-commerce-2fdd5/us-central1/api",
});

export default instance;
