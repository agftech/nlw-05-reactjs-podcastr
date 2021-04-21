export function Player() {
  return (
    <div>
      <header>
        <img src="/playing.svg" alt="Tocando agora" />
        <strong>Tocando agora</strong>
      </header>

      <div>
        <strong>Selecione um podcast para ouvir</strong>
      </div>

      <footer>
        <div>
          <span>00:00</span>
          <div>
            <div />
          </div>

          <span>00:00</span>
        </div>

        <div>
          <button>
            <img src="/shuffle.svg" alt="Embaralhar" />
          </button>

          <button>
            <img src="/play-previous.svg" alt="Tocar anterior" />
          </button>

          <button>
            <img src="/play.svg" alt="Tocar" />
          </button>

          <button>
            <img src="/play-next.svg" alt="Tocat proxima" />
          </button>

          <button>
            <img src="/repeat.svg" alt="Repetir" />
          </button>
        </div>
      </footer>
    </div>
  );
}

export default Player;
