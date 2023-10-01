import { useState } from "react";
import "./App.css";
const TwitterFollowCard = ({ userName, children, initialIsFollowing }) => {
  //creacion del estado para el boton de seguir
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

  //const creadas para el cambio de texto y color
  const text = isFollowing ? "Siguiendo" : "Seguir";
  const buttonClassName = isFollowing
    ? "tw-followCard-button is-following"
    : "tw-followCard-button";

  //funcion para que interactue al momento de darle click
  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };
  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          src={`https://unavatar.io/github/${userName}`}
          alt="avatar de saitama"
        />
        <div className="tw-followCard-info">
          <strong>{children}</strong>
          <span className="tw-followCard-infoUserName">@{userName}</span>
        </div>
      </header>

      <aside>
        <button onClick={handleClick} className={buttonClassName}>
          <span className="tw-followCard-text">{text}</span>
          <span className="tw-followCard-stopFollow">Dejar de seguir</span>
        </button>
      </aside>
    </article>
  );
};

export default TwitterFollowCard;
