import {useState} from "react"
import {useNavigate} from "react-router-dom"
 import "./Login.css"
 import { getAllUsers, getUserCart } from "../api";



const Login = ({ setToken, setUser, setCart }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const handleUsername = (event) => {
      setUsername(event.target.value);
    };
  
    const handlePassword = (event) => {
      setPassword(event.target.value);
    };
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      const user = await getAllUsers(username);
      const usersCart = await getUserCart(user.id);
      try {
        const response = await fetch(
          "https://fakestoreapi.com/auth/login",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              username: username,
              password: password,
            }),
          }
        );
        const result = await response.json();
        setToken(result.token);
      } catch (error) {
        console.error("There was an error POST login", error);
      }
      setUser(user);
      setCart(usersCart);
      setUsername("");
      setPassword("");
      navigate("/");
    };
  
    return (
      <div className="login-container">
        <form onSubmit={handleSubmit} className="form">
          <h1>Please Login!</h1>
          <div>
            <br></br>
            <label>
              Username:
              <input
                type="text"
                required
                value={username}
                onChange={handleUsername}
              />
            </label>
          </div>
          <br></br>
          <div>
            <label>
              Password:{" "}
              <input
                type="password"
                required
                value={password}
                onChange={handlePassword}
              />
            </label>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  };
  
  export default Login;