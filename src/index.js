import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'mobx-react'; 
import { Switch, Link, Route, BrowserRouter as Router } from 'react-router-dom'
import Login from './pages/login/login'
import Contact from './pages/contact/contact'
import Notfound from './pages/404/404'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import MailIcon from '@material-ui/icons/Mail';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import List from '@material-ui/core/List';
import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core/styles';
import { NotificationBar } from './shared/components/notificationBar'
import RootStore from './shared/stores/RootStore'

const useStyles = makeStyles({
    list: {
        width: 250,
    }
});

const Routing = function () {

    const classes = useStyles();

    console.log('st st',RootStore)

    const [state, setState] = React.useState({
        left: false
    });
    const toggleDrawer = (open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({ ...state, 'left': open });
    };

    const listObjects = [
        { text: 'O nas', link: '/about' },
        { text: 'Kursy', link: '/home' }
    ]
    const secondListObjects = [
        { text: 'Mój Profil', link: '/profile' },
        { text: 'Wyloguj', link: '/logout' }
    ]

    const sideList = () => (
        <div
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
            className={classes.list}
        >
            <List>
                {listObjects.map((obj, index) => (
                    <ListItem button key={obj.text}>
                        <Link className={classes.list} to={obj.link}>
                            <ListItemIcon>  <MailIcon /></ListItemIcon>
                            <ListItemText primary={obj.text} />
                        </Link>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {secondListObjects.map((obj, index) => (
                    <ListItem button key={obj.text}>
                        <Link to={obj.link}>
                            <ListItemIcon>  <MailIcon /></ListItemIcon>
                            <ListItemText primary={obj.text} />
                        </Link>
                    </ListItem>
                ))}
            </List>
        </div>
    );

    return (
        <Provider store={RootStore}>
            <Router>
                <div>
                    <div>
                        <AppBar position="static">
                            <Toolbar>
                                <IconButton onClick={toggleDrawer(true)} edge="start" color="inherit" aria-label="menu">
                                    <MenuIcon />
                                </IconButton>
                                <Typography variant="h6">
                                    Page
                            </Typography>
                            </Toolbar>
                        </AppBar>
                    </div>
                    <Drawer open={state.left} onClose={toggleDrawer(false)}>
                        {sideList('right')}
                    </Drawer>
                    <Switch>
                        <Route exact path="/" component={App} />
                        <Route path="/login" component={Login} />
                        <Route path="/about" component={Contact} />
                        <Route component={Notfound} />
                    </Switch>
                    <NotificationBar store={RootStore}/>
                </div>
            </Router>
        </Provider>
    )
}

ReactDOM.render(<Routing />, document.getElementById('root'));

serviceWorker.unregister();
