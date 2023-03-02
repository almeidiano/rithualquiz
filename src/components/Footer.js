import SamLogo from '../assets/img/sam-logo.svg';

export const Footer = () => {
    return (
      <footer>
          <div className='container footer'>
            <span>Developed by <a rel="noreferrer" target="_blank" href="https://samuelalmeidadev.com.br/portfolio-tecnico"><img src={SamLogo} alt="Samuel Logo" /></a></span>
          </div>
      </footer>
    )
  }
  
  export default Footer;