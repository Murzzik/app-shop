import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { PostList } from '../components/PostList';
import { loadPosts } from '../modules/posts/actions';
import { Post } from '../modules/posts/types';
import { StoreState } from '../store';

interface PostsProps {
    list: Post[];
    onLoadPosts: () => void;
}

export const PostsContainer: React.FC<PostsProps> = ({ onLoadPosts, list }) => {
    useEffect(() => {
        onLoadPosts();
    }, []);

    return <PostList list={list} />;
};

// state = store.getState() -> mapStateToProps(state)
const mapStateToProps = (state: StoreState) => ({
    list: state.posts.list,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
    bindActionCreators({ onLoadPosts: loadPosts }, dispatch);

export const Posts = connect(mapStateToProps, mapDispatchToProps)(PostsContainer);
