const TwitterFollowCard = () => {
  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrR2431yZjH3LfZfYlzaR7HajKvzb6i4YanQ&usqp=CAU"
          alt="avatar de midu"
        />
        <div className="tw-followCard-info">
          <strong>Gulliano Medic Jaimes</strong>
          <span className="tw-followCard-infoUserName">@mejadev</span>
        </div>
      </header>

      <aside>
        <button className="tw-followCard-button">Seguir</button>
      </aside>
    </article>
  );
};

export default TwitterFollowCard;
