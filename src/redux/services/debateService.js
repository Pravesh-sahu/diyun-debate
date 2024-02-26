import Axios from "axios";
import { METHODS, SERVICE_ROUTES } from "../constant/serviceConstant";

// <------------post  debate Service------------->

export function CreateDebateService(data) {
  return new Promise((resolve, reject) => {
    let config = {
      url: SERVICE_ROUTES.CREATE_DEBATE,
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
// <------------Get debate Service------------->

export function GetDebateService(data) {
  return new Promise((resolve, reject) => {
    let config = {
      url: SERVICE_ROUTES.DEBATE_ALL,
      method: METHODS.GET,
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
