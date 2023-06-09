import axios from "axios";

const URL = "http://localhost:5123";

export const authenticatesSignup = async (data) => {
  try {
    return await axios.post(`${URL}/signup`, data);
  } catch (error) {
    console.log("Error while calling signup api ", error);
  }
};

export const authenticatesLogin = async (data) => {
    console.log(data);
  try {
    return await axios.post(`${URL}/login`, data);
  } catch (error) {
    console.log("Error while calling login api ", error);
    return error.response;
  }
};

