import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import AlbumCard from '../components/ui_widgets/AlbumCard';
import PostCard from '../components/ui_widgets/PostCard';
import { connect } from 'react-redux';
import {loadContentView} from '../actions';

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
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: '32px',
  },
};

class ContentView extends Component {

    componentWillMount() {
        this.props.dispatch(loadContentView());
    }

    renderPosts() {
        const {posts} = this.props;
        return posts.postList.map((each) => {
            return (
                <Grid item xs={3} key={each.id}>
                    <PostCard
                        title={each.title}
                        id={each.id}
                        userId={each.userId}
                        body={each.body}
                    />
                </Grid>
            );
        });
    }

    renderAlbums() {
        const {albums} = this.props;
        return albums.albumList.map((each) => {
            return (
                <Grid item xs={3} key={each.id}>
                    <AlbumCard
                        title={each.title}
                        id={each.id}
                        userId={each.userId}
                    />
                </Grid>
            );
        });
    }

    render() {
        const { classes, posts, albums } = this.props;
        return (
            <div className={classes.root}>
              Content
              <Grid container className={classes.root} spacing={16} alignItems="stretch">
                  {posts.hasFetched ? this.renderPosts() : null}
                  {albums.hasFetched ? this.renderAlbums() : null}
              </Grid>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const {posts, albums} = state;

    return {
        posts: posts,
        albums: albums
    }
}

export default connect(mapStateToProps)(withStyles(styles)(ContentView));
