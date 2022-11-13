const Experience = () => {
    return (
        <div className="experience">
            <h2>Experience</h2>

            <ul>
                <li>
                    <i>JNTU Hyderabad</i>, 2018-2022
                    <ul>
                        <li>Graduated with 7.2 GPA.</li>
                    </ul>
                </li>
                <li>
                    <i>Horoscope NFT</i> - <strong>Solidity</strong>
                    <ul>
                        <li>Mints NFT that takes date of birth to check the zodiac sign and create a horoscope.</li>
                        <li>Employed OpenZeppelin library &amp; ERC721 standards.</li>
                    </ul>
                </li>
                <li>
                    <i>Elon Musk NFT</i> - <strong>Solidity</strong>
                    <ul>
                        <li>Adds images to NFT after minting.</li>
                        <li>Launched the NFT onto the testnet before launching it on the mainnet and OpenSea.</li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}

export default Experience;