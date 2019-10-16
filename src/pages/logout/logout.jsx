import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core/Button'
import axios from 'axios';
import Typography from '@material-ui/core/Typography'
import { inject } from 'mobx-react';
import { makeStyles } from '@material-ui/core/styles';
import { flexbox } from '@material-ui/system';

const store = ({ store }) => ({
    messageStore: store.messageStore
});

const useStyles = makeStyles(theme => ({
    text: {
        marginTop: 50,
        display: 'flex',
        justifyContent: 'center'
    },
    link: {
        justifyContent: 'center',
        textDecoration: 'none',
        color: theme.palette.primary.main
    }
}));

 function Logout(store) {
    const classes = useStyles()
    return (
        <div className={classes.text}>
            <Typography align="center" variant="subtitle">Wylogowano pomyślnie.
                <Link className={classes.link} to="/login">Zaloguj</Link>
            </Typography>
        </div>
    )
}

export default inject(store)(Logout)
