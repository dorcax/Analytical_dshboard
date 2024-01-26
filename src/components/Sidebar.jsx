import img from '../img';
import classes from './Sidebar.module.scss';

function Sidebar() {
    return (
        <aside className={classes.sidebar}>
            <a href='#a' className={classes.sidebar__logo}>
                <img src={img.appIcon} alt='App Logo'/>
            </a>
            <ul className={classes.sidebar__menu}>
                {[1, 2, 3, 4, 5, 6].map(el=> <li key={el} className={classes.sidebar__item}>
                    <a href='#a' className={classes.sidebar__link}>
                        <img src={img.dashIcon} alt='Dash Icon'/>
                    </a>
                </li>)}
            </ul>
            <div className={classes.sidebar__mode}>
                <a className={`${classes['sidebar__mode-button']} ${classes.active}`}></a>
                <a className={`${classes['sidebar__mode-button']}`}></a>
            </div>
            <ul className={`${classes.sidebar__menu} ${classes['sidebar__menu--bottom']}`}>
                {[1, 2, 3].map(el=> <li key={el} className={classes.sidebar__item}>
                    <a href='#a' className={classes.sidebar__link}>
                        <img src={img.dashIcon} alt='Dash Icon'/>
                    </a>
                </li>)}
            </ul>
        </aside>
    );
}

export default Sidebar;
