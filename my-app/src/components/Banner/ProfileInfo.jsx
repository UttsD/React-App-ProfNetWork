import React, { useState } from 'react';
import s from './Banner.module.css'
import { useEffect } from 'react';


const ProfileInfoHooks = ({status, username, updateStatus}) => {

    let [editMode, setEditMode] = useState(false);
    let [myStatus, setStatus] = useState(status);

    useEffect(() => {
        setStatus(status);
    }, [status])

    const activateEditMode = () => {
        setEditMode(true);
    }
    const deActivateEditMode = () => {
        setEditMode(false);
        updateStatus(myStatus)
    }
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }


    return (
        <div className={s.user}>
            <h2 >{username}</h2>
            {!editMode &&
                <h5 onDoubleClick={activateEditMode}>{status || "Что у вас нового?"}</h5>

            }
            {editMode &&
                <input onChange={onStatusChange} autoFocus={true}
                    onBlur={deActivateEditMode}
                    value={myStatus} />
            }

        </div>

    );



};
// class ProfileInfo extends React.Component {
//     state = {
//         editMode: false,
//         status: this.props.status
//     }
//     
//     
//    

//     componentDidUpdate(prevProps){
//         if(prevProps.status !== this.props.status){
//             this.setState({
//                 status: this.props.status
//             })
//         }
//     }

//     render() {

//         return (
//             <div className={s.user}>
//                 <h2 >{this.props.username}</h2>
//                 {!this.state.editMode &&
//                     <h5 onDoubleClick = {this.activateEditMode}>{this.props.status || "Что у вас нового?"}</h5>

//                 }
//                 {this.state.editMode &&
//                     <input onChange = {this.onStatusChange} autoFocus={true} 
//                    
//                     value={this.state.status} />
//                 }

//             </div>

//         );
//     }


// };

export default ProfileInfoHooks;