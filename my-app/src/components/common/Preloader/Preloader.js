import React from 'react';
import preloader from '../../../assets/img/3.svg'
import styles from './Preloader.module.css';

let Preloader = (props) => {
    return <div className = {styles.preloader}>
        <img  src={preloader}/>
        </div>
}

export default Preloader;