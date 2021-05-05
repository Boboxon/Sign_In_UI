import React, { useState } from "react";
import {
  ThemeProvider,
  CssBaseline,
  Switch,
  createMuiTheme,
} from "@material-ui/core";
// import { lightTheme, darkTheme, GlobalStyles } from "./Theme";

const Form = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [theme, setTheme] = useState(false);

  const handleSubmit = () => {
    localStorage.setItem("info", JSON.stringify({ name, password }));
  };

  const darkMode = createMuiTheme({
    palette: {
      type: theme ? "dark" : "light",
    },
  });

  const handleMode = () => {
    setTheme(!theme);
  };
  return (
    <ThemeProvider theme={darkMode}>
      <CssBaseline>
        <Switch onChange={handleMode} value={theme} />
        <div className="main-card">
          <h4>Welocome Back</h4>
          <span>We missed you! Login to get Started</span>
          <div className="second-card">
            <h5>LOGIN</h5>
            <div className="form">
              <input
                className="email"
                value={name}
                type="text"
                required
                onChange={(e) => setName(e.target.value)}
                placeholder="username"
              />
              <input
                className="password"
                value={password}
                type="password"
                required
                onChange={(e) => setPassword(e.target.value)}
                placeholder="*******"
              />
            </div>
            <input
              onClick={handleSubmit}
              className="checkbox"
              type="checkbox"
            />
            <span>Remember Me</span>
            <button className="btn">Sign In</button>
            <br />
            {/* <input onClick={() => handleMode()} type="checkbox" />{" "} */}

            {/* <span>Dark Mode</span> */}
          </div>
        </div>
      </CssBaseline>
    </ThemeProvider>
  );
};

export default Form;
