import { useCallback, useState } from "react";
import TwitterFollowCard from "./TwitterFollowCard";

const App = () => {
  const user = [
    {
      userName: "GmedicJaimes",
      name: "Gulliano Medic Jaimes",
      isFollowing: true,
    },
    {
      userName: "midudev",
      name: "Miguel Angel Duran",
      isFollowing: false,
    },
    {
      userName: "kadaja",
      name: "Karen Dayana Jaimes",
      isFollowing: true,
    },
    {
      userName: "TMChein",
      name: "Tomas M.",
      isFollowing: false,
    },
  ];

  return (
    <section className="App">
      <h1 className="title-component">Componentes y Estados</h1>

      {user.map((user) => {
        const { userName, name, isFollowing } = user;
        return (
          <TwitterFollowCard
            userName={userName}
            initialIsFollowing={isFollowing}
            key={userName}
          >
            {name}
          </TwitterFollowCard>
        );
      })}
    </section>
  );
};

export default App;
