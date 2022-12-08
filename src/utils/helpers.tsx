import { toast } from "react-toastify";
import jwt from "jsonwebtoken";

export const errorHandler = (err: Error) => {
  switch (err.code) {
    case "ERR_NETWORK": {
      toast.error(err.message);
      // console.log("Host is not available");
      break;
    }
    case "ERR_BAD_REQUEST": {
      toast.error(err.response.data.message);
      // console.log("Host is not available");
      break;
    }
    default: {
      toast.error(err.message);
      console.log(err);
    }
  }
};

export const fetchRole = () => {
  const user = jwt.decode(localStorage.getItem("auth")).user;
  return user.role;
};

interface Error {
  code: string;
  message: string;
  response: {
    data: {
      message: string;
    };
  };
}
