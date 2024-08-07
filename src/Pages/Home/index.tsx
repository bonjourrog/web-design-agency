import './Home.css';

export default function(){
    return <header className='hero'>
        <header className='header'>
            <nav className='nav'>
                <span>bnj-rog</span>
                <ul className='nav__list'>
                    <li className='nav__item'>Nosotros</li>
                    <li className='nav__item'>Portafolio</li>
                    <li className='nav__item'>Proceso</li>
                    <li className='nav__item'>FAQ</li>
                </ul>
                <button>Servicios</button>
            </nav>
        </header>
        <div>
            <section className='hero__message'>
                <h1 className='hero__headline'>Tu presencia online llevada a otro nivel</h1>
                <p className='hero__caption'>Desarrollamos sitios web que impulsan tu presencia online y hacen crecer tu negocio</p>
                <div className='hero__cta'>
                    <button className='hero__btn hero__btn--service'>Ver Servicios</button>
                    <button className='hero__btn hero__btn--contact'>Contactanos</button>
                </div>
            </section>
            <section>
                <img className='hero__image' src="https://res.cloudinary.com/dcezb5utw/image/upload/v1722969971/website/fxun8ltjezdrdfbtymzw.png" alt=""/>
            </section>
        </div>
        <img className='hero__waves' src="https://res.cloudinary.com/dcezb5utw/image/upload/v1723056137/website/bqdwngje9zpdsghvrrxa.png" alt="" />
    </header>
}