const BASE_URL = "https://fakestoreapi.com";

const postData = async (path, data) => {
  try {
    const response = await fetch(`${BASE_URL}/${path}`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });
    return await response.json();
  } catch (error) {
    alert("Something went wrong, please try again");
  }
};

const getData = async (path) => {
  try {
    const response = await fetch(`${BASE_URL}/${path}`);
    return await response.json();
  } catch (error) {
    alert("Something went wrong, please try again");
  }
};

export { postData, getData };
