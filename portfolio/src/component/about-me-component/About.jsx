import './styles.css';
import image1 from '../../assets/java.png'
import image2 from '../../assets/spring.png'
import image3 from '../../assets/postgres.png'
import image4 from '../../assets/nodejs.png'
import image5 from '../../assets/mongodb.png'

export default function About(){
    const information = `Hi! I'm a  Software Engineering student with a strong passion for backend development and API design. I specialize in building scalable and efficient applications using Spring Framework, Node.js, MongoDB, PostgreSQL, and React.
With a deep understanding of databases, backend logic, and web services, I enjoy creating seamless integrations and robust APIs that power modern applications. Whether it's designing secure RESTful APIs, optimizing database queries, or developing full-stack applications, I'm always eager to take on new challenges
I'm also a quick learner who loves exploring new technologies and improving my problem-solving skills through hands-on projects. Currently, I’m working on DriveNShop, a grocery shopping API that enhances my expertise in ORM frameworks and inventory management.
Let’s connect and build something amazing together!`
    return(
        <div className='about-component'>
            <h2>
                About me
            </h2>
            <div className='info'>
            <p>
                {information}
            </p>
            <div className='technical-skills'>
                <img src={image1} alt='image1' className='images'/>
                <img src={image2} alt='image2' className='images'/>
                <img src={image3} alt='image3' className='images'/>
                <img src={image4} alt='image4' className='images'/>
                <img src={image5} alt='image5' className='images'/>
            </div>
            </div>
        </div>
    );
}