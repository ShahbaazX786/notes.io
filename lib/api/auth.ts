import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3200",
});

const signUpUser = async (data: any) => {
  const res = await API.post("/auth/signup", data);
  return res.data;
};

const loginUser = async (data: any) => {
  const res = await API.post("/auth/login", data);
  return res.data;
};

export { loginUser, signUpUser };
