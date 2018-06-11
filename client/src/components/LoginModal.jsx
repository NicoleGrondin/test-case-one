import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Modal from '@material-ui/core/Modal';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import { withRouter } from "react-router-dom";
import Grow from '@material-ui/core/Grow';
const imgUrl = require('../assets/logo-no-bg.png');
require('../styles/login-modal.css');

const styles = {
    paper: {
        position: 'absolute',
        width: 300,
        backgroundColor: '#FFFFFF',
        boxShadow: '0 4px 6px 0 rgba(0,0,0,.3);',
        right: '0',
        left: '0',
        margin:'auto',
        top: '20vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        color: '#FFFFFF',
        border: '2px solid #FFFFFF'
    }
};

class LoginModal extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            userName: '',
            password: ''
        };
        this.updateUserName = this.updateUserName.bind(this);
        this.updatePassword = this.updatePassword.bind(this);
    }

    updateUserName(event) {
        this.setState({ userName: event.target.value });
    }

    updatePassword(event) {
        this.setState({ password: event.target.value });
    }

    render() {
        const {closeModal, isOpen, classes} = this.props;
        return (

                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={isOpen}
                    onClose={closeModal}
                >
                    <Grow in={isOpen}>
                        <div className={classes.paper}>
                            <div className="login-modal__input-container">
                                <img
                                    src={imgUrl}
                                    style={{
                                        width: '40px',
                                        height: '40px',
                                        marginBottom: '16px'
                                    }}
                                    alt="logo"
                                />
                                <FormControl className={classes.formControl}>
                                    <InputLabel htmlFor="username">Username</InputLabel>
                                    <Input
                                        id="username"
                                        value={this.state.userName}
                                        onChange={this.updateUserName}
                                    />
                                </FormControl>
                                <FormControl
                                    className={classes.formControl}
                                    aria-describedby="name-helper-text"
                                >
                                    <InputLabel
                                        htmlFor="password"
                                    >
                                        Password
                                    </InputLabel>
                                    <Input
                                        id="password"
                                        value={this.state.password}
                                        onChange={this.updatePassword}
                                    />
                                </FormControl>
                            </div>
                            <div className="login-modal__button-container">
                                <Button
                                    variant="outlined"
                                    className={classes.button}
                                    onClick={() => {this.props.history.push("/content")}}
                                >
                                    {'Submit'}
                                </Button>
                            </div>
                        </div>
                    </Grow>
                </Modal>
        );
    }
}

export default withRouter(withStyles(styles)(LoginModal));
