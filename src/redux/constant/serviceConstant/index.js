export const SERVICE_ROUTES = {
  LOGIN: `${process.env.REACT_APP_BASE_URL}/api/login`,
  SIGNUP: `${process.env.REACT_APP_BASE_URL}/api/register`,
  ADMIN_LOGIN: `${process.env.REACT_APP_BASE_URL}/admin-login`,
  CHANGE_PASSWORD :`${process.env.REACT_APP_BASE_URL}/api/changepassword`,
  LOGOUT: `${process.env.REACT_APP_BASE_URL}/api/logout`,
  PASSWORD_RESET_MAIL :`${process.env.REACT_APP_BASE_URL}/api/send-reset-password-email`,
  RESET_PASSWORD : (token) =>`${process.env.REACT_APP_BASE_URL}/api/reset-password/${token}`,

  // < ------------- User Routes------------->

  
  CREATE_DEBATE: `${process.env.REACT_APP_BASE_URL}/api/createdebate`,
  DEBATE_ALL: `${process.env.REACT_APP_BASE_URL}/api/showalldebate`,
  DEBATE_SINGLE: (id) => `${process.env.REACT_APP_BASE_URL}/api/debate/${id}/single`,
  CONTACT: `${process.env.REACT_APP_BASE_URL}/api/contact`,
  PROS_ADD: (id) => `${process.env.REACT_APP_BASE_URL}/api/debates/${id}/addProsChildDebate`,
  CONS_ADD: (id) => `${process.env.REACT_APP_BASE_URL}/api/debates/${id}/addConsChildDebate`,
  ALL_USER: `${process.env.REACT_APP_BASE_URL}/api/users/all`,
  SEARCH: `${process.env.REACT_APP_BASE_URL}/api/search`,

 


  // <----------Update api---------->
};

export const METHODS = {
  GET: "GET",
  PUT: "PUT",
  PATCH: "PATCH",
  DELETE: "DELETE",
  POST: "POST",
};

// export const replaceUrl = (url, data) => {
//   //var regex = new RegExp(":(" + Object.keys(data).join("|") + ")", "g");
//   //const A = url?.replace(regex, (m, $1) => data[$1] || m);
//   const newUrl = `${url}=${data.id}`;
//   return newUrl;
// };
