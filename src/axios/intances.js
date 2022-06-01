import axios from "axios";
import { host } from "./routes";

export const axiosInstance = axios.create({
  baseURL: host,
  "Content-Type": "application/json",
});
