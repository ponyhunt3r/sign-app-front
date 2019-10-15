
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import { inject, observer } from 'mobx-react';
import IconButton from '@material-ui/core/IconButton';
import React from 'react';


const store = ({ store }) => ({
    messageStore: store.messageStore
});

export const NotificationBar = inject(store)(observer(({ messageStore }) => {
    return (   
    <Snackbar
        open={messageStore._isMessageDisplayed}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
        }}
        autoHideDuration={6000}
        ContentProps={{
            'aria-describedby': 'message-id',
        }}
        message={<span id="message-id">{messageStore._message}</span>}
        action={[
            <IconButton
                key="close"
                aria-label="close"
                color="inherit"
            >
                <CloseIcon />
            </IconButton>,
        ]}
    />)
}))

