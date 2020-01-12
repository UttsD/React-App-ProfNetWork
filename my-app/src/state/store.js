import conversationsReducer from './conversations-reducer';
import blogReducer from './blog-reducer';



let store = {
    _state: {
        conversations: {
            messages: [
                {id: 1, message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit1"},
                {id: 2, message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit2"},
                {id: 3, message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit3"},
                {id: 4, message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit4"},
                {id: 5, message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit5"},
                {id: 6, message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit6"}
            ],
            dialogs: [
                {id: 1, name: "Johs Vashington"},
                {id: 2, name: "Jack Vorobey"},
                {id: 3, name: "Emma Watson"},
                {id: 4, name: "Carl First"},
                {id: 5, name: "Carl Second"},
                {id: 6, name: "Carl Third"}
            ],
            newMessageText: 'Введите сообщение'
        },
        blog: {
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
    },
    _reRender() {console.log("state is change")},
    
    getState() {return this._state},
    subscriber(observer) {
        this._reRender = observer;
    },
    

    dispatch(action) {
        this._state.conversations = conversationsReducer(this._state.conversations, action);
        this._state.blog = blogReducer(this._state.blog, action);
        
        this._reRender(this._state);
            
        }
        
    }











export default store;