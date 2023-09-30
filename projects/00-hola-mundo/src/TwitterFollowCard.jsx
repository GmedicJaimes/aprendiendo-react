const TwitterFollowCard = ({ userName, name, isFollowing, children }) => {
  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          src={`https://unavatar.io/github/${userName}`}
          alt="avatar de saitama"
        />
        <div className="tw-followCard-info">
          <strong>
            {name}
            {children}
          </strong>
          <span className="tw-followCard-infoUserName">@{userName}</span>
        </div>
      </header>

      <aside>
        <button className="tw-followCard-button">Seguir</button>
      </aside>
    </article>
  );
};

export default TwitterFollowCard;
