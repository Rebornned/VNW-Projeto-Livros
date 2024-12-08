import './design_footer.scss'

function Footer() {
    return (
        <footer className="footer">
            <div className='footer_top'>
                <p>4002-8922</p>
                <nav>
                    <ul>
                        <li><a href="https://www.facebook.com/" target='_blank'> 
                            <img src="assets/icons/facebook-icon.png" 
                        alt="link para o facebook" />
                            </a></li>
                        <li><a href="https://twitter.com/" target='_blank'> 
                            <img src="assets/icons/twitter-icon.png" 
                        alt="link para o twitter" />
                            </a></li>
                        <li><a href="https://www.youtube.com/" target='_blank'> 
                            <img src="assets/icons/youtube-icon.png" 
                        alt="link para o youtube" />
                            </a></li>
                        <li><a href="https://www.linkedin.com" target='_blank'> 
                            <img src="assets/icons/linkedin-icon.png" 
                        alt="link para o linkedin" />
                            </a></li>
                        <li><a href="https://www.instagram.com" target='_blank'> 
                            <img src="assets/icons/instagram-icon.png" 
                        alt="link para o instagram" />
                            </a></li>
                    </ul>
                </nav>
            </div>

            <div className='footer_down'>
                <p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024  </p>
            </div>
        </footer>
    )
}

export default Footer;