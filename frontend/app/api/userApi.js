import axios from "axios";
import { notify } from "../config/toast";

export const registerHandler = async ({ name, email, password }) => {
  try {
    const { data } = await axios.post(
      "http://127.0.0.1:5000/api/user/register",
      { name, email, password }
    );
    notify("success", data.message);
  } catch (error) {
    console.log(error);
    notify("erorr", data.response.data.message);
  }
};

export const loginHandler = async ({ email, password }) => {
  try {
    const { data } = await axios.post("http://127.0.0.1:5000/api/user/login", {
      email,
      password,
    });
    console.log(data);
    notify("success", data.message);
  } catch (error) {
    console.log(error);
    notify("error", error.response.data.message);
  }
};
