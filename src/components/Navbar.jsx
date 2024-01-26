import classes from './Navbar.module.scss';

function Navbar() {
    return (
        <nav className={classes.navbar}>
            <div className={classes.navbar__inner}>
                <a href='#a' className={classes.navbar__heading}>
                    Dashboard
                </a>
                <div className={classes.navbar__search}>
                    <input type='text' placeholder='Search...' className={classes['navbar__search-input']}/>
                    <button className={classes['navbar__search-button']}></button>
                </div>
                <div className={classes.navbar__calendar}>
                    <a></a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
