import './styles.css';
import { ReactComponent as YouTubeIcon } from './youtube.svg';
import { ReactComponent as LinkedinIcon } from './linkedin.svg';
import { ReactComponent as InstagramIcon } from './instagram.svg';

function Footer() {
    return (
        <footer className="main-footer">
            App desenvolvido durante a 2º ed. do evento Semana DevSuperior
            <div className="footer-icons">
                <a href="https://youtube.com/c/DevSuperior" target="_new">
                    <YouTubeIcon />
                </a>
                <a href="https://www.linkedin.com/school/devSuperior/">
                    <LinkedinIcon />
                </a>
                <a href="https://www.instagram.com/devsuperior.ig/">
                    <InstagramIcon /> 
                </a>
            </div>
        </footer>
    )
}

export default Footer;