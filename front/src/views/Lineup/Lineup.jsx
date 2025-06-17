import styles from "./Lineup.module.css";

const Lineup = () => {
    return (
        <>
            <section className={styles.lineupSection}>
                <h2 className={styles.title}>Lineup</h2>
                <p className={styles.subtitle}>Bandas locales en vivo cada semana. Esto no es música de fondo, es parte del ritual.</p>
                
                <div className={styles.grid}>
                    <div className={styles.flyer}>
                        <h3 className={styles.band}>RAGE & INK</h3>
                        <img className={styles.img1} src="https://images.pexels.com/photos/736355/pexels-photo-736355.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        <p className={styles.date}>Jueves 20/06 · 20hs</p>
                        <p className={styles.genre}>Nu-metal crudo desde La Plata</p>
                    </div>
                    <div className={styles.flyer}>
                        <h3 className={styles.band}>CENIZAS DEL SUR</h3>
                        <img className={styles.img2} src="https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        <p className={styles.date}>Viernes 21/06 · 21hs</p>
                        <p className={styles.genre}>Fusión hardcore con rap industrial</p>
                    </div>
                    <div className={styles.flyer}>
                        <h3 className={styles.band}>NEON KHAOS</h3>
                        <img className={styles.img3} src="https://images.pexels.com/photos/2417726/pexels-photo-2417726.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        <p className={styles.date}>Sábado 22/06 · 22hs</p>
                        <p className={styles.genre}>Electro metalcore under del oeste</p>
                    </div>
                </div>
                </section>
        </>
    )
}

export default Lineup;