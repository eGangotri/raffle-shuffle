import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles, alpha } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';

import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import logo from '../../assets/Mintable-Logo.png';
import downArrow from '../../assets/Vector.png';
import solidDownArrow from '../../assets/Vector1.png';

const useStyles = makeStyles(theme => ({
    header: {
        backgroundColor: '#fff !important'
    },
    textColor: {
        color: '#2D2D2D',
        fontSize: '16px !important',
        padding: '10px'
    }, search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    }, searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }, logo: {
        borderRadius: '0px',
        backgroundColor: 'black',
        height: '40px',
        width: '40px'
    }
}));

export default function Header({ props }) {
    const classes = useStyles(props);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" className={classes.header}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        className={classes.logo}
                    >
                        <img src={logo} alt="logo" />
                    </IconButton>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: "none", md: "flex" }, justifyContent: 'space-between' }}>
                        <Link
                            component="button"
                            variant="body2"
                            className={classes.textColor}
                            underline="none"
                        >
                            Browse
                        </Link>
                        <Link
                            component="button"
                            variant="body2"
                            className={classes.textColor}
                            underline="none"
                        >
                            Discover
                        </Link>
                        <Link
                            component="button"
                            variant="body2"
                            className={classes.textColor}
                            underline="none"
                        >
                            Mint an item
                        </Link>
                        <Link
                            component="button"
                            variant="body2"
                            className={classes.textColor}
                            underline="none"
                        >
                            Vote/DAO
                        </Link>
                        <IconButton
                            size="large"
                            aria-label="show 4 new mails"
                            color="inherit"
                        >
                            <Link
                                component="button"
                                variant="body2"
                                className={classes.textColor}
                                underline="none"
                            >
                                My Account
                            </Link>
                            <img src={downArrow} alt="down arrow"/>
                        </IconButton>
                        <IconButton
                            size="large"
                            aria-label="show 4 new mails"
                            color="inherit"
                        >
                            <Link
                                component="button"
                                variant="body2"
                                className={classes.textColor}
                                underline="none"
                            >
                                Ethereum
                            </Link>
                            <img src={solidDownArrow} alt="down arrow"/>
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}