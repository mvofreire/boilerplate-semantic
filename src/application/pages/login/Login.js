import React, { useState } from "react";
import { doLogin } from "services/login";

const Login = ({ setUserSession, history, session }) => {
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");

  const requestAuthentication = async () => {
    try {
      const data = await doLogin({ login, senha });
      setUserSession(data);
      history.push("/admin/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        height: "100%",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <div>login</div>
    </div>
  );
};

export default Login;
