import "./App.css";
import TwitterFollowCard from "./TwitterFollowCard";

const App = () => {
  return (
    <section className="App">
      <h1 className="title-component">Componentes y Estados</h1>

      <TwitterFollowCard
        isFollowing
        userName="GmedicJaimes"
        name="Gulliano Medic Jaimes"
      />
      <TwitterFollowCard
        isFollowing={false}
        userName="midudev"
        name="Miguel Angel Duran"
      />

      <TwitterFollowCard isFollowing={false} userName="kadaja">
        Karen Dayana Daza
      </TwitterFollowCard>
    </section>
  );
};

export default App;
