import "./App.css";
import TwitterFollowCard from "./TwitterFollowCard";

const App = () => {
  const formatUserName = (username) => `@${username}`;

  return (
    <section className="App">
      <TwitterFollowCard
        formatUserName={formatUserName}
        isFollowing
        userName="GmedicJaimes"
        name="Gulliano Medic Jaimes"
      />
      <TwitterFollowCard
        formatUserName={formatUserName}
        isFollowing
        userName="midudev"
        name="Miguel Angel Duran"
      />
    </section>
  );
};

export default App;
