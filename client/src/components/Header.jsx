import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  }
};

class Header extends Component {

    render() {
        const { classes, userIsLogged, userName } = this.props;
        return (
            <div className={classes.root}>
              <AppBar position="static">
                <Toolbar>
                  <Typography variant="title" color="inherit" className={classes.flex}>
                      Test Case
                  </Typography>
                  {
                      userIsLogged ? (
                          userName
                      ) : null
                  }
                </Toolbar>
              </AppBar>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const {userInfo} = state;

    return {
        userName: userInfo.userName,
        userIsLogged: userInfo.isLoggedIn
    }
}

export default connect(mapStateToProps)(withStyles(styles)(Header));
