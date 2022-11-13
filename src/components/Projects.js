// Import Assets
import uniswap from '../assets/uniswap.png';
import compound from '../assets/compound.png';
import aave from '../assets/aave.png';

const Projects = () => {
    return (
        <section className="projects">
            <h2>My Projects</h2>

            <div className="projects__cards">

                <div className="projects__card">
                    <h3>NFT Marketplace</h3>
                    <img src={uniswap} alt="NFT Marketplace Page" />
                    <p>Marketplace for trading, selling, and buying digital works. I was beyond excited to write and deploy these 
                        SmartContracts and the frontend react app.
                    </p>
                    <a href="https://github.com/kprabhasreddy/nft-marketplace-master.git" target="_blank" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3>Diamond Hands</h3>
                    <img src={compound} alt="Diamond Hands Page" />
                    <p>This is a blockchain application, wherein, for a predetermined amount of time, 
                        you lock your assets in a smart contract. User can only withdraw assets at the end of the fixed term. 
                        This prevents you from frantically liquidating your investments in a crypto crash. 
                    </p>

                    <a href="https://github.com/kprabhasreddy/DiamondHands.git" target="_blank" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3>Skill Checker</h3>
                    <img src={aave} alt="Skill Checker Page" />
                    <p>A blockchain-based platform that crowdsources the task of assessing if the mentioned skill is indeed true.
                    An allocation mechanism has also been used to incentivize evaluators.
                    </p>
                    <a href="https://github.com/kprabhasreddy/Skillchecker-master.git" target="_blank" className="button">Code</a>
                </div>
            </div>
        </section>
    );
}

export default Projects;