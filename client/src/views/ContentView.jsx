import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import AlbumCard from '../components/ui_widgets/AlbumCard';
import PostCard from '../components/ui_widgets/PostCard';
import { connect } from 'react-redux';
import {loadContentView} from '../actions';

const styles = {
  root: {
    flexGrow: 1,
    padding: '16px'
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  paper: {
    height: 140,
    width: 100,
    marginTop: '16px'
  },
  control: {
    padding: '32px',
  },
};

class ContentView extends Component {

    componentWillMount() {
        this.props.dispatch(loadContentView());
    }

    renderUserPreferences() {
        const {preferences} = this.props;

        if(preferences.preferenceList.length === 0) {
            return (
                <h6>
                    {'Select from the posts and albums lists.'}
                </h6>
            );
        }

        return preferences.preferenceList.map((preference, i) => {
            switch (preference.infoType) {
                case 'POST':
                    return (
                        <PostCard
                            key={i}
                            title={preference.title}
                            id={preference.id}
                            userId={preference.userId}
                            body={preference.body}
                            clickable={false}
                            preferenceText={'Preference #' + (i + 1)}
                        />
                    );
                case 'ALBUM':
                    return (
                        <AlbumCard
                            title={preference.title}
                            id={preference.id}
                            userId={preference.userId}
                            key={i}
                            clickable={false}
                            preferenceText={'Preference #' + (i + 1)}
                        />
                    );
                default:
                    return null;
            }
        });
    }

    renderPosts() {
        const {posts, dispatch} = this.props;
        if(!posts.hasFetched || posts.isFetching) {
            return <CircularProgress color="secondary" />;
        }

        return posts.postList.map((each, i) => {
            return (
                <PostCard
                    title={each.title}
                    id={each.id}
                    userId={each.userId}
                    body={each.body}
                    key={i}
                    dispatch={dispatch}
                    clickable={true}
                />
            );
        });
    }

    renderAlbums() {
        const {albums, dispatch} = this.props;

        if(!albums.hasFetched || albums.isFetching) {
            return <CircularProgress color="secondary" />;
        }

        return albums.albumList.map((each, i) => {
            return (
                <AlbumCard
                    title={each.title}
                    id={each.id}
                    userId={each.userId}
                    key={i}
                    dispatch={dispatch}
                    clickable={true}
                />
            );
        });
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <Grid container className={classes.root} spacing={16} alignItems="stretch">
                    <Grid item xs={4}>
                        <h2>{'User Preferences'}</h2>
                        {this.renderUserPreferences()}
                    </Grid>
                    <Grid item xs={4}>
                        <h2>{'Posts'}</h2>
                        {this.renderPosts()}
                    </Grid>
                    <Grid item xs={4}>
                        <h2>{'Albums'}</h2>
                        {this.renderAlbums()}
                    </Grid>
                </Grid>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const {posts, albums, preferences} = state;

    return {
        posts: posts,
        albums: albums,
        preferences: preferences
    }
}

export default connect(mapStateToProps)(withStyles(styles)(ContentView));
