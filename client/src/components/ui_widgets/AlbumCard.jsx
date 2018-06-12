import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grow from '@material-ui/core/Grow';
import {addUserPreference} from '../../actions';

const styles = {
    card: {
      minWidth: 275,
      marginTop: '16px'
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

class AlbumCard extends Component {

    render() {
        const {
            classes,
            id,
            title,
            userId,
            dispatch,
            clickable,
            preferenceText
        } = this.props;

        return (
            <Grow in={true}>
                <div>
                    {!clickable ? <h5>{preferenceText}</h5> : null}
                    <Card
                        className={classes.card}
                        id={id}
                        style={clickable ? {cursor: 'pointer'} : null}
                        onClick={() => {
                            if(!clickable ) {return null;}
                            const info = {
                                infoType: 'ALBUM',
                                title: title,
                                userId: userId,
                                id: id
                            }
                            dispatch(addUserPreference(info));
                        }}
                    >
                        <CardContent>
                            <Typography variant="headline" component="h2">
                                {title}
                            </Typography>
                            <Typography component="p">
                                {'User Id: ' + userId}
                            </Typography>
                            <Typography component="p">
                                {'Id: ' + id}
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
            </Grow>
        );
    }
}

export default withStyles(styles)(AlbumCard);
