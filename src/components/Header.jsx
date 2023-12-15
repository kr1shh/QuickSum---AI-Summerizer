import './Header.scss'
import logo from '../assets/Logo.png'

const Header = () => {
  return (
    <>
        <header>
            <nav>
                <div className="logo_container">
                    <div className="logo_img">
                        <img src={logo} alt="Logo" />
                    </div>
                    <span>QuickSum</span>
                </div>
                <a href="https://www.github.com/kr1shh" rel='noreferrer' target='_blank'>
                    <button>
                        GitHub
                    </button>
                </a>
            </nav>
        </header>
    </>
  )
}

export default Header