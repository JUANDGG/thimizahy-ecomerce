
//Imports Components
import Search from "./Search";


//Imports MEDIA
import logo from './assets/images/png/thimisay-logo.png'

//Imports StyleSheets
import './assets/stylesheets/Header.css'


function Header(){
    return(

        <header className="ctHeader">
            <img  className="ctHeader-imageItemLogo" src={logo} alt="image of the thimisay company logo" />
            <Search className="search-form"/>
            <nav className="ctHeader-navList">
                <a href="#">Carrito</a>
                <a href="#">user</a>    
            </nav>
            
        </header>
    )
}

export default Header;