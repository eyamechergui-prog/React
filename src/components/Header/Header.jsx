import style from './Header.module.css';
function Header() {
    return (
        <header className={style.header}>
            <h1>travel agency</h1>
            <nav className={style.nav}>
                <a href="#">Acceuil</a>
                <a href="#">Destinations</a>
                <a href="#">Contact</a>
            </nav>
        </header>
    
    )
}
export default Header;