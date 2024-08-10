import { useEffect, useRef, useState } from 'react';
import './Hero.css';
import { HeroProps } from './Hero.props';
import { DotLottie, DotLottieReact } from '@lottiefiles/dotlottie-react';
import hamburger from '../../../assets/hamburger_menu.json';

const Hero: React.FC<HeroProps> = ()=>{
const [width, setWidth] = useState<number>(window.innerWidth);
    const [dotlottie, setDotLottie] = useState<DotLottie|null|undefined>(null);
    const [resetAnimation, setResetAnimation] = useState<boolean>(true);
    const navRef = useRef<HTMLDivElement|null>(null);
    const dotLottieRefCallback = (dotLottie:DotLottie) => {
        setDotLottie(dotLottie)
    };
    const handleAnimation = ()=>{
        const {current} = navRef;
        if(dotlottie){
            if(resetAnimation){
                dotlottie.setSegment(0, 79);
                setResetAnimation(false);
                if(current){
                    current.style.right = '-0vw';
                }
            }else{
                dotlottie.setSegment(79, 130);
                setResetAnimation(true);
                if(current){
                    current.style.right = '-100vw';
                }
            }
            dotlottie.play();
        }
    }
    const handleWidth = ()=>{
        setWidth(window.innerWidth);
    }
    useEffect(()=>{
        window.addEventListener('resize', handleWidth);
        return ()=>window.removeEventListener('resize', handleWidth)
    },[width])
    return <header className='hero'>
    <header className='header'>
    {
        width>800?undefined:<DotLottieReact autoplay={false} loop={false} onClick={handleAnimation} dotLottieRefCallback={dotLottieRefCallback} data={hamburger} className='nav__menu--btn'/>
    }
        <nav className='nav' ref={navRef}>
            <span>bnj-rog</span>
            <ul className='nav__list'>
                <li className='nav__item'>Nosotros</li>
                <li className='nav__item'>Portafolio</li>
                <li className='nav__item'>Proceso</li>
                <li className='nav__item'>FAQ</li>
            </ul>
            <button className='nav__cta'>Servicios</button>
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
        <section className='hero__image-cont'>
            <img className='hero__image' src="https://res.cloudinary.com/dcezb5utw/image/upload/v1722969971/website/fxun8ltjezdrdfbtymzw.png" alt=""/>
        </section>
    </div>
    <img className='hero__waves' src="https://res.cloudinary.com/dcezb5utw/image/upload/v1723056137/website/bqdwngje9zpdsghvrrxa.png" alt="" />
</header>
}
export default Hero;