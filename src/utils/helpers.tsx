import { toast } from "react-toastify";

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

interface Error {
  code: string;
  message: string;
  response: {
    data: {
      message: string;
    };
  };
}
