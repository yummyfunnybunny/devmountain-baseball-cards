import playerData from "./playerData";
import { useState } from "react";

function BaseballCard(props) {
  const [showPicture, setShowPicture] = useState(true);

  const toggleCard = () => {
    setShowPicture(!showPicture);
  };

  const { name, team, position, stats, imgUrl } = props;

  // console.log(stats);
  let statsDisplay = Object.entries(stats).map((stat) => {
    return (
      <p>
        {stat[0]}: {stat[1]}
      </p>
    );
  });
  // console.log(statsDisplay);

  // statsDisplay = statsDisplay.map((stat) => {
  //   return (
  //     <p>
  //       {stat[0]}: {stat[1]}
  //     </p>
  //   );
  // });

  if (showPicture) {
    return (
      <div className="card" onClick={toggleCard}>
        <h2>{name}</h2>
        <img src={imgUrl}></img>
      </div>
    );
  } else {
    return (
      <div className="card" onClick={toggleCard}>
        <h2>{name}</h2>
        <p>{team}</p>
        <p>{position}</p>
        <p>{statsDisplay}</p>
      </div>
    );
  }
}

function App() {
  const cards = playerData.map((player) => (
    <BaseballCard
      key={player.cardId}
      name={player.name}
      team={player.team}
      position={player.position}
      stats={player.stats}
      imgUrl={player.imgUrl}
    />
  ));

  return <>{cards}</>;
}

export default App;
