import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

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
  },
};

class ContentView extends Component {

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
              Content
            </div>
        );
    }
}

export default withStyles(styles)(ContentView);
