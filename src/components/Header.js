// Import Assets
import profile from '../assets/profile.png';

const Header = () => {
    return (
        <section className='header'>
            <img src={profile} alt="Prabhas Reddy" />

            <div className='header__content'>
                <h1>Hi, I'm Prabhas Reddy</h1>
                <p>Blockchain Developer</p>
                <a href="https://docs.google.com/document/d/1jIX0tbvQntauTTF2LTgWfltqBSeMROv0fwMt5vtlEmg/edit?usp=sharing" className="button">Here's my Resume</a>
            </div>
        </section>
    );
}

export default Header;