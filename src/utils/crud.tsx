import axios from "axios";
import { errorHandler } from "./helpers";
import { toast } from "react-toastify";
import jwt from "jsonwebtoken";

export const login = (url = "http://", data = {}) => {
  toast.info("Signing in", { autoClose: 500 });
  axios
    .post(url, data)
    .then((response) => {
      switch (response.status) {
        case 200: {
          const user = jwt.decode(response.data.data).user;
          toast.success(`Welcome ${user.givenName} ${user.sn}`);
          localStorage.setItem("auth", response.data.data);
          localStorage.setItem("user", JSON.stringify(user));
          localStorage.setItem("username", user.sAMAccountName);
          localStorage.setItem("title", user.title);
          localStorage.setItem("department", user.department);

          break;
        }
        default: {
          throw response;
        }
      }
    })
    .catch((err) => {
      errorHandler(err);
    });
};
export const postData = (url = "", data = {}) => {};
