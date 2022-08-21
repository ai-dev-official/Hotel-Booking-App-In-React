import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext} from "../../context/AuthContext";
import "./login.css";

const Login = () => {
    const [ credentials, setCredentials ] = useState({
        username: undefined,
        password: undefined,
    });

    const { loading, error, dispatch } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleChange  = (e) => {
        setCredentials(prev=>({...prev, [e.target.id]: e.target.value }));
    };

    const handleClick = async e => {
        e.preventDefault();
        dispatch({ type: "LOGIN_START"});
        
        try {
            const res = await axios.post("/auth/login", credentials);
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
            navigate("/");
        }catch(err){
            dispatch({ type:"LOGIN_FAILURE", payload:err.response.data}) ;
        }

    };

   

  return (
    <div className="loginContainer">
        <input type="text" id="username" placeholder="username" onChange={handleChange} className="loginInput" />
        <input type="password" id="password" placeholder="password" onChange={handleChange} className="loginInput" />
        <button disabled={loading} onClick={handleClick} className="loginButton"> login</button>
        {error && <span>{error.message}</span>}
    </div>
  )}

export default Login