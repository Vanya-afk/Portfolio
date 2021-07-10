import h from './Header.module.scss'
import Nav from "../Nav/Nav";

function Header() {
    return (
        <div className={h.headerBlock}>
            <Nav/>
        </div>
    );
}

export default Header;