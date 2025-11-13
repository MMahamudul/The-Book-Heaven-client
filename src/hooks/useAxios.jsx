import axios from "axios";

const instance = axios.create({
  baseURL: 'bookheaven-server.vercel.app',
 
});


const useAxios = () =>{
    return instance;

}

export default useAxios;