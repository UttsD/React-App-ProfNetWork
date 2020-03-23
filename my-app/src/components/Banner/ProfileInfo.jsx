import React from 'react';
import s from './Banner.module.css'


class ProfileInfo extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }
    activateEditMode = () => {
        this.setState(
            {
                editMode: true
            }
        )
    }
    deActivateEditMode = () => {
        this.setState(
            {
                editMode: false
            }
        )
        this.props.updateStatus(this.state.status)
    }
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        });
    }

    componentDidUpdate(prevProps){
        if(prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
       
        return (
            <div className={s.user}>
                <h2 >{this.props.username}</h2>
                {!this.state.editMode &&
                    <h5 onDoubleClick = {this.activateEditMode}>{this.props.status || "Что у вас нового?"}</h5>

                }
                {this.state.editMode &&
                    <input onChange = {this.onStatusChange} autoFocus={true} 
                    onBlur = {this.deActivateEditMode} 
                    value={this.state.status} />
                }

            </div>

        );
    }


};

export default ProfileInfo;