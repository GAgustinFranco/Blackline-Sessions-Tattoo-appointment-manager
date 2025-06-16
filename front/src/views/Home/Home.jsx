import styles from "./Home.module.css";

const Home = () => {
    return (
        <>  
            <div className={styles.container}>
                <p className={styles.p1}>Viví la experiencia BlackLine: tatuajes en estilo blackwork, bandas locales de nu-metal sonando en vivo
                    y una atmósfera que no vas a encontrar en ningún otro estudio.</p>
                <p className={styles.p2}>Turnos limitados. Redefiní lo que significa tatuarse.</p>
                <button className={styles.buttonReserve}>Reservá tu turno</button>
            </div>
            <video autoPlay muted loop className={styles.videoBackground}>
                <source src="/videos/4125749-uhd_4096_2160_25fps.mp4" type="video/mp4" />
                Tu navegador no soporta videos HTML5
            </video>
        </>
    )
}

export default Home;