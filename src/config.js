/* eslint-disable */
require('dotenv').config()

const api = process.env.VUE_APP_BACKEND_URL;
// const api = "https://api-ninja.herokuapp.com/api/quoteshell/";
export const genericHeaders = () => ({
  "Content-Type": "application/json",
  Accept: "application/json"
});

export const emailSuffix = '@hosting.com'

export default api