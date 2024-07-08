
import React from 'react';
import styles from './page.module.css';

export default function Home() {


  return (
    <div className={styles.page}>
      <div className={styles.logo}>
        <img src="/logo.png" alt="Logo Oftalmopampa" />
      </div>

      <div className={styles.title}>
        <div className={styles.h1}>
          Bem vindo à <strong>OftalmoPampa</strong>
        </div>

        <div className={styles.h1}>
          É um prazer te ter aqui!
        </div>
      </div>

      <div className={styles.video}>
        <video width="300" height="auto" controls autoPlay>
          <source src="/videoWifi.mp4" type="video/mp4" />
        </video>
      </div>

      <div className={styles.h3}>
        <p>Assista o vídeo para ser conectado...</p>
     </div>
    </div>
  );
}
