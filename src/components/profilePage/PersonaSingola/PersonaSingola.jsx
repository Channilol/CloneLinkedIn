import './PersonaSingola.css'
const PersonaSingola = () => {
  return (
    <div className="personaSingola">
      <div className="imagineHolder">
        <img className="userImg" src="https://img.freepik.com/free-photo/portrait-beautiful-young-woman-standing-grey-wall_231208-10760.jpg" alt="prova" />
      </div>
      <div className="information">
        <div className="first">
          <h3>Prova Prova</h3>
          <div className='primoP'><p>prova prova prova prova prova prova</p></div>
        </div>
        <div className="informationBtn">
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-plus-fill" viewBox="0 0 16 16">
              <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
              <path fillRule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5"/>
            </svg>
            Collegati
          </button>
        </div>
      </div>
    </div>
  );
};
export default PersonaSingola;
