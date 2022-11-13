// Import Assets
import profile from '../assets/profile.png';

const Header = () => {
    return (
        <section className='header'>
            <img src={profile} alt="Prabhas Reddy" />

            <div className='header__content'>
                <h1>Hi, I'm Prabhas Reddy</h1>
                <p>Blockchain Developer</p>
            </div>
        </section>
    );
}

export default Header;