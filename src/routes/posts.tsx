import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { CreatePostForm } from '../components/CreatePostForm';
import { PostList } from '../components/PostList';
import { CreatePostRequest } from '../modules/posts/api';
import { createPost, loadPosts } from '../modules/posts/services';
import { Post } from '../modules/posts/types';
import { StoreState } from '../store';

interface PostsProps {
    list: Post[];
    onLoadPosts: () => void;
    onCreatePost: (post: CreatePostRequest) => void;
}

export const PostsContainer: React.FC<PostsProps> = ({ onLoadPosts, onCreatePost, list }) => {
    useEffect(() => {
        onLoadPosts();
    }, []);

    const onCreate = (post: CreatePostRequest) => {
        onCreatePost(post);
    };

    return (
        <>
            <CreatePostForm onCreate={onCreate} />
            <PostList list={list} />
        </>
    );
};

// state = store.getState() -> mapStateToProps(state)
const mapStateToProps = (state: StoreState) => ({
    list: state.posts.list,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
    bindActionCreators({
        onLoadPosts: loadPosts,
        onCreatePost: createPost,
    }, dispatch);

// bindActionCreators({ createPost }, dispatch) -> ({
//     createPost: (...args) => {
//         dispatch(createPost(...args));
//     },
// });

export const Posts = connect(mapStateToProps, mapDispatchToProps)(PostsContainer);
