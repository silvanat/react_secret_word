import "./GameOver.css";
import Trophy from "../assets/trophy.png";
const GameOver = ({ retry, score }) => {
  return (
    <div>
      <h1>Fim do jogo!</h1>
      <img src={Trophy} alt="Troféu - Pontuação" title="Pontuação" />
      <h2>
        A sua pontuação foi <span>{score}</span>
      </h2>
      <button onClick={retry}>Resetar jogo</button>
    </div>
  );
};

export default GameOver;
