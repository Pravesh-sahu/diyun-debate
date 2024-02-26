export const ASYNC_ROUTE = {
  LOGIN: "/api/login",
  SIGNUP: "/api/register",
  ADMIN_LOGIN: "/admin-login",
  CHANGE_PASSWORD: "/api/changepassword",
  LOGOUT: "/api/logout",
  PASSWORD_RESET_MAIL: "/api/send-reset-password-email",
  RESET_PASSWORD: "/api/reset-password",

  // < ------------- User Routes------------->

  CREATE_DEBATE: "/api/createdebate",
  DEBATE_ALL: "/api/showalldebate",
  DEBATE_SINGLE: "/api/debate/id/single",
  CONTACT: "/api/contact",
  PROS_ADD: "/api/debates/id/addProsChildDebate",
  CONS_ADD: "/api/debates/id/addConsChildDebate",
  ALL_USER: "/api/users/all",
  SEARCH: "/api/search",

  // < ------------- Admin Routes------------->
};
export const THUNK_STATUS = {
  LOADING: "loading",
  SUCCESS: "success",
  FAILED: "failed",
};
