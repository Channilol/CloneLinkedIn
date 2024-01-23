import PersonaSingola from "../PersonaSingola/PersonaSingola";
import './PotrestiConoscere.css'
const PotrestiConoscere = () => {
return(
    <div className="potrestiConoscere">
        <h2>Persone che potresti conoscere</h2>
        <PersonaSingola />
        <PersonaSingola />
        <PersonaSingola />
        <PersonaSingola />
        <PersonaSingola />
        <h2 className="second">Mostra tutto</h2>
    </div>
)
}
export default PotrestiConoscere
