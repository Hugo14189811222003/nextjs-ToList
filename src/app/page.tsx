import './page.css'
import Image from 'next/image';

export default function Home(){
  return(
    <section className='responsive-section'>
      <nav>
        <input type="checkbox" id='check' />
        <label htmlFor="check" id='checkbtn'>
          <Image src="/Imagen/menu.png" alt='menu' width={35} height={35}></Image>
        </label>
        <Image id='logoAdidas' src="/Imagen/adidas_PNG8.png" alt='logo' width={60} height={50}></Image>
        <ul>
          <li><a href="" className='active'>Productos</a></li>
          <li><a href="">Servicios</a></li>
          <li><a href="">Sobre nosotros</a></li>
          <li><a href="">Ayuda</a></li>
        </ul>
      </nav>
    </section>
  );
}