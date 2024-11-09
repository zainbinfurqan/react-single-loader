import React from "react";
import styles from './index.css'


export const  ReactLoader = ({ color = 'red' }) => {
  return (
    <div className={styles.center}>  
        <div className={styles.wave} style={{background: `linear-gradient(45deg, ${color}, #fff)`}}></div>  
        <div className={styles.wave} style={{background: `linear-gradient(45deg, ${color}, #fff)`}}></div>  
        <div className={styles.wave} style={{background: `linear-gradient(45deg, ${color}, #fff)`}}></div>  
        <div className={styles.wave} style={{background: `linear-gradient(45deg, ${color}, #fff)`}}></div>  
        <div className={styles.wave} style={{background: `linear-gradient(45deg, ${color}, #fff)`}}></div>  
        <div className={styles.wave} style={{background: `linear-gradient(45deg, ${color}, #fff)`}}></div>  
        <div className={styles.wave} style={{background: `linear-gradient(45deg, ${color}, #fff)`}}></div>  
        <div className={styles.wave} style={{background: `linear-gradient(45deg, ${color}, #fff)`}}></div>  
        <div className={styles.wave} style={{background: `linear-gradient(45deg, ${color}, #fff)`}}></div>  
        <div className={styles.wave} style={{background: `linear-gradient(45deg, ${color}, #fff)`}}></div>  
    </div>  
  );
}

export default  ReactLoader;