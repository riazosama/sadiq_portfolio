import React, {Component} from 'react';
import {withStyles} from '@material-ui/styles';
import {NavLink} from "react-router-dom";
import sizes from './../styles/sizes';
import Config from "../config";

const styles = {
    Header: {
        display: 'flex',
        flexDirection: 'column',
        padding: '40px 20px 40px',
        borderBottom: '1px solid #eee',

        [sizes.up('xs')]: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '40px 20px 0',
        },

        [sizes.up('lg')]: {
            padding: '60px 160px 0'
        }
    },
    HeaderName: {
        fontSize: '24px',
        marginBottom: '20px',
        marginTop: 'unset',
        cursor: 'pointer'
    },
    Pages: {
        display: 'flex',
        flexDirection: 'row',
        fontSize: '16px',

        '& a': {
            paddingRight: '10px'
        },

        [sizes.up('xs')]: {
            marginBottom: '20px',
        }
    },
    ContactMe: {
        display: 'none',
        color: 'black',
        cursor: 'pointer',

        [sizes.up('sm')]: {
            display: 'block',
            marginBottom: '20px',
        }
    }
};

class Header extends Component {
    render() {

        const {classes} = this.props;

        return (
            <div className={classes.Header}>
                <h1 className={classes.HeaderName}>{Config.siteName}</h1>

                <div className={classes.Pages}>
                    <NavLink exact={true} to='/' activeClassName={'active'}>Work</NavLink>
                    <NavLink exact={true} to='/profile' activeClassName={'active'}>Profile</NavLink>
                </div>

                <a href={`mailto:${Config.mail}`} className={classes.ContactMe}>
                    Contact Me
                </a>
            </div>
        )
    }
}

export default withStyles(styles)(Header);
