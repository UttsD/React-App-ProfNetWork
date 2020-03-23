const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';

let initionalState = {
    posts: [
        { id: 1, name: "Post Name 3421", likes: 33 },
        { id: 2, name: "Post Name 2aaa", likes: 999 },
        { id: 3, name: "Post Name 3", likes: 999 },
        { id: 4, name: "Post Name 4", likes: 999 },
        { id: 5, name: "Post Name 5", likes: 999 },
        { id: 6, name: "Post Name 6", likes: 999 }
    ],

    newPostText : 'Заголовок поста'
}
const blogReducer = (state = initionalState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                name: state.newPostText,
                likes: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: 'Заголовок поста'
            }
            
        }
        case UPDATE_NEW_POST: {
            return {
                ...state,
                newPostText: action.text
            };
        }
        default:{
            return {...state};
        }
    }

}

export let addPostActionCreator = () =>  ({type: ADD_POST});
export let updatePostActionCreator = (text) => ({type: UPDATE_NEW_POST, text: text});

export default blogReducer;