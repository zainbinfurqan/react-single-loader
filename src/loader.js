import React from "react";
import styles from  './style.module.css'


export const Loader = () => {
  return (
    <div className={styles.center}>  
        <div className={styles.wave}></div>  
        <div className={styles.wave}></div>  
        <div className={styles.wave}></div>  
        <div className={styles.wave}></div>  
        <div className={styles.wave}></div>  
        <div className={styles.wave}></div>  
        <div className={styles.wave}></div>  
        <div className={styles.wave}></div>  
        <div className={styles.wave}></div>  
        <div className={styles.wave}></div>  
    </div>  
  );
}