import React, { useState } from "react";
import logo from "../assets/logo.svg";
import "./Login.css";
import api from "../services/api";

export default function Login({ history }) {
  const [username, setUsername] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await api.post("/devs", {
      username
    });

    const { _id, name, avatar } = response.data;

    history.push(`/dev/${_id}`, { name, avatar });
  }

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <img src={logo} alt="Tindev" />
        <input
          value={username}
          onChange={e => setUsername(e.target.value)}
          placeholder="Digite seu usuário do Github"
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
