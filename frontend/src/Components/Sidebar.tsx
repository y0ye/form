import classes from '@/styles/sidebar.module.css'
import HomeIcon from '@mui/icons-material/Home';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Groups3Icon from '@mui/icons-material/Groups3';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const sideIcons = {
    home: <HomeIcon />,
    profile: <AccountBoxIcon />,
    groups: <Groups3Icon />,
    settings: <SettingsIcon />,
    logout: <LogoutIcon />,
    upload: <AddCircleOutlineIcon />
};


export default function Sidebar() {

    return (
        <div className={classes.sidebar}>
            <div className={classes.logo_name}>
                <img src='./src/assets/KAT.png' />
                <h1 className={classes.poppins_medium}>Kat Form</h1>
            </div>
            <div className={classes.navlist}>
                <ul className={classes.poppins_light}>
                    <li>
                        <button
                            className={classes.btn}>
                            {sideIcons.home}
                            <h2>Home</h2>
                        </button>
                    </li>
                    <li>
                        <button className={classes.btn}>
                            {sideIcons.profile}
                            <h2>Profile</h2>
                        </button>
                    </li>
                    <li>
                        <button
                            className={classes.btn}>
                            {sideIcons.groups}
                            <h2>Communities</h2>
                        </button>
                    </li>
                    <li>
                        <button
                            className={classes.btn}>
                            {sideIcons.settings}
                            <h2>Settings</h2>
                        </button>
                    </li>
                </ul>
            </div>
            <div className={classes.upload_post}>
                <button className={classes.btn}>
                    {sideIcons.upload}
                </button>
            </div>
            <div className={classes.logout}>
                <button className={classes.btn}>
                    {sideIcons.logout}
                    <h2>Logout</h2>
                </button>
            </div>
        </div>
    )
}