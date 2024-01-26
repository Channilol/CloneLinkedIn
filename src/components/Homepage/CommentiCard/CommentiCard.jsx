import "./CommentiCard.css";
import { useState, useEffect } from "react";

const CommentiCard = ({datiComment}) => {
  const [isMyComment, setIsMyComment] = useState(false)

  const dateTimeString = datiComment.createdAt;
  const dateTime = new Date(dateTimeString);

  const hours = dateTime.getHours().toString().padStart(2, '0');
  const minutes = dateTime.getMinutes().toString().padStart(2, '0');
  const time = `${hours}:${minutes}`;

  const day = dateTime.getDate().toString().padStart(2, '0');
  const month = (dateTime.getMonth() + 1).toString().padStart(2, '0');
  const year = dateTime.getFullYear();
  const date = `${day}-${month}-${year}`;

  useEffect(() => {
    if(datiComment.author === 'BW3Team6@epicode.it') {
      setIsMyComment(true)
    }
  },[datiComment])

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
              <strong>{datiComment.author}</strong>
            </p>
            <p id="pGiorno">
              {time} del {date}
            </p>
          </div>
          <p id="pPiccolo">Titolo utente</p>
          <p>{datiComment.comment}</p>
          <p id="pBlu"><strong>Vedi traduzione</strong></p>
        </div>
        {isMyComment ? (
          <div className="">

          </div>
        ) : ''}
      </div>
      {!isMyComment ? (
      <div id="consiglia">
        <p>Consiglia | Rispondi</p>
      </div>) : ''} 
    </div>
  );
};

export default CommentiCard;