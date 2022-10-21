import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import { loginUser } from "../config/firebasemethods";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let login = () => {
    loginUser({
      email,
      password,
    })
      .then((success) => {
        console.log(success);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <h1>Login</h1>
      <Box>
        <Box>
          <TextField
            label="Email"
            variant="standard"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Box>
        <Box>
          <TextField
            label="Password"
            type="password"
            variant="standard"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Box>
        <Box>
          <Button onClick={login} variant="contained">
            Login
          </Button>
        </Box>
      </Box>
    </>
  );
}
export default Login;
