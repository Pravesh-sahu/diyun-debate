import Axios from "axios";
import { METHODS, SERVICE_ROUTES } from "../constant/serviceConstant";

export function LoginService(data) {
  return new Promise((resolve, reject) => {
    let config = {
      url: SERVICE_ROUTES.LOGIN,
      method: METHODS.POST,
      data,
    };
    Axios.request(config)
      .then((res) => {
        return resolve(res);
      })
      .catch((err) => {
        return reject(err);
      });
  });
}

export function SignUpService(data) {
    return new Promise((resolve, reject) => {
      let config = {
        url: SERVICE_ROUTES.SIGNUP,
        method: METHODS.POST,
        data,
      };
      Axios.request(config)
        .then((res) => {
          return resolve(res);
        })
        .catch((err) => {
          return reject(err);
        });
    });
  }
