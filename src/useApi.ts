import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://qiita.com/api/v2",
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
  },
});
export const useApi=()=>{

	apiClient.post("/str",{}).then((v)=>console.log(v.data))

	
}