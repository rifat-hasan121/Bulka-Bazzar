import axios from "axios";
import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const axiosInstance = axios.create({
  baseURL: "https://bulka-bazar-server.vercel.app/",
  headers: {
    "Content-Type": "application/json",
  },
});
const useAxios = () => {
  const { user2 } = useContext(AuthContext);
  axiosInstance.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${user2?.accessToken}`;
    return config;
  });

  return axiosInstance;
};

export default useAxios;
