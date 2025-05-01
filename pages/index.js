import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { useState, useEffect } from 'react'

export default function Home() {
  const [activeTab, setActiveTab] = useState('Inicio');
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    setMenuOpen(false);
  };

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700&family=Libre+Baskerville:ital,wght@0,400;1,400&display=swap" rel="stylesheet" />
      </Head>

      {/* Top Border */}
      <hr className={styles.border} />

      {/* Logo + Title + Subtitle */}
      <div className={styles.container}>
        <div className={styles.logo}>
          <img 
            src="https://abogadosfriedman.wordpress.com/wp-content/uploads/2017/11/cropped-234-e15103503122801.jpg" 
            alt="Friedman Attorneys Logo"
            width="442"
            height="442"
            style={{ maxWidth: '100%', height: 'auto', color: '#000' }}
          />
        </div>
        <h1 className={styles.title}>Abogados Friedman</h1>
        <p className={styles.subtitle}>30 Años de Experiencia en Defensa Criminal</p>
      </div>

      {/* Navbar Section */}
      <div className={styles.navWrapper}>
        {!isDesktop && (
          <button className={styles.menuButton} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? '✖ MENÚ' : '☰ MENÚ'}
          </button>
        )}
        {(isDesktop || menuOpen) && (
          <nav className={`${styles.navbar} ${menuOpen ? styles.mobileMenu : ''}`}>
            <button className={`${styles.tabButton} ${activeTab === 'Inicio' ? styles.active : ''}`} onClick={() => handleTabClick('Inicio')}>Inicio</button>
            <button className={`${styles.tabButton} ${activeTab === 'Consultas' ? styles.active : ''}`} onClick={() => handleTabClick('Consultas')}>Consultas</button>
            <button className={`${styles.tabButton} ${activeTab === 'Testimonios' ? styles.active : ''}`} onClick={() => handleTabClick('Testimonios')}>Testimonios</button>
            <button className={`${styles.tabButton} ${activeTab === 'Sobre Nosotros' ? styles.active : ''}`} onClick={() => handleTabClick('Sobre Nosotros')}>Sobre Nosotros</button>
            <button className={`${styles.tabButton} ${activeTab === 'Derechos Miranda' ? styles.active : ''}`} onClick={() => handleTabClick('Derechos Miranda')}>Derechos Miranda</button>
          </nav>
        )}
      </div>

      {/* Tab Content */}
      <div className={styles.tabContent}>

        {/* INICIO TAB */}
        {activeTab === 'Inicio' && (
          <div className={styles.inicioSection}>
            {/* Background Image Section */}
            <div className={styles.backgroundImage}>
              <div className={styles.overlay}>
                <hr className={`${styles.hrLine} ${styles.hrPrimary}`} />
                <hr className={`${styles.hrLine} ${styles.hrSecondary}`} />
                <h2 className={styles.mainHeading}>¿NECESITAS SACAR A ALGUIEN DE LA CÁRCEL?</h2>
                <p className={styles.subHeading}>
                  Consulta GRATIS y <br/> CONFIDENCIAL. Vamos a su casa. Llámenos hoy al <br/>
                  (323) 251-1856 * (714) 739-1444
                </p>
                <button className={styles.contactButton}>CONTÁCTENOS</button>
              </div>
            </div>

            {/* Gray Section */}
            <div className={styles.consultasSection}>
              <div className={styles.consultasContainer}>
                <h1 className={styles.consultasMainHeading}>Somos expertos en defensa legal a precios razonables!</h1>
                <h2 className={styles.consultasSubHeading}>Reciba ayuda legal sin importar su estado migratorio</h2>
                <p className={styles.consultasIntro}>Nuestras áreas de práctica son...</p>
                <ul className={styles.consultasList}>
                  <li>DUI</li><li>Drogas</li><li>Fraude</li><li>Armas</li><li>Delitos Sexuales</li><li>Violencia Domestica</li>
                  <li>Ordenes de Arresto</li><li>Acoso de Menores</li><li>Asalto, Robo Y Homicidios</li><li>Limpie su récord criminal</li>
                  <li>Retire su orden de arresto</li><li>Incumplimiento del régimen probatorio</li><li>Accidentes de auto, motocicletas, camiones de carga</li>
                </ul>
                <h2 className={styles.consultasOutro}>HACEMOS CASOS FEDERALES Y ESTATALES EN TODO EL PAÍS</h2>
                <h2 className={styles.consultasFinal}><u>CULPABLE O INOCENTE!</u></h2>

                {/* Social Share Section (Optional Later) */}
              </div>
            </div>
          </div>
        )}
        {activeTab === 'Consultas' && (
          <div className={styles.consultasSection}>
            <div className={styles.consultasContainer}>
              <h1 className={styles.consultasMainHeading}>Consulta Gratuita</h1>
              <form
  className={styles.contactForm}
  action="https://formsubmit.co/sai337070@gmail.com"
  method="POST"
>
  <label className={styles.label}>
    Nombre (obligatorio)
    <input type="text" name="nombre" required className={styles.input} />
  </label>

  <label className={styles.label}>
    Telefono (obligatorio)
    <input type="text" name="telefono" required className={styles.input} />
  </label>

  <label className={styles.label}>
    Direccion (obligatorio)
    <input type="text" name="direccion" required className={styles.input} />
  </label>

  <label className={styles.label}>
    Mensage/Pregunta
    <textarea name="mensaje" rows="6" className={styles.textarea}></textarea>
  </label>

  {/* Optional: Add redirect or spam protection */}
  <input type="hidden" name="_captcha" value="false" />
  <input type="hidden" name="_next" value="https://yourdomain.com/gracias" />

  <button type="submit" className={styles.submitButton}>Enviar</button>
</form>

      {/* Final group photo */}
      <div className={styles.groupPhotoWrapper}>
        <img src="https://abogadosfriedman.wordpress.com/wp-content/uploads/2017/11/125-e1512617272918.jpg" alt="Friedman Attorneys Group" className={styles.groupPhoto} />
      </div>

            </div>
          </div>
        )}
        {/* TESTIMONIOS TAB */}
        {activeTab === 'Testimonios' && (
          <div className={styles.consultasSection}>
            <div className={styles.consultasContainer}>
              <h1 className={styles.consultasMainHeading}>TESTIMONIOS</h1>
              <h2 className={styles.testimoniosSubHeading} style={{textAlign: 'center'}}>Testimonios de nuestros clientes</h2>

              
      {/* Testimonial 1 */}
      <div className={styles.testimonialBlock}>
        <img src="/girl.png" alt="Client Avatar" className={styles.avatar} />
        <p className={styles.testimonialText}>
          «MI PAPA FUE ARRESTADO EN MISSISIPI POR POSESIÓN DE DROGAS Y UNA PISTOLA.  
          NOSOTROS CONTRATAMOS A LOS ABOGADOS FRIEDMAN Y ELLOS NOS AYUDARON.  
          MI PAPA ESTABA MIRANDO MÁS DE 20 AÑOS Y AL FINAL DE TODO ESTE PROBLEMA  
          ELLOS LE CONSIGUIERON SOLO 5 AÑOS...  
          SI TE AYUDAN NO TE MIENTEN TE DICEN LA VERDAD...  
          YO SE LOS AGRADEZCO MUCHO.»
        </p>
        <p className={styles.clientName}>Y,B</p>
      </div>

      {/* Testimonial 2 */}
      <div className={styles.testimonialBlock}>
        <img src="/boy.png" alt="Client Avatar" className={styles.avatar} />
        <p className={styles.testimonialText}>
          «A MI HERMANO LA ESPOSA LO METIÓ A LA CÁRCEL POR VIOLENCIA DOMÉSTICA.  
          LOS ABOGADOS FRIEDMAN LO REPRESENTARON EN CORTE Y NO TUVO QUE HACER  
          NI UN DÍA DE CÁRCEL, EL CASO LO HICIERON DISMINUIR POR FALTA DE PRUEBAS.»
        </p>
        <p className={styles.clientName}>A.O</p>
      </div>

      {/* Testimonial 3 */}
      <div className={styles.testimonialBlock}>
        <img src="/girl.png" alt="Client Avatar" className={styles.avatar} />
        <p className={styles.testimonialText}>
          «A MI ESPOSO LO ACUSÓ MI VECINA POR HABERLA GOLPEADO.  
          ÉL ESTABA BORRACHO Y TODO PASÓ EN UNA FIESTA. A ÉL LO ARRESTARON.  
          YO LLAMÉ A ABOGADOS FRIEDMAN Y ELLOS ME AYUDARON CON LA FIANZA.  
          FUERON A CORTE CON ÉL Y LE QUERÍAN DAR 1 AÑO DE CÁRCEL,  
          AL FINAL DE VARIAS CORTES SOLO TERMINÓ CON 10 DÍAS DE SERVICIO A LA COMUNIDAD  
          Y UNA MULTA NO CÁRCEL... GRACIAS ABOGADOS FRIEDMAN.»
        </p>
        <p className={styles.clientName}>P.L</p>
      </div>

      {/* Testimonial 4 */}
      <div className={styles.testimonialBlock}>
        <img src="/boy.png" alt="Client Avatar" className={styles.avatar} />
        <p className={styles.testimonialText}>
          «MI HERMANO TUVO UN CASO DE VIOLENCIA DOMÉSTICA.  
          LOS ABOGADOS FRIEDMAN LO AYUDARON PARA QUE SU CASO FUERA REDUCIDO  
          Y NO TUVO QUE HACER TIEMPO DE CÁRCEL.»
        </p>
        <p className={styles.clientName}>M.A</p>
      </div>

      {/* Testimonial 5 */}
      <div className={styles.testimonialBlock}>
        <img src="/girl.png" alt="Client Avatar" className={styles.avatar} />
        <p className={styles.testimonialText}>
          «MI PRIMO FUE ARRESTADO POR ARMAS Y DROGAS.  
          NOSOTROS CONTRATAMOS A LOS ABOGADOS FRIEDMAN Y LE AYUDARON.  
          EN LUGAR DE ESTAR EN PRISIÓN MUCHOS AÑOS,  
          SOLAMENTE TUVO QUE HACER PROGRAMAS.»
        </p>
        <p className={styles.clientName}>C.B</p>
      </div>

      {/* Testimonial 6 */}
      <div className={styles.testimonialBlock}>
        <img src="/boy.png" alt="Client Avatar" className={styles.avatar} />
        <p className={styles.testimonialText}>
          «MI AMIGO TENÍA UNA ORDEN DE ARRESTO Y LOS ABOGADOS FRIEDMAN LE AYUDARON  
          A QUITAR SU ORDEN Y NO FUE ARRESTADO.»
        </p>
        <p className={styles.clientName}>R.R</p>
      </div>

      {/* Testimonial 7 */}
      <div className={styles.testimonialBlock}>
        <img src="/girl.png" alt="Client Avatar" className={styles.avatar} />
        <p className={styles.testimonialText}>
          «MI HIJA FUE ARRESTADA POR PELEA EN UNA FIESTA.  
          LOS ABOGADOS FRIEDMAN LE AYUDARON A QUE NO FUERA A PRISIÓN Y A TENER SOLO MULTA.»
        </p>
        <p className={styles.clientName}>S.J</p>
      </div>

      {/* Final group photo */}
      <div className={styles.groupPhotoWrapper}>
        <img src="/image.png" alt="Friedman Attorneys Group" className={styles.groupPhoto} />
      </div>

            </div>
          </div>
        )}
      {activeTab === 'Sobre Nosotros' && (
  <div className={styles.consultasSection}>
    <div className={styles.consultasContainer}>
      <h1 className={styles.testimoniosMainHeading}>Somos expertos en Defensa Legal</h1>

      <h2 className={styles.testimoniosSubHeading}>
      Las Oficinas de Friedman y Asociados
      </h2>

      <div className={styles.sobreResponsiveBlock}>
  <div className={styles.sobreImageWrapper}>
    <img
      src="https://i0.wp.com/kodeforest.net/wp-demo/lawyer/wp-content/uploads/2015/12/mission.png"
      alt="Lady Justice"
      className={styles.sobreImage}
    />
  </div>
  <div className={styles.sobreTextBlock}>
    <p className={styles.sobreText} style={{textAlign: 'justify'}}>
      Los Abogados Friedman tienen más de 23 años de experiencia defendiendo a los latinos.
      Si usted ha tenido algún problema legal y no sabe a quién pedir ayuda, no dude en llamarnos.
      Nuestra meta es defender sus derechos. ¡No importa si usted es o no es culpable!
      Llámenos hoy para tomar ventaja de nuestra consulta gratuita.
      Ofrecemos nuestros servicios a los condados de Los Ángeles y Orange y también a las ciudades cercanas.
    </p>
  </div>
</div>

      <h2 className={styles.testimoniosSubHeading}>Qué hacemos …</h2>
      <div className={styles.sobreContentBlock}>
        <div className={styles.sobreText}>
          <p className={styles.sobreText} style={{textAlign: 'justify'}}>
            Analizamos su caso cuidadosamente para obtener el mejor resultado para usted y su familia.
            Las Oficinas de Friedman Y Asociados pelearán junto usted para proteger sus derechos.
            Si usted fue arrestado, es importante saber las condiciones de su arresto, la acusación y estar en constante comunicación con nosotros.
          </p>
        </div>
        <img src="https://abogadosfriedman.wordpress.com/wp-content/uploads/2017/12/hola.jpg" alt="Building" className={styles.sobreImage} style={{width: '327px'}} />
      </div>

      <h2 className={styles.testimoniosSubHeading}>A Quiénes Ayudamos</h2>
      <p className={styles.sobreText} style={{textAlign: 'justify'}}>
        No importa si usted es o no es culpable, nuestro equipo siempre está a su lado para pelear por sus derechos.
        Cada caso es diferente y por esta razón los Abogados Friedman ofrecen consultas gratuitas, no dude en comunicarse con nosotros.
        Hoy en día, si usted es arrestado por crimen, esto puede tener un gran impacto negativo en su futuro, el de su familia y amistades.
        Si usted ha sido arrestado o está en investigación, contáctenos inmediatamente.
      </p>
    </div>
  </div>
)} 
      {activeTab === 'Derechos Miranda' && (
  <div className={styles.consultasSection}>
    <div className={styles.consultasContainer}>
      <h1 className={styles.testimoniosMainHeading}>Derechos Miranda</h1>
      <ol className={styles.consultasList}>
        <li>Usted tiene derecho a guardar silencio</li>
        <li>Cualquier cosa que usted diga podría usarse en su contra en la corte</li>
        <li>Usted tiene derecho a tener a un abogado presente antes y durante cualquier interrogatorio</li>
        <li>Si usted no tiene medios para contratar a un abogado , y si usted desea se nombrara a un abogado para que lo represente,libre de cargo,antes de cualquier interrogatorio</li>
      </ol>

      <h2 className={styles.testimoniosSubHeading} style={{color:'red', fontSize:'40px', textAlign:'center', padding:'20px'}}>NO HABLE HASTA QUE SU ABOGADO ESTE PRESENTE</h2>
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <img src="https://i0.wp.com/abogadosfriedman.wordpress.com/wp-content/uploads/2017/12/a.jpg?w=242&h=242&crop=1&ssl=1" alt="associatedMedia" className={styles.sobreImage} style={{width: '224px',height:'224px', borderRadius: '50%', padding:'5px'}} />
        <img src="https://i0.wp.com/abogadosfriedman.wordpress.com/wp-content/uploads/2017/12/1414.jpg?w=242&h=242&crop=1&ssl=1" alt="associatedMedia" className={styles.sobreImage} style={{width: '224px',height:'224px', borderRadius: '50%', padding:'5px'}} />
        <img src="https://i0.wp.com/abogadosfriedman.wordpress.com/wp-content/uploads/2017/12/3101.jpg?w=242&h=242&crop=1&ssl=1" alt="associatedMedia" className={styles.sobreImage} style={{width: '224px',height:'224px', borderRadius: '50%', padding:'5px'}} />
      </div>
    </div>
  </div>
)} 
      </div>
    </>
  )
}