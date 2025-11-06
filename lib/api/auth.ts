import API from "./config";

const signUpUser = async (data: any) => {
  const res = await API.post("/auth/signup", data);
  return res.data;
};

const loginUser = async (data: any) => {
  const res = await API.post("/auth/login", data);
  return res.data;
};

const logoutUser = async () => {
  const res = await API.post("/auth/logout");
  return res.data;
};

export { loginUser, logoutUser, signUpUser };
