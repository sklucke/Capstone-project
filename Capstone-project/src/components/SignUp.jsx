import {useState} from "react";
import "./SignUp.css";
import {useNavigate} from "react-router-dom"

const SignUp = ({ setToken }) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const navigate = useNavigate();
    const [error, setError] = useState(null);

    const handleUsername = (event) => {
        setUsername(event.target.value);
    }
  
    const handleEmail = (event) => {
      setEmail(event.target.value);
    };
  
    const handlePassword = (event) => {
      setPassword(event.target.value);
    };
  
    const handleFirstname = (event) => {
      setFirstname(event.target.value);
    };
  
    const handleLastname = (event) => {
      setLastname(event.target.value);
    };
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        const response = await fetch(
          "https://fakestoreapi.com/users",
          {
            method: "POST",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify({
              firstname: firstname,
              lastname: lastname,
              email: email,
              password: password,
              username: username,
            }),
          }
        );
        const result = await response.json();
        console.log("sign up", result);
        setToken(result.token);
      } catch (error) {
        console.error("There was an error POST signup", error);
        setError(error);
      }
  
      navigate("/account");
    };
  
    return (
      <div className="register-container">
        <form onSubmit={handleSubmit} className="register">
          <h1>Sign Up</h1>
          <br></br>
          <div>
            <label>
              Firstname:
              <input
                type="text"
                required
                value={firstname}
                onChange={handleFirstname}
              />
            </label>
          </div>
          <br></br>
          <div>
            <label>
              Lastname:
              <input
                type="text"
                required
                value={lastname}
                onChange={handleLastname}
              />
            </label>
          </div>
          <br></br>
          <div>
            <label>
              Email:
              <input
                type="text"
                required
                value={email}
                onChange={handleEmail}
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
                minLength={8}
                value={password}
                onChange={handlePassword}
              />
            </label>
            <br></br>
          <div>
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
          </div>
          <button>Submit</button>
        </form>
      </div>
    );
  };
  
  export default SignUp;