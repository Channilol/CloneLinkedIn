import "./CommentiCard.css";

const CommentiCard = () => {
  return (
    <div>
      <div id="contenitoreFotoCommento">
        <div id="foto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            fill="currentColor"
            className="bi bi-person-circle"
            viewBox="0 0 16 16"
          >
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
            <path
              fillRule="evenodd"
              d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
            />
          </svg>
        </div>
        <div id="contenitoreCommento">
          <div id="nome">
            <p id="h4">
              <strong>marwane najim</strong> - 3° e oltre <br />
            </p>
            <p id="pGiorno">
              1 giorno{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-three-dots"
                viewBox="0 0 16 16"
              >
                <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
              </svg>
            </p>
          </div>
          <p id="pPiccolo">Tecnico audio-visivo presso alumma international</p>
          <p>We also have a touch of humor.</p>
          <p id="pBlu"><strong>Vedi traduzione</strong></p>
        </div>
      </div>
      <div id="consiglia">
        <p>Consiglia | Rispondi</p>
      </div>
    </div>
  );
};

export default CommentiCard;
