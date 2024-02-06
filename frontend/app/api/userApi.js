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
    error.response
      ? notify("erorr", error.response.data.message)
      : notify("error", error.message);
  }
};
export const loginHandler = async ({ email, password }) => {
  try {
    const { data } = await axios.post("http://127.0.0.1:5000/api/user/login", {
      email,
      password,
    });
    notify("success", data.message);
  } catch (error) {
    error.response
      ? notify("erorr", error.response.data.message)
      : notify("error", error.message);
  }
};
