import './styles.css';
import image from '../../assets/kevin(png).png'
export default function Home(){
    return(
        <div className="home-component">
             
            <div className='text'>
                <div className='name'>K Kevin Gladson</div>
                <div className='role'>Software Engineer</div>
            </div>
            <div className='image'>
                <img src={image} className='myImage'></img>
            </div>
           
        </div>
    );
}