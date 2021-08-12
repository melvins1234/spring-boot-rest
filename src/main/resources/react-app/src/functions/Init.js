import {useDispatch} from "react-redux"
import { token } from "../store/action/token";


const Init = () => {
    const dispatch = useDispatch();
    
    let details = {
        username: "admin",
        password: "root",
      };
  
      let formBody = Object.keys(details)
        .map((e) => `${encodeURIComponent(e)}=${encodeURIComponent(details[e])}`)
        .join("&");
  
      fetch("/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
          "Access-Control-Allow-Origin": "*",
        },
        body: formBody,
      })
        .then((res) => res.json())
        .then((json) => dispatch(token(json.token)));
}

export default Init
