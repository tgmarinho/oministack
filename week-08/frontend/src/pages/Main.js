import React, { useEffect, useState } from "react";
import logo from "../assets/logo.svg";
import like from "../assets/like.svg";
import dislike from "../assets/dislike.svg";
import { Link } from "react-router-dom";
import api from "../services/api";

import "./Main.css";

const Main = ({ match }) => {
  const [users, setUsers] = useState(null);

  const user = match.params.id;

  useEffect(() => {
    async function loadUsers() {
      const response = await api.get("/devs", {
        headers: {
          user
        }
      });

      setUsers(response.data);
    }
    loadUsers();
  }, [match.params.id, user]);

  async function handleLike(id) {
    await api.post(`/devs/${id}/likes`, null, {
      headers: {
        user
      }
    });

    setUsers(users.filter(user => user._id !== id));
  }

  async function handleDislike(id) {
    await api.post(`/devs/${id}/dislikes`, null, {
      headers: {
        user
      }
    });

    setUsers(users.filter(user => user._id !== id));
  }

  if (users === null) {
    return (
      <div className="main-container">
        <Link to="/">
          <img src={logo} alt="Tindev" />
        </Link>
        <div className="loading">Carregando...</div>
      </div>
    );
  }

  return (
    <div className="main-container">
      <Link to="/">
        <img src={logo} alt="Tindev" />
      </Link>

      {users.length > 0 ? (
        <ul>
          {users.map(user => (
            <li key={user._id}>
              <img src={user.avatar} alt={user.name} />
              <footer>
                <strong>{user.name}</strong>
                <p>{user.bio}</p>
              </footer>
              <div className="buttons">
                <button type="button" onClick={() => handleDislike(user._id)}>
                  <img src={dislike} alt="Dislike" />
                </button>
                <button type="button" onClick={() => handleLike(user._id)}>
                  <img src={like} alt="Like" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div className="empty">Acabou :(</div>
      )}
    </div>
  );
};

export default Main;
