import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const styles = {
    card: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      marginBottom: 16,
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    }
};

class PostCard extends Component {

    render() {
        const { classes, userIsLogged, userName } = this.props;
        
        return (
            <div>
                <Card className={classes.card} id={this.props.id}>
                    <CardContent>
                        <Typography variant="headline" component="h2">
                            {this.props.title}
                        </Typography>
                        <Typography component="p">
                            {'User Id: ' + this.props.userId}
                        </Typography>
                        <Typography component="p">
                            {'Id: ' + this.props.id}
                        </Typography>
                        <Typography component="p">
                            {this.props.body}
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        );
    }
}

export default withStyles(styles)(PostCard);
