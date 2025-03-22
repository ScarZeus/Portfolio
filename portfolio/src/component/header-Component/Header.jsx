import logo from '../../assets/Scar_Zeus.png'
import './styles.css'
export default function Header(){
    return(
        <div className="options">
            <img src={logo} id="app-bar-logo" alt='scar_zeus.png'/>
        </div>
    );
}