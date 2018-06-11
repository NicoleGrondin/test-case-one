import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import LoginModal from '../components/LoginModal';
const imgUrl = require('../assets/logo-no-bg.png');
require('../styles/login-view.css');

const styles = {
    root: {
        flexGrow: 1,
    },
    flex: {
        flex: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    }
};

class LoginView extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            open: false,
        };
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleOpen() {
        this.setState({ open: true });
    }

    handleClose() {
        this.setState({ open: false });
    }

    render() {
        return (
            <div className="login-view__container">
                <img
                    src={imgUrl}
                    style={{
                        width: '80px',
                        height: '80px',
                        marginBottom: '32px'
                    }}
                    alt="logo"
                />
                <Button
                    variant="contained"
                    color="primary"
                    onClick={this.handleOpen}
                >
                    {'Login'}
                </Button>
                <LoginModal
                    isOpen={this.state.open}
                    closeModal={this.handleClose}
                />
            </div>
        );
    }
}

export default withStyles(styles)(LoginView);
