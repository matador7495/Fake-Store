import { postData } from "./utils/httpReq.js";
import { getCookie, setCookie } from "./utils/cookie.js";

const inputBox = document.querySelectorAll("input");
const loginButton = document.querySelector("button");

const submitHandler = async (event) => {
  event.preventDefault();

  const username = inputBox[0].value;
  const password = inputBox[1].value;

  const response = await postData("auth/login", { username, password });

  setCookie(response.token);
  location.assign("index.html");
};

const init = () => {
  const cookie = getCookie();
  if (cookie) {
    location.assign("index.html");
  }
};

loginButton.addEventListener("click", submitHandler);
document.addEventListener("DOMContentLoaded", init);
