const setCookie = (data) => {
  document.cookie = `token=${data};max-age=${60 * 60 * 24};path=/`;
};

export { setCookie };
