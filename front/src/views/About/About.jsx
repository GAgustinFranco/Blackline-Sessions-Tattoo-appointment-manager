import styles from "./About.module.css"; 

const About = () => {
    return (
        <>
            <main>
                <section className={styles.section}>
                    <div className={styles.container}>
                        <h2 className={styles.title}>Nosotros</h2>
                        <p className={styles.subtitle}>
                        Una crew de artistas que lleva el blackwork al límite. Cada uno con su trazo, su visión y su ruido.
                        </p>

                        <div className={styles.cardContainer}>
                            <div className={styles.card}>
                                <img src="/img/hex.jfif" alt="HEX" className={styles.image} />
                                <h3 className={styles.name}>HEX</h3>
                                <p className={styles.description}>
                                Trazos finos, climas oscuros y una obsesión por el detalle ritual.
                                </p>
                            </div>

                            <div className={styles.card}>
                                <img src="/img/nina void.jfif" alt="NINA VOID" className={styles.image} />
                                <h3 className={styles.name}>NINA VOID</h3>
                                <p className={styles.description}>
                                Blackwork visceral con estética industrial y una vibra post-apocalíptica.
                                </p>
                            </div>

                            <div className={styles.card}>
                                <img src="/img/krow.jfif" alt="KROW" className={styles.image} />
                                <h3 className={styles.name}>KROW</h3>
                                <p className={styles.description}>
                                Composición geométrica agresiva. Piezas grandes, silencios negros.
                                </p>
                            </div>

                            <div className={styles.card}>
                                <img src="/img/lynx.jfif" alt="LYNX" className={styles.image} />
                                <h3 className={styles.name}>LYNX</h3>
                                <p className={styles.description}>
                                Precisión quirúrgica y diseño conceptual. Cada línea está pensada para quedarse.
                                </p>
                            </div>

                            <div className={styles.card}>
                                <img src="/img/darka.jfif" alt="DARKA" className={styles.image} />
                                <h3 className={styles.name}>DARKA</h3>
                                <p className={styles.description}>
                                Composición oscura, textura sucia. Pura expresión urbana sobre la piel.    
                                </p>
                            </div>

                            <div className={styles.card}>
                                <img src="/img/sever.jfif" alt="SEVER" className={styles.image} />
                                <h3 className={styles.name}>SEVER</h3>
                                <p className={styles.description}>
                                Inspiración biomecánica con una ejecución sólida y brutalista.
                                </p>
                            </div>

                            <div className={styles.card}>
                                <img src="/img/raz.jfif" alt="RAZ" className={styles.image} />
                                <h3 className={styles.name}>RAZ</h3>
                                <p className={styles.description}>
                                Líneas fuertes, actitud sin filtro. Blackwork con peso emocional.
                                </p>
                            </div>

                            <div className={styles.card}>
                                <img src="/img/onyx.jfif" alt="ONYX" className={styles.image} />
                                <h3 className={styles.name}>ONYX</h3>
                                <p className={styles.description}>
                                Minimalismo agresivo y narrativa visual. Diseños que marcan identidad.
                                </p>
                            </div>

                            <div className={styles.card}>
                                <img src="/img/ash.jfif" alt="ASH" className={styles.image} />
                                <h3 className={styles.name}>ASH</h3>
                                <p className={styles.description}>
                                Estilo experimental con símbolos, sombras y silencios. Tatuar como forma de lenguaje.
                                </p>
                            </div>
                        </div>
                    </div>
                    
                </section>
            </main>
            <footer>
                <div className={styles.imgContainer1}>
                        <img className={styles.imgContacts} src="https://img.icons8.com/ios7/512/FFFFFF/instagram-new--v2.png" alt="instagram" />
                        <p>blackline_sessions</p>
                </div >
                <div className={styles.imgContainer2}>
                    <img className={styles.imgContacts} src="https://img.icons8.com/ios7/600/FFFFFF/whatsapp.png" alt="whatsapp" />
                    <p>342-5645091</p>
                </div>
            </footer>
        </>
    )
}

export default About;