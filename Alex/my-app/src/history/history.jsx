import style from './history.module.css';
import pic1 from '../assets/grm2.jpg';
import pic2 from '../assets/romantheater2.jpg';
import pic3 from '../assets/romantheater3.jpg';
import pic4 from '../assets/catacombs.webp';
import pic5 from '../assets/catacombs2.webp';
import pic6 from '../assets/catacombs3.webp';
import pic7 from '../assets/catacombs4.webp';
import pic8 from '../assets/alexnational.webp';
import pic9 from '../assets/alexnational2.webp';
import pic10 from '../assets/alexnational3.jpg';
import pic11 from '../assets/alexnational4.jpg';
import pic12 from '../assets/alexnational5.jpg';

import { useRef, useState } from 'react';
function History() {

  const images = [pic1, pic2, pic3];
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  const scrollToIndex = (index) => {
    const slider = sliderRef.current;
    if (slider && slider.children[index]) {
      const child = slider.children[index];
      slider.scrollTo({
        left: child.offsetLeft,
        behavior: 'smooth',
      });
      setCurrentIndex(index);
    }
  };

  const nextSlide = () => {
    if (currentIndex < images.length - 1) {
      scrollToIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      scrollToIndex(currentIndex - 1);
    }
  };


  const images2 = [pic4, pic5, pic6,pic7];
  const [currentIndex2, setCurrentIndex2] = useState(0);
  const sliderRef2 = useRef(null);
  
  const scrollToIndex2 = (index) => {
    const slider = sliderRef2.current;
    if (slider && slider.children[index]) {
      const child = slider.children[index];
      slider.scrollTo({
        left: child.offsetLeft,
        behavior: 'smooth',
      });
      setCurrentIndex2(index);
    }
  };

  const nextSlide2 = () => {
    if (currentIndex2 < images2.length - 1) {
      scrollToIndex2(currentIndex2 + 1);
    }
  };

  const prevSlide2 = () => {
    if (currentIndex2 > 0) {
      scrollToIndex2(currentIndex2 - 1);
    }
  };


  const images3 = [ pic8, pic9, pic10,pic11,pic12];
  const [currentIndex3, setCurrentIndex3] = useState(0);
  const sliderRef3 = useRef(null);
  

  const scrollToIndex3 = (index) => {
    const slider = sliderRef3.current;
    if (slider && slider.children[index]) {
      const child = slider.children[index];
      slider.scrollTo({
        left: child.offsetLeft,
        behavior: 'smooth',
      });
      setCurrentIndex3(index);
    }
  };

  const nextSlide3 = () => {
    if (currentIndex3 < images3.length - 1) {
      scrollToIndex3(currentIndex3 + 1);
    }
  };

  const prevSlide3 = () => {
    if (currentIndex3 > 0) {
      scrollToIndex3(currentIndex3 - 1);
    }
  };

  return (
    <div className={style.container}>

      <div className={style.container9}>
        <article className={style.card__article}>
          <div className={style.sliderwrapper}>
            <div className={style.slider} ref={sliderRef}>
              {images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  className={style.card__img}
                  alt={`Hotel View ${i + 1}`}
                />
              ))}
            </div>
          </div>

          <div className={style.arrow}>
            <button
              onClick={prevSlide}
              className={style.arrowleft}
              disabled={currentIndex === 0}
              style={{ opacity: currentIndex === 0 ? 0.3 : 1 }}
            >
              <span className={style.chevron}></span>
            </button>

            <button
              onClick={nextSlide}
              className={style.arrowright}
              disabled={currentIndex === images.length - 1}
              style={{ opacity: currentIndex === images.length - 1 ? 0.3 : 1 }}
            >
              <span className={style.chevron}></span>
            </button>
          </div>

          <div className={style.card__data}>
            <div className={style.flex}>
              <h2 className={style.card__title}> Ancient Roman Theater</h2>
              <span className={style.card__stars}>★★★★</span><span class={style.halfstar}>★</span>
            </div>
           
            <div className={style.overview}>
              <h2>Overview</h2>
              <h4>The Roman Theatre of Egypt is modest in size and most of the part of the structure is in ruined condition but still it is an excellent ancient structure of Roman period of Egypt. The theatre also consists of numerous galleries erected crudely.

These galleries contain rooms for more spectators along with arrangement of 700-800 marble seats around the stage. </h4>
            </div>
            <hr></hr>
            <div className={style.expect}>
              <div className={style.flex}>
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 48 48"><g fill="none" stroke-linecap="round" stroke-width="4"><path stroke="#000" stroke-linejoin="round" d="M9.00013 16.0001L34 6.00008L38.0004 16.0001"/><path fill="#2F88FF" stroke="#000" stroke-linejoin="round" d="M4 16H44V22C41 22 38 24 38 27.5C38 31 41 34 44 34V40H4V34C7.00016 34 10 32 10 28C10 24 7 22 4 22V16Z"/><path stroke="#fff" d="M17 25.3848H23"/><path stroke="#fff" d="M17 31.3848H31"/></g></svg>    <h2>Ticket(s) Price(s)</h2>          </div>
              <div className={style.nationality}>
                <div className={style.flex1}>
                <h2>Other Nationality</h2>
                <h2>Egyptian/Arab</h2>
                </div>
              </div>
              <div className={style.flex2}>
              <div className={style.age}>
                <h3>Adult</h3>
                <h3>Student</h3>
              </div>
              <div className={style.price}>
                <h3>EGP200</h3>
                <h3>EGP100</h3>
              </div>
              <div className={style.age2}>
                <h3>Adult</h3>
                <h3>Student</h3>
              </div>
              <div className={style.price2}>
                <h3>EGP 20</h3>
                <h3>EGP 10</h3>
              </div>
            </div>
           </div>
           <hr></hr>
           <div className={style.flex3}>
            <div className={style.opening}>
              <h2>OPENING HOURS</h2>
              <h2 id={style.red}>All days</h2>
              <h2 id={style.blue}>Summer working hours:</h2>
              <div className={style.flex}>
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 128 128"><path fill="#FCC11A" d="M37.41 41.95c-9.71 12.48-9.54 34.65 2.87 45.64c14.09 12.47 33.92 12.34 46.39.87c14.95-13.76 14.09-36.66.87-49.63c-13.29-13.04-37.04-13.72-50.13 3.12z"/><path fill="#FEE269" d="M53 37.67c-3.84-1.7-8.04 2.93-9.87 6.09c-1.83 3.17-3.53 9.38.37 10.97c3.9 1.58 6.7-1.1 9.51-5.73c2.79-4.63 4.38-9.38-.01-11.33z"/><path fill="#FFA722" d="M63 20.27c-.93 1.74-.62 3.08 1.23 3.52c1.85.44 13.36 2.31 14.33 2.37c1.41.09 1.93-.97 1.76-2.2c-.18-1.23-2.99-18.46-3.25-20.04S75.14.76 73.55 2.87S63.7 18.96 63 20.27zm29.8 11.96c-1.81.56-1.76 1.67-.79 3.08c.97 1.41 7.65 11.6 8.26 12.31c.62.7 1.67.88 2.55-.18c.88-1.05 11.86-16.45 12.66-17.41c1.32-1.58.53-3.25-1.49-2.73c-1.54.41-20.05 4.58-21.19 4.93zm13.8 29.63c-1.3-.74-2.99-.53-3.43 1.14c-.44 1.67-2.37 13.8-2.55 14.86s.62 2.11 1.93 1.85s19.45-2.95 20.66-3.25c2.11-.53 2.81-2.64.62-4.22c-1.42-1.03-16-9.68-17.23-10.38zM92.09 90.6c1.4-.75 2.64-.18 2.99 1.41c.35 1.58 4.22 17.76 4.84 20.75c.31 1.5-1.41 2.73-2.81 1.85c-1.41-.88-16.69-11.53-17.67-12.4c-1.41-1.23-.43-2.51.26-3.16c1.4-1.33 11.07-7.74 12.39-8.45zm-42.55 8.88c-1.77-.17-2.29 1.41-2.02 2.81c.26 1.41 2.9 19.24 3.08 20.57c.26 1.93 2.29 2.73 3.6.79s10.35-16.4 11.08-17.76c1.32-2.46.35-2.99-.97-3.6c-1.31-.61-12.92-2.63-14.77-2.81zM24.23 79c1.23-2.02 2.81-1.49 3.96.44c.78 1.32 7.38 10.2 8 11.16c.62.97.88 2.81-1.05 3.25c-1.95.45-17.68 4.58-20.14 5.02c-2.46.44-3.87-1.49-2.29-3.6c.92-1.24 10.82-15.12 11.52-16.27zm-3.34-15.3c2.25 1 3.31.64 3.78-.97c.62-2.11 2.46-11.78 2.55-13.98c.06-1.43-.53-2.81-2.73-2.46S6.47 48.85 4.45 49.55c-2.35.82-2.18 3.4-.62 4.22c1.85.97 15.47 9.23 17.06 9.93zm27.34-36.92c1.27-1.01.88-2.46-.26-3.25c-1.14-.79-15.26-11-17.05-12.4c-1.58-1.23-3.52-.79-2.99 2.02c.38 2.02 4.88 19.7 5.19 20.92c.35 1.41 1.41 2.11 2.64 1.23c1.21-.87 11.15-7.46 12.47-8.52z"/></svg>
                <h3 id={style.summer}>from 09:00 am Last Entry 04:00 pm</h3>
              </div>
              <h2 id={style.blue}>Winter working hours:</h2>
              <div className={style.flex}>
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 128 128"><path fill="#FCC11A" d="M37.41 41.95c-9.71 12.48-9.54 34.65 2.87 45.64c14.09 12.47 33.92 12.34 46.39.87c14.95-13.76 14.09-36.66.87-49.63c-13.29-13.04-37.04-13.72-50.13 3.12z"/><path fill="#FEE269" d="M53 37.67c-3.84-1.7-8.04 2.93-9.87 6.09c-1.83 3.17-3.53 9.38.37 10.97c3.9 1.58 6.7-1.1 9.51-5.73c2.79-4.63 4.38-9.38-.01-11.33z"/><path fill="#FFA722" d="M63 20.27c-.93 1.74-.62 3.08 1.23 3.52c1.85.44 13.36 2.31 14.33 2.37c1.41.09 1.93-.97 1.76-2.2c-.18-1.23-2.99-18.46-3.25-20.04S75.14.76 73.55 2.87S63.7 18.96 63 20.27zm29.8 11.96c-1.81.56-1.76 1.67-.79 3.08c.97 1.41 7.65 11.6 8.26 12.31c.62.7 1.67.88 2.55-.18c.88-1.05 11.86-16.45 12.66-17.41c1.32-1.58.53-3.25-1.49-2.73c-1.54.41-20.05 4.58-21.19 4.93zm13.8 29.63c-1.3-.74-2.99-.53-3.43 1.14c-.44 1.67-2.37 13.8-2.55 14.86s.62 2.11 1.93 1.85s19.45-2.95 20.66-3.25c2.11-.53 2.81-2.64.62-4.22c-1.42-1.03-16-9.68-17.23-10.38zM92.09 90.6c1.4-.75 2.64-.18 2.99 1.41c.35 1.58 4.22 17.76 4.84 20.75c.31 1.5-1.41 2.73-2.81 1.85c-1.41-.88-16.69-11.53-17.67-12.4c-1.41-1.23-.43-2.51.26-3.16c1.4-1.33 11.07-7.74 12.39-8.45zm-42.55 8.88c-1.77-.17-2.29 1.41-2.02 2.81c.26 1.41 2.9 19.24 3.08 20.57c.26 1.93 2.29 2.73 3.6.79s10.35-16.4 11.08-17.76c1.32-2.46.35-2.99-.97-3.6c-1.31-.61-12.92-2.63-14.77-2.81zM24.23 79c1.23-2.02 2.81-1.49 3.96.44c.78 1.32 7.38 10.2 8 11.16c.62.97.88 2.81-1.05 3.25c-1.95.45-17.68 4.58-20.14 5.02c-2.46.44-3.87-1.49-2.29-3.6c.92-1.24 10.82-15.12 11.52-16.27zm-3.34-15.3c2.25 1 3.31.64 3.78-.97c.62-2.11 2.46-11.78 2.55-13.98c.06-1.43-.53-2.81-2.73-2.46S6.47 48.85 4.45 49.55c-2.35.82-2.18 3.4-.62 4.22c1.85.97 15.47 9.23 17.06 9.93zm27.34-36.92c1.27-1.01.88-2.46-.26-3.25c-1.14-.79-15.26-11-17.05-12.4c-1.58-1.23-3.52-.79-2.99 2.02c.38 2.02 4.88 19.7 5.19 20.92c.35 1.41 1.41 2.11 2.64 1.23c1.21-.87 11.15-7.46 12.47-8.52z"/></svg>
                <h3 id={style.summer}>from 09:00 am Last Entry 04:00 pm</h3>
              </div>
               <h2 id={style.blue}>Ramadan working hours:</h2>
              <div className={style.flex}>
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 128 128"><path fill="#FCC11A" d="M37.41 41.95c-9.71 12.48-9.54 34.65 2.87 45.64c14.09 12.47 33.92 12.34 46.39.87c14.95-13.76 14.09-36.66.87-49.63c-13.29-13.04-37.04-13.72-50.13 3.12z"/><path fill="#FEE269" d="M53 37.67c-3.84-1.7-8.04 2.93-9.87 6.09c-1.83 3.17-3.53 9.38.37 10.97c3.9 1.58 6.7-1.1 9.51-5.73c2.79-4.63 4.38-9.38-.01-11.33z"/><path fill="#FFA722" d="M63 20.27c-.93 1.74-.62 3.08 1.23 3.52c1.85.44 13.36 2.31 14.33 2.37c1.41.09 1.93-.97 1.76-2.2c-.18-1.23-2.99-18.46-3.25-20.04S75.14.76 73.55 2.87S63.7 18.96 63 20.27zm29.8 11.96c-1.81.56-1.76 1.67-.79 3.08c.97 1.41 7.65 11.6 8.26 12.31c.62.7 1.67.88 2.55-.18c.88-1.05 11.86-16.45 12.66-17.41c1.32-1.58.53-3.25-1.49-2.73c-1.54.41-20.05 4.58-21.19 4.93zm13.8 29.63c-1.3-.74-2.99-.53-3.43 1.14c-.44 1.67-2.37 13.8-2.55 14.86s.62 2.11 1.93 1.85s19.45-2.95 20.66-3.25c2.11-.53 2.81-2.64.62-4.22c-1.42-1.03-16-9.68-17.23-10.38zM92.09 90.6c1.4-.75 2.64-.18 2.99 1.41c.35 1.58 4.22 17.76 4.84 20.75c.31 1.5-1.41 2.73-2.81 1.85c-1.41-.88-16.69-11.53-17.67-12.4c-1.41-1.23-.43-2.51.26-3.16c1.4-1.33 11.07-7.74 12.39-8.45zm-42.55 8.88c-1.77-.17-2.29 1.41-2.02 2.81c.26 1.41 2.9 19.24 3.08 20.57c.26 1.93 2.29 2.73 3.6.79s10.35-16.4 11.08-17.76c1.32-2.46.35-2.99-.97-3.6c-1.31-.61-12.92-2.63-14.77-2.81zM24.23 79c1.23-2.02 2.81-1.49 3.96.44c.78 1.32 7.38 10.2 8 11.16c.62.97.88 2.81-1.05 3.25c-1.95.45-17.68 4.58-20.14 5.02c-2.46.44-3.87-1.49-2.29-3.6c.92-1.24 10.82-15.12 11.52-16.27zm-3.34-15.3c2.25 1 3.31.64 3.78-.97c.62-2.11 2.46-11.78 2.55-13.98c.06-1.43-.53-2.81-2.73-2.46S6.47 48.85 4.45 49.55c-2.35.82-2.18 3.4-.62 4.22c1.85.97 15.47 9.23 17.06 9.93zm27.34-36.92c1.27-1.01.88-2.46-.26-3.25c-1.14-.79-15.26-11-17.05-12.4c-1.58-1.23-3.52-.79-2.99 2.02c.38 2.02 4.88 19.7 5.19 20.92c.35 1.41 1.41 2.11 2.64 1.23c1.21-.87 11.15-7.46 12.47-8.52z"/></svg>
                <h3 id={style.summer}>from 09:00 am Last Entry 03:00 pm</h3>
              </div>
             
              </div>
              <div className={style.facility}>
                <h2 id={style.title}>Visit Regulations</h2>
                <div className={style.flex}>
                  <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="#efe5e5ff" d="M160.5 0a64 64 0 1 1 0 128a64 64 0 1 1 0-128m-72 480v-80H70.7c-10.9 0-18.6-10.7-15.2-21.1l31.2-93.4L58 323.3c-10.7 14.1-30.8 16.8-44.8 6.2S-3.7 298.7 7 284.7L65.9 207c22.4-29.6 57.5-47 94.6-47s72.2 17.4 94.6 47l58.9 77.7c10.7 14.1 7.9 34.2-6.2 44.8s-34.2 7.9-44.8-6.2l-28.7-37.8l31.1 93.4c3.5 10.4-4.3 21.1-15.2 21.1h-17.8v80c0 17.7-14.3 32-32 32s-32-14.3-32-32v-80h-16v80c0 17.7-14.3 32-32 32s-32-14.3-32-32zm392-480a64 64 0 1 1 0 128a64 64 0 1 1 0-128m-8 384v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V300.5L395.6 321c-9.4 15-29.2 19.4-44.1 10s-19.4-29.2-10-44.1l51.7-82.1c17.6-27.9 48.3-44.9 81.2-44.9h12.3c33 0 63.7 16.9 81.2 44.9l51.7 82.2c9.4 15 4.9 34.7-10 44.1s-34.7 4.9-44.1-10l-12.9-20.5v179.5c0 17.7-14.3 32-32 32s-32-14.3-32-32v-96h-16z"/></svg>
                  <h3> Free entry for children below 6 years.</h3>
                </div>
                <div className={style.flex}>
                 <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 32 32"><path fill="#f2ededff" d="M20.373 19.85c0 4.08-3.318 7.397-7.398 7.397S5.577 23.93 5.577 19.85a7.39 7.39 0 0 1 3.073-5.997l-.25-2.21c-2.876 1.61-4.826 4.684-4.826 8.207c0 5.184 4.217 9.4 9.4 9.4c4.396 0 8.094-3.03 9.118-7.11l-1.722-2.41l.003.12zM11.768 6.534a2.392 2.392 0 1 0 0-4.784a2.392 2.392 0 0 0 0 4.784zm15.42 16.143l-5.367-7.505c-.28-.393-.748-.58-1.225-.538c-.035-.003-.07-.006-.106-.006h-6.133l-.152-1.335h4.557a.96.96 0 0 0 0-1.918h-4.776l-.25-2.192a2.335 2.335 0 1 0-4.641.527L9.8 15.9a2.331 2.331 0 0 0 2.33 2.07l.013.002h8.023l4.603 6.436c.438.615 1.337.727 2.006.248c.666-.478.852-1.364.412-1.98z"/></svg>                
                 <h3>wheel chair- Free entry for Egyptians with special needs.</h3>
              </div>
              <div className={style.flex}>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 48 48" fill="#f9f5f5ff"><g fill="#f2eeeeff"><path fill-rule="evenodd" d="M17 15a4 4 0 1 0 0-8a4 4 0 0 0 0 8Zm0-2a2 2 0 1 0 0-4a2 2 0 0 0 0 4Z" clip-rule="evenodd"/><path d="M21 38v-4.07l2 2.857V38a3 3 0 0 1-5.5 1.66A2.999 2.999 0 0 1 12 38V26.642a3 3 0 0 1-4.372-3.186c.234-1.267.47-2.374.769-3.282c.293-.895.74-1.901 1.575-2.708c.912-.879 1.96-1.216 2.857-1.353c.739-.114 1.563-.113 2.243-.113h.038l2.76 2h-2.76c-.725 0-1.405.002-1.979.09c-.64.098-1.25.315-1.77.816c-.494.477-.813 1.125-1.064 1.892c-.253.771-.47 1.765-.702 3.02a1 1 0 0 0 1.967.363c.17-.922.322-1.64.472-2.203l1.966.257V38a1 1 0 0 0 1.999.054L16.538 28h1.925L19 38.054A1 1 0 0 0 21 38Z"/><path d="M17.87 18h1.168l.007.001h.007c.994.02 1.887.364 2.632.927l1.053-1.723A6.39 6.39 0 0 0 19 16h-3.89l2.76 2ZM8.5 27A2.5 2.5 0 0 0 6 29.5v.803a1 1 0 1 0 2 0V29.5a.5.5 0 0 1 1 0V39a1 1 0 1 0 2 0v-9.5A2.5 2.5 0 0 0 8.5 27ZM37 29.5a2.5 2.5 0 0 1 5 0V39a1 1 0 1 1-2 0v-9.5a.5.5 0 0 0-1 0v.803a1 1 0 1 1-2 0V29.5Z"/><path fill-rule="evenodd" d="M30 14.57c2.209 0 4-1.694 4-3.785C34 8.695 32.209 7 30 7c-2.21 0-4 1.695-4 3.785s1.79 3.786 4 3.786Zm0-1.892c1.104 0 2-.847 2-1.893c0-1.045-.896-1.892-2-1.892c-1.105 0-2 .847-2 1.892c0 1.046.895 1.893 2 1.893Zm1.479 3.785c.43 0 1.18.045 1.967.42c1.33.634 2.09 1.672 2.541 2.59l.083.168c.157.318.2.405.223.497c.008.035.014.07.021.12c.014.087.035.218.091.466c.176.767.18.787.28 1.272c.095.463.282 1.371.81 3.858c.326 1.537-.727 3.034-2.351 3.342c-.26.05-.52.066-.772.051l.986 4.34c.149.813-.284 1.7-1.21 2.013c-.908.306-2.553.736-4.648.736c-2.096 0-3.74-.43-4.648-.736a1.778 1.778 0 0 1-1.21-2.013l.54-2.933a3.172 3.172 0 0 1-.772-.051c-1.625-.309-2.677-1.805-2.351-3.343c.527-2.486.714-3.393.81-3.857c.1-.485.104-.506.279-1.273c.185-.808.433-1.78.865-2.657c.45-.917 1.21-1.956 2.541-2.59c.787-.375 1.537-.42 1.967-.42h3.958Zm0 1.893H27.52c-.284 0-.678.032-1.068.218c-.793.378-1.29 1.012-1.627 1.698c-.33.671-.542 1.464-.723 2.258c-.173.754-.175.766-.269 1.222l-.002.012a623.92 623.92 0 0 1-.812 3.869c-.109.512.242 1.011.784 1.114c.25.048.499.002.705-.113l1.186-6.174l1.968.339l-.627 3.26l.024-.026l-1.436 7.817c.773.252 2.143.593 3.876.593s3.103-.34 3.876-.593l-1.437-7.82l.021.011l-.623-3.242l1.968-.339l.77 4.784c.2.103.436.142.675.097c.541-.103.892-.602.783-1.114c-.528-2.49-.715-3.402-.812-3.87l-.002-.01c-.094-.457-.096-.469-.268-1.223c-.074-.324-.08-.414-.081-.452c0-.01 0-.017-.002-.023c-.003-.012-.009-.022-.026-.052c-.024-.045-.072-.132-.168-.326c-.337-.685-.834-1.32-1.627-1.698a2.47 2.47 0 0 0-1.069-.217Z" clip-rule="evenodd"/><path d="M25 39.58v-2.298c1.305.17 2.507.276 3.682.317l-.743 2.383c-.212.677-.916 1.104-1.654 1.003c-.738-.1-1.285-.699-1.285-1.404Zm6.07.431l-.805-2.394A37.155 37.155 0 0 0 34 37.369v2.212c0 .7-.54 1.295-1.27 1.402c-.73.108-1.435-.305-1.66-.972Z"/></g></svg>
                 <h3 id={style.elder}>  Free entry for Egyptians above 60 years.</h3>
              </div>
              <div className={style.flex} id={style.photo}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="#faf6f6ff"><g fill="none" fill-rule="evenodd"><path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"/><path fill="#f6eeeeff" d="M20 2a1 1 0 0 1 .946.677l.13.378a3 3 0 0 0 1.869 1.87l.378.129a1 1 0 0 1 0 1.892l-.378.13a3 3 0 0 0-1.87 1.869l-.129.378a1 1 0 0 1-1.892 0l-.13-.378a3 3 0 0 0-1.869-1.87l-.378-.129a1 1 0 0 1 0-1.892l.378-.13a3 3 0 0 0 1.87-1.869l.129-.378A1 1 0 0 1 20 2m0 3.196a5 5 0 0 1-.804.804q.448.355.804.804q.355-.448.804-.804A5 5 0 0 1 20 5.196M8 3.586A2 2 0 0 1 9.414 3H14a1 1 0 1 1 0 2H9.414L8 6.414A2 2 0 0 1 6.586 7H4v12h16v-6a1 1 0 1 1 2 0v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2.586zM9 12.5a3 3 0 1 1 6 0a3 3 0 0 1-6 0m3-5a5 5 0 1 0 0 10a5 5 0 0 0 0-10"/></g></svg>
                 <h3 >Photography with mobile phone is free of charge.</h3>
              </div>
              </div>
            </div>

          </div>
        </article>
      </div>
     

     
      <div className={style.container9}>
        <article className={style.card__article}>
          <div className={style.sliderwrapper}>
            <div className={style.slider} ref={sliderRef2}>
              {images2.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  className={style.card__img}
                  alt={`Hotel View ${i + 1}`}
                />
              ))}
            </div>
          </div>

          <div className={style.arrow}>
            <button
              onClick={prevSlide2}
              className={style.arrowleft}
              disabled={currentIndex2 === 0}
              style={{ opacity: currentIndex2 === 0 ? 0.3 : 1 }}
            >
              <span className={style.chevron}></span>
            </button>

            <button
              onClick={nextSlide2}
              className={style.arrowright}
              disabled={currentIndex2 === images2.length - 1}
              style={{ opacity: currentIndex2 === images2.length - 1 ? 0.3 : 1 }}
            >
              <span className={style.chevron}></span>
            </button>
          </div>

           <div className={style.card__data}>
            <div className={style.flex}>
              <h2 className={style.card__title}>Catacombs</h2>
              <span className={style.card__stars}>★★★★</span><span class={style.halfstar}>★</span>
            </div>
           
            <div className={style.overview}>
              <h2>Overview</h2>
              <h4>The Catacombs of Kom el-Shuqafa are a historical archaeological site located in Alexandria, in the Kom el-Shuqafa area, south of the Mina el-Basal district. It is considered one of the city's most important cemeteries and one of the Seven Wonders of the Middle Ages. The cemetery consists of a series of tombs, statues, and Alexandrian archaeological remains from the Pharaonic funerary cult. Due to the time period, many features of the catacombs at Kom el-Shuqafa combine Roman, Greek, and Egyptian cultural influences. </h4>
            </div>
            <hr></hr>
            <div className={style.expect}>
              <div className={style.flex}>
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 48 48"><g fill="none" stroke-linecap="round" stroke-width="4"><path stroke="#000" stroke-linejoin="round" d="M9.00013 16.0001L34 6.00008L38.0004 16.0001"/><path fill="#2F88FF" stroke="#000" stroke-linejoin="round" d="M4 16H44V22C41 22 38 24 38 27.5C38 31 41 34 44 34V40H4V34C7.00016 34 10 32 10 28C10 24 7 22 4 22V16Z"/><path stroke="#fff" d="M17 25.3848H23"/><path stroke="#fff" d="M17 31.3848H31"/></g></svg>    <h2>Ticket(s) Price(s)</h2>          </div>
              <div className={style.nationality}>
                <div className={style.flex1}>
                <h2>Other Nationality</h2>
                <h2>Egyptian/Arab</h2>
                </div>
              </div>
              <div className={style.flex2}>
              <div className={style.age}>
                <h3>Adult</h3>
                <h3>Student</h3>
              </div>
              <div className={style.price}>
                <h3>EGP200</h3>
                <h3>EGP100</h3>
              </div>
              <div className={style.age2}>
                <h3>Adult</h3>
                <h3>Student</h3>
              </div>
              <div className={style.price2}>
                <h3>EGP 30</h3>
                <h3>EGP 10</h3>
              </div>
            </div>
           </div>
           <hr></hr>
           <div className={style.flex3}>
            <div className={style.opening}>
              <h2>OPENING HOURS</h2>
              <h2 id={style.red}>All days</h2>
              <h2 id={style.blue}>Summer working hours:</h2>
              <div className={style.flex}>
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 128 128"><path fill="#FCC11A" d="M37.41 41.95c-9.71 12.48-9.54 34.65 2.87 45.64c14.09 12.47 33.92 12.34 46.39.87c14.95-13.76 14.09-36.66.87-49.63c-13.29-13.04-37.04-13.72-50.13 3.12z"/><path fill="#FEE269" d="M53 37.67c-3.84-1.7-8.04 2.93-9.87 6.09c-1.83 3.17-3.53 9.38.37 10.97c3.9 1.58 6.7-1.1 9.51-5.73c2.79-4.63 4.38-9.38-.01-11.33z"/><path fill="#FFA722" d="M63 20.27c-.93 1.74-.62 3.08 1.23 3.52c1.85.44 13.36 2.31 14.33 2.37c1.41.09 1.93-.97 1.76-2.2c-.18-1.23-2.99-18.46-3.25-20.04S75.14.76 73.55 2.87S63.7 18.96 63 20.27zm29.8 11.96c-1.81.56-1.76 1.67-.79 3.08c.97 1.41 7.65 11.6 8.26 12.31c.62.7 1.67.88 2.55-.18c.88-1.05 11.86-16.45 12.66-17.41c1.32-1.58.53-3.25-1.49-2.73c-1.54.41-20.05 4.58-21.19 4.93zm13.8 29.63c-1.3-.74-2.99-.53-3.43 1.14c-.44 1.67-2.37 13.8-2.55 14.86s.62 2.11 1.93 1.85s19.45-2.95 20.66-3.25c2.11-.53 2.81-2.64.62-4.22c-1.42-1.03-16-9.68-17.23-10.38zM92.09 90.6c1.4-.75 2.64-.18 2.99 1.41c.35 1.58 4.22 17.76 4.84 20.75c.31 1.5-1.41 2.73-2.81 1.85c-1.41-.88-16.69-11.53-17.67-12.4c-1.41-1.23-.43-2.51.26-3.16c1.4-1.33 11.07-7.74 12.39-8.45zm-42.55 8.88c-1.77-.17-2.29 1.41-2.02 2.81c.26 1.41 2.9 19.24 3.08 20.57c.26 1.93 2.29 2.73 3.6.79s10.35-16.4 11.08-17.76c1.32-2.46.35-2.99-.97-3.6c-1.31-.61-12.92-2.63-14.77-2.81zM24.23 79c1.23-2.02 2.81-1.49 3.96.44c.78 1.32 7.38 10.2 8 11.16c.62.97.88 2.81-1.05 3.25c-1.95.45-17.68 4.58-20.14 5.02c-2.46.44-3.87-1.49-2.29-3.6c.92-1.24 10.82-15.12 11.52-16.27zm-3.34-15.3c2.25 1 3.31.64 3.78-.97c.62-2.11 2.46-11.78 2.55-13.98c.06-1.43-.53-2.81-2.73-2.46S6.47 48.85 4.45 49.55c-2.35.82-2.18 3.4-.62 4.22c1.85.97 15.47 9.23 17.06 9.93zm27.34-36.92c1.27-1.01.88-2.46-.26-3.25c-1.14-.79-15.26-11-17.05-12.4c-1.58-1.23-3.52-.79-2.99 2.02c.38 2.02 4.88 19.7 5.19 20.92c.35 1.41 1.41 2.11 2.64 1.23c1.21-.87 11.15-7.46 12.47-8.52z"/></svg>
                <h3 id={style.summer}>from 09:00 am Last Entry 04:00 pm</h3>
              </div>
              <h2 id={style.blue}>Winter working hours:</h2>
              <div className={style.flex}>
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 128 128"><path fill="#FCC11A" d="M37.41 41.95c-9.71 12.48-9.54 34.65 2.87 45.64c14.09 12.47 33.92 12.34 46.39.87c14.95-13.76 14.09-36.66.87-49.63c-13.29-13.04-37.04-13.72-50.13 3.12z"/><path fill="#FEE269" d="M53 37.67c-3.84-1.7-8.04 2.93-9.87 6.09c-1.83 3.17-3.53 9.38.37 10.97c3.9 1.58 6.7-1.1 9.51-5.73c2.79-4.63 4.38-9.38-.01-11.33z"/><path fill="#FFA722" d="M63 20.27c-.93 1.74-.62 3.08 1.23 3.52c1.85.44 13.36 2.31 14.33 2.37c1.41.09 1.93-.97 1.76-2.2c-.18-1.23-2.99-18.46-3.25-20.04S75.14.76 73.55 2.87S63.7 18.96 63 20.27zm29.8 11.96c-1.81.56-1.76 1.67-.79 3.08c.97 1.41 7.65 11.6 8.26 12.31c.62.7 1.67.88 2.55-.18c.88-1.05 11.86-16.45 12.66-17.41c1.32-1.58.53-3.25-1.49-2.73c-1.54.41-20.05 4.58-21.19 4.93zm13.8 29.63c-1.3-.74-2.99-.53-3.43 1.14c-.44 1.67-2.37 13.8-2.55 14.86s.62 2.11 1.93 1.85s19.45-2.95 20.66-3.25c2.11-.53 2.81-2.64.62-4.22c-1.42-1.03-16-9.68-17.23-10.38zM92.09 90.6c1.4-.75 2.64-.18 2.99 1.41c.35 1.58 4.22 17.76 4.84 20.75c.31 1.5-1.41 2.73-2.81 1.85c-1.41-.88-16.69-11.53-17.67-12.4c-1.41-1.23-.43-2.51.26-3.16c1.4-1.33 11.07-7.74 12.39-8.45zm-42.55 8.88c-1.77-.17-2.29 1.41-2.02 2.81c.26 1.41 2.9 19.24 3.08 20.57c.26 1.93 2.29 2.73 3.6.79s10.35-16.4 11.08-17.76c1.32-2.46.35-2.99-.97-3.6c-1.31-.61-12.92-2.63-14.77-2.81zM24.23 79c1.23-2.02 2.81-1.49 3.96.44c.78 1.32 7.38 10.2 8 11.16c.62.97.88 2.81-1.05 3.25c-1.95.45-17.68 4.58-20.14 5.02c-2.46.44-3.87-1.49-2.29-3.6c.92-1.24 10.82-15.12 11.52-16.27zm-3.34-15.3c2.25 1 3.31.64 3.78-.97c.62-2.11 2.46-11.78 2.55-13.98c.06-1.43-.53-2.81-2.73-2.46S6.47 48.85 4.45 49.55c-2.35.82-2.18 3.4-.62 4.22c1.85.97 15.47 9.23 17.06 9.93zm27.34-36.92c1.27-1.01.88-2.46-.26-3.25c-1.14-.79-15.26-11-17.05-12.4c-1.58-1.23-3.52-.79-2.99 2.02c.38 2.02 4.88 19.7 5.19 20.92c.35 1.41 1.41 2.11 2.64 1.23c1.21-.87 11.15-7.46 12.47-8.52z"/></svg>
                <h3 id={style.summer}>from 09:00 am Last Entry 04:00 pm</h3>
              </div>
               <h2 id={style.blue}>Ramadan working hours:</h2>
              <div className={style.flex}>
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 128 128"><path fill="#FCC11A" d="M37.41 41.95c-9.71 12.48-9.54 34.65 2.87 45.64c14.09 12.47 33.92 12.34 46.39.87c14.95-13.76 14.09-36.66.87-49.63c-13.29-13.04-37.04-13.72-50.13 3.12z"/><path fill="#FEE269" d="M53 37.67c-3.84-1.7-8.04 2.93-9.87 6.09c-1.83 3.17-3.53 9.38.37 10.97c3.9 1.58 6.7-1.1 9.51-5.73c2.79-4.63 4.38-9.38-.01-11.33z"/><path fill="#FFA722" d="M63 20.27c-.93 1.74-.62 3.08 1.23 3.52c1.85.44 13.36 2.31 14.33 2.37c1.41.09 1.93-.97 1.76-2.2c-.18-1.23-2.99-18.46-3.25-20.04S75.14.76 73.55 2.87S63.7 18.96 63 20.27zm29.8 11.96c-1.81.56-1.76 1.67-.79 3.08c.97 1.41 7.65 11.6 8.26 12.31c.62.7 1.67.88 2.55-.18c.88-1.05 11.86-16.45 12.66-17.41c1.32-1.58.53-3.25-1.49-2.73c-1.54.41-20.05 4.58-21.19 4.93zm13.8 29.63c-1.3-.74-2.99-.53-3.43 1.14c-.44 1.67-2.37 13.8-2.55 14.86s.62 2.11 1.93 1.85s19.45-2.95 20.66-3.25c2.11-.53 2.81-2.64.62-4.22c-1.42-1.03-16-9.68-17.23-10.38zM92.09 90.6c1.4-.75 2.64-.18 2.99 1.41c.35 1.58 4.22 17.76 4.84 20.75c.31 1.5-1.41 2.73-2.81 1.85c-1.41-.88-16.69-11.53-17.67-12.4c-1.41-1.23-.43-2.51.26-3.16c1.4-1.33 11.07-7.74 12.39-8.45zm-42.55 8.88c-1.77-.17-2.29 1.41-2.02 2.81c.26 1.41 2.9 19.24 3.08 20.57c.26 1.93 2.29 2.73 3.6.79s10.35-16.4 11.08-17.76c1.32-2.46.35-2.99-.97-3.6c-1.31-.61-12.92-2.63-14.77-2.81zM24.23 79c1.23-2.02 2.81-1.49 3.96.44c.78 1.32 7.38 10.2 8 11.16c.62.97.88 2.81-1.05 3.25c-1.95.45-17.68 4.58-20.14 5.02c-2.46.44-3.87-1.49-2.29-3.6c.92-1.24 10.82-15.12 11.52-16.27zm-3.34-15.3c2.25 1 3.31.64 3.78-.97c.62-2.11 2.46-11.78 2.55-13.98c.06-1.43-.53-2.81-2.73-2.46S6.47 48.85 4.45 49.55c-2.35.82-2.18 3.4-.62 4.22c1.85.97 15.47 9.23 17.06 9.93zm27.34-36.92c1.27-1.01.88-2.46-.26-3.25c-1.14-.79-15.26-11-17.05-12.4c-1.58-1.23-3.52-.79-2.99 2.02c.38 2.02 4.88 19.7 5.19 20.92c.35 1.41 1.41 2.11 2.64 1.23c1.21-.87 11.15-7.46 12.47-8.52z"/></svg>
                <h3 id={style.summer}>from 09:00 am Last Entry 02:00 pm</h3>
              </div>
             
              </div>
              <div className={style.facility}>
                <h2 id={style.title}>Visit Regulations</h2>
                <div className={style.flex}>
                  <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="#efe5e5ff" d="M160.5 0a64 64 0 1 1 0 128a64 64 0 1 1 0-128m-72 480v-80H70.7c-10.9 0-18.6-10.7-15.2-21.1l31.2-93.4L58 323.3c-10.7 14.1-30.8 16.8-44.8 6.2S-3.7 298.7 7 284.7L65.9 207c22.4-29.6 57.5-47 94.6-47s72.2 17.4 94.6 47l58.9 77.7c10.7 14.1 7.9 34.2-6.2 44.8s-34.2 7.9-44.8-6.2l-28.7-37.8l31.1 93.4c3.5 10.4-4.3 21.1-15.2 21.1h-17.8v80c0 17.7-14.3 32-32 32s-32-14.3-32-32v-80h-16v80c0 17.7-14.3 32-32 32s-32-14.3-32-32zm392-480a64 64 0 1 1 0 128a64 64 0 1 1 0-128m-8 384v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V300.5L395.6 321c-9.4 15-29.2 19.4-44.1 10s-19.4-29.2-10-44.1l51.7-82.1c17.6-27.9 48.3-44.9 81.2-44.9h12.3c33 0 63.7 16.9 81.2 44.9l51.7 82.2c9.4 15 4.9 34.7-10 44.1s-34.7 4.9-44.1-10l-12.9-20.5v179.5c0 17.7-14.3 32-32 32s-32-14.3-32-32v-96h-16z"/></svg>
                  <h3> Free entry for children below 6 years.</h3>
                </div>
                <div className={style.flex}>
                 <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 32 32"><path fill="#f2ededff" d="M20.373 19.85c0 4.08-3.318 7.397-7.398 7.397S5.577 23.93 5.577 19.85a7.39 7.39 0 0 1 3.073-5.997l-.25-2.21c-2.876 1.61-4.826 4.684-4.826 8.207c0 5.184 4.217 9.4 9.4 9.4c4.396 0 8.094-3.03 9.118-7.11l-1.722-2.41l.003.12zM11.768 6.534a2.392 2.392 0 1 0 0-4.784a2.392 2.392 0 0 0 0 4.784zm15.42 16.143l-5.367-7.505c-.28-.393-.748-.58-1.225-.538c-.035-.003-.07-.006-.106-.006h-6.133l-.152-1.335h4.557a.96.96 0 0 0 0-1.918h-4.776l-.25-2.192a2.335 2.335 0 1 0-4.641.527L9.8 15.9a2.331 2.331 0 0 0 2.33 2.07l.013.002h8.023l4.603 6.436c.438.615 1.337.727 2.006.248c.666-.478.852-1.364.412-1.98z"/></svg>                
                 <h3>wheel chair- Free entry for Egyptians with special needs.</h3>
              </div>
              <div className={style.flex}>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 48 48" fill="#f9f5f5ff"><g fill="#f2eeeeff"><path fill-rule="evenodd" d="M17 15a4 4 0 1 0 0-8a4 4 0 0 0 0 8Zm0-2a2 2 0 1 0 0-4a2 2 0 0 0 0 4Z" clip-rule="evenodd"/><path d="M21 38v-4.07l2 2.857V38a3 3 0 0 1-5.5 1.66A2.999 2.999 0 0 1 12 38V26.642a3 3 0 0 1-4.372-3.186c.234-1.267.47-2.374.769-3.282c.293-.895.74-1.901 1.575-2.708c.912-.879 1.96-1.216 2.857-1.353c.739-.114 1.563-.113 2.243-.113h.038l2.76 2h-2.76c-.725 0-1.405.002-1.979.09c-.64.098-1.25.315-1.77.816c-.494.477-.813 1.125-1.064 1.892c-.253.771-.47 1.765-.702 3.02a1 1 0 0 0 1.967.363c.17-.922.322-1.64.472-2.203l1.966.257V38a1 1 0 0 0 1.999.054L16.538 28h1.925L19 38.054A1 1 0 0 0 21 38Z"/><path d="M17.87 18h1.168l.007.001h.007c.994.02 1.887.364 2.632.927l1.053-1.723A6.39 6.39 0 0 0 19 16h-3.89l2.76 2ZM8.5 27A2.5 2.5 0 0 0 6 29.5v.803a1 1 0 1 0 2 0V29.5a.5.5 0 0 1 1 0V39a1 1 0 1 0 2 0v-9.5A2.5 2.5 0 0 0 8.5 27ZM37 29.5a2.5 2.5 0 0 1 5 0V39a1 1 0 1 1-2 0v-9.5a.5.5 0 0 0-1 0v.803a1 1 0 1 1-2 0V29.5Z"/><path fill-rule="evenodd" d="M30 14.57c2.209 0 4-1.694 4-3.785C34 8.695 32.209 7 30 7c-2.21 0-4 1.695-4 3.785s1.79 3.786 4 3.786Zm0-1.892c1.104 0 2-.847 2-1.893c0-1.045-.896-1.892-2-1.892c-1.105 0-2 .847-2 1.892c0 1.046.895 1.893 2 1.893Zm1.479 3.785c.43 0 1.18.045 1.967.42c1.33.634 2.09 1.672 2.541 2.59l.083.168c.157.318.2.405.223.497c.008.035.014.07.021.12c.014.087.035.218.091.466c.176.767.18.787.28 1.272c.095.463.282 1.371.81 3.858c.326 1.537-.727 3.034-2.351 3.342c-.26.05-.52.066-.772.051l.986 4.34c.149.813-.284 1.7-1.21 2.013c-.908.306-2.553.736-4.648.736c-2.096 0-3.74-.43-4.648-.736a1.778 1.778 0 0 1-1.21-2.013l.54-2.933a3.172 3.172 0 0 1-.772-.051c-1.625-.309-2.677-1.805-2.351-3.343c.527-2.486.714-3.393.81-3.857c.1-.485.104-.506.279-1.273c.185-.808.433-1.78.865-2.657c.45-.917 1.21-1.956 2.541-2.59c.787-.375 1.537-.42 1.967-.42h3.958Zm0 1.893H27.52c-.284 0-.678.032-1.068.218c-.793.378-1.29 1.012-1.627 1.698c-.33.671-.542 1.464-.723 2.258c-.173.754-.175.766-.269 1.222l-.002.012a623.92 623.92 0 0 1-.812 3.869c-.109.512.242 1.011.784 1.114c.25.048.499.002.705-.113l1.186-6.174l1.968.339l-.627 3.26l.024-.026l-1.436 7.817c.773.252 2.143.593 3.876.593s3.103-.34 3.876-.593l-1.437-7.82l.021.011l-.623-3.242l1.968-.339l.77 4.784c.2.103.436.142.675.097c.541-.103.892-.602.783-1.114c-.528-2.49-.715-3.402-.812-3.87l-.002-.01c-.094-.457-.096-.469-.268-1.223c-.074-.324-.08-.414-.081-.452c0-.01 0-.017-.002-.023c-.003-.012-.009-.022-.026-.052c-.024-.045-.072-.132-.168-.326c-.337-.685-.834-1.32-1.627-1.698a2.47 2.47 0 0 0-1.069-.217Z" clip-rule="evenodd"/><path d="M25 39.58v-2.298c1.305.17 2.507.276 3.682.317l-.743 2.383c-.212.677-.916 1.104-1.654 1.003c-.738-.1-1.285-.699-1.285-1.404Zm6.07.431l-.805-2.394A37.155 37.155 0 0 0 34 37.369v2.212c0 .7-.54 1.295-1.27 1.402c-.73.108-1.435-.305-1.66-.972Z"/></g></svg>
                 <h3 id={style.elder}>  Free entry for Egyptians above 60 years.</h3>
              </div>
              <div className={style.flex} id={style.photo}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="#faf6f6ff"><g fill="none" fill-rule="evenodd"><path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"/><path fill="#f6eeeeff" d="M20 2a1 1 0 0 1 .946.677l.13.378a3 3 0 0 0 1.869 1.87l.378.129a1 1 0 0 1 0 1.892l-.378.13a3 3 0 0 0-1.87 1.869l-.129.378a1 1 0 0 1-1.892 0l-.13-.378a3 3 0 0 0-1.869-1.87l-.378-.129a1 1 0 0 1 0-1.892l.378-.13a3 3 0 0 0 1.87-1.869l.129-.378A1 1 0 0 1 20 2m0 3.196a5 5 0 0 1-.804.804q.448.355.804.804q.355-.448.804-.804A5 5 0 0 1 20 5.196M8 3.586A2 2 0 0 1 9.414 3H14a1 1 0 1 1 0 2H9.414L8 6.414A2 2 0 0 1 6.586 7H4v12h16v-6a1 1 0 1 1 2 0v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2.586zM9 12.5a3 3 0 1 1 6 0a3 3 0 0 1-6 0m3-5a5 5 0 1 0 0 10a5 5 0 0 0 0-10"/></g></svg>
                 <h3 >Photography with mobile phone is free of charge.</h3>
              </div>
              </div>
            </div>

          </div>


        </article>
      </div>
      
      <div className={style.container9}>
        <article className={style.card__article}>
          <div className={style.sliderwrapper}>
            <div className={style.slider} ref={sliderRef3}>
              {images3.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  className={style.card__img}
                  alt={`Hotel View ${i + 1}`}
                />
              ))}
            </div>
          </div>

          <div className={style.arrow}>
            <button
              onClick={prevSlide3}
              className={style.arrowleft}
              disabled={currentIndex3 === 0}
              style={{ opacity: currentIndex3 === 0 ? 0.3 : 1 }}
            >
              <span className={style.chevron}></span>
            </button>

            <button
              onClick={nextSlide3}
              className={style.arrowright}
              disabled={currentIndex3 === images3.length - 1}
              style={{ opacity: currentIndex3 === images3.length - 1 ? 0.3 : 1 }}
            >
              <span className={style.chevron}></span>
            </button>
          </div>

          <div className={style.card__data}>
            <div className={style.flex}>
              <h2 className={style.card__title}> Alexandria National Museum </h2>
              <span className={style.card__stars}>★★★★</span><span class={style.halfstar}>★</span>
            </div>
            
            
            <div className={style.overview}>
              <h2>Overview</h2>
              <h4>The Alexandria National Museum (ANM) is a museum in Alexandria, Egypt. It was inaugurated the 31 December 2003 by Hosni Mubarak and it is located in a renovated Italian style palace in Tariq Al-Horreya Street (former Rue Fouad).The building used to be home to the United States consulate.</h4>            </div>
            <hr></hr>
            <div className={style.expect}>
              <div className={style.flex}>
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 48 48"><g fill="none" stroke-linecap="round" stroke-width="4"><path stroke="#000" stroke-linejoin="round" d="M9.00013 16.0001L34 6.00008L38.0004 16.0001"/><path fill="#2F88FF" stroke="#000" stroke-linejoin="round" d="M4 16H44V22C41 22 38 24 38 27.5C38 31 41 34 44 34V40H4V34C7.00016 34 10 32 10 28C10 24 7 22 4 22V16Z"/><path stroke="#fff" d="M17 25.3848H23"/><path stroke="#fff" d="M17 31.3848H31"/></g></svg>    <h2>Ticket(s) Price(s)</h2>          </div>
              <div className={style.nationality}>
                <div className={style.flex1}>
                <h2>Other Nationality</h2>
                <h2>Egyptian/Arab</h2>
                </div>
              </div>
              <div className={style.flex2}>
              <div className={style.age}>
                <h3>Adult</h3>
                <h3>Student</h3>
              </div>
              <div className={style.price}>
                <h3>EGP220</h3>
                <h3>EGP110</h3>
              </div>
              <div className={style.age2}>
                <h3>Adult</h3>
                <h3>Student</h3>
              </div>
              <div className={style.price2}>
                <h3>EGP 20</h3>
                <h3>EGP 5</h3>
              </div>
            </div>
           </div>
           <hr></hr>
           <div className={style.flex3}>
            <div className={style.opening}>
              <h2>OPENING HOURS</h2>
              <h2 id={style.red}>All days</h2>
              <h2 id={style.blue}>Summer working hours:</h2>
              <div className={style.flex}>
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 128 128"><path fill="#FCC11A" d="M37.41 41.95c-9.71 12.48-9.54 34.65 2.87 45.64c14.09 12.47 33.92 12.34 46.39.87c14.95-13.76 14.09-36.66.87-49.63c-13.29-13.04-37.04-13.72-50.13 3.12z"/><path fill="#FEE269" d="M53 37.67c-3.84-1.7-8.04 2.93-9.87 6.09c-1.83 3.17-3.53 9.38.37 10.97c3.9 1.58 6.7-1.1 9.51-5.73c2.79-4.63 4.38-9.38-.01-11.33z"/><path fill="#FFA722" d="M63 20.27c-.93 1.74-.62 3.08 1.23 3.52c1.85.44 13.36 2.31 14.33 2.37c1.41.09 1.93-.97 1.76-2.2c-.18-1.23-2.99-18.46-3.25-20.04S75.14.76 73.55 2.87S63.7 18.96 63 20.27zm29.8 11.96c-1.81.56-1.76 1.67-.79 3.08c.97 1.41 7.65 11.6 8.26 12.31c.62.7 1.67.88 2.55-.18c.88-1.05 11.86-16.45 12.66-17.41c1.32-1.58.53-3.25-1.49-2.73c-1.54.41-20.05 4.58-21.19 4.93zm13.8 29.63c-1.3-.74-2.99-.53-3.43 1.14c-.44 1.67-2.37 13.8-2.55 14.86s.62 2.11 1.93 1.85s19.45-2.95 20.66-3.25c2.11-.53 2.81-2.64.62-4.22c-1.42-1.03-16-9.68-17.23-10.38zM92.09 90.6c1.4-.75 2.64-.18 2.99 1.41c.35 1.58 4.22 17.76 4.84 20.75c.31 1.5-1.41 2.73-2.81 1.85c-1.41-.88-16.69-11.53-17.67-12.4c-1.41-1.23-.43-2.51.26-3.16c1.4-1.33 11.07-7.74 12.39-8.45zm-42.55 8.88c-1.77-.17-2.29 1.41-2.02 2.81c.26 1.41 2.9 19.24 3.08 20.57c.26 1.93 2.29 2.73 3.6.79s10.35-16.4 11.08-17.76c1.32-2.46.35-2.99-.97-3.6c-1.31-.61-12.92-2.63-14.77-2.81zM24.23 79c1.23-2.02 2.81-1.49 3.96.44c.78 1.32 7.38 10.2 8 11.16c.62.97.88 2.81-1.05 3.25c-1.95.45-17.68 4.58-20.14 5.02c-2.46.44-3.87-1.49-2.29-3.6c.92-1.24 10.82-15.12 11.52-16.27zm-3.34-15.3c2.25 1 3.31.64 3.78-.97c.62-2.11 2.46-11.78 2.55-13.98c.06-1.43-.53-2.81-2.73-2.46S6.47 48.85 4.45 49.55c-2.35.82-2.18 3.4-.62 4.22c1.85.97 15.47 9.23 17.06 9.93zm27.34-36.92c1.27-1.01.88-2.46-.26-3.25c-1.14-.79-15.26-11-17.05-12.4c-1.58-1.23-3.52-.79-2.99 2.02c.38 2.02 4.88 19.7 5.19 20.92c.35 1.41 1.41 2.11 2.64 1.23c1.21-.87 11.15-7.46 12.47-8.52z"/></svg>
                <h3 id={style.summer}>from 09:00 am Last Entry 04:00 pm</h3>
              </div>
              <h2 id={style.blue}>Winter working hours:</h2>
              <div className={style.flex}>
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 128 128"><path fill="#FCC11A" d="M37.41 41.95c-9.71 12.48-9.54 34.65 2.87 45.64c14.09 12.47 33.92 12.34 46.39.87c14.95-13.76 14.09-36.66.87-49.63c-13.29-13.04-37.04-13.72-50.13 3.12z"/><path fill="#FEE269" d="M53 37.67c-3.84-1.7-8.04 2.93-9.87 6.09c-1.83 3.17-3.53 9.38.37 10.97c3.9 1.58 6.7-1.1 9.51-5.73c2.79-4.63 4.38-9.38-.01-11.33z"/><path fill="#FFA722" d="M63 20.27c-.93 1.74-.62 3.08 1.23 3.52c1.85.44 13.36 2.31 14.33 2.37c1.41.09 1.93-.97 1.76-2.2c-.18-1.23-2.99-18.46-3.25-20.04S75.14.76 73.55 2.87S63.7 18.96 63 20.27zm29.8 11.96c-1.81.56-1.76 1.67-.79 3.08c.97 1.41 7.65 11.6 8.26 12.31c.62.7 1.67.88 2.55-.18c.88-1.05 11.86-16.45 12.66-17.41c1.32-1.58.53-3.25-1.49-2.73c-1.54.41-20.05 4.58-21.19 4.93zm13.8 29.63c-1.3-.74-2.99-.53-3.43 1.14c-.44 1.67-2.37 13.8-2.55 14.86s.62 2.11 1.93 1.85s19.45-2.95 20.66-3.25c2.11-.53 2.81-2.64.62-4.22c-1.42-1.03-16-9.68-17.23-10.38zM92.09 90.6c1.4-.75 2.64-.18 2.99 1.41c.35 1.58 4.22 17.76 4.84 20.75c.31 1.5-1.41 2.73-2.81 1.85c-1.41-.88-16.69-11.53-17.67-12.4c-1.41-1.23-.43-2.51.26-3.16c1.4-1.33 11.07-7.74 12.39-8.45zm-42.55 8.88c-1.77-.17-2.29 1.41-2.02 2.81c.26 1.41 2.9 19.24 3.08 20.57c.26 1.93 2.29 2.73 3.6.79s10.35-16.4 11.08-17.76c1.32-2.46.35-2.99-.97-3.6c-1.31-.61-12.92-2.63-14.77-2.81zM24.23 79c1.23-2.02 2.81-1.49 3.96.44c.78 1.32 7.38 10.2 8 11.16c.62.97.88 2.81-1.05 3.25c-1.95.45-17.68 4.58-20.14 5.02c-2.46.44-3.87-1.49-2.29-3.6c.92-1.24 10.82-15.12 11.52-16.27zm-3.34-15.3c2.25 1 3.31.64 3.78-.97c.62-2.11 2.46-11.78 2.55-13.98c.06-1.43-.53-2.81-2.73-2.46S6.47 48.85 4.45 49.55c-2.35.82-2.18 3.4-.62 4.22c1.85.97 15.47 9.23 17.06 9.93zm27.34-36.92c1.27-1.01.88-2.46-.26-3.25c-1.14-.79-15.26-11-17.05-12.4c-1.58-1.23-3.52-.79-2.99 2.02c.38 2.02 4.88 19.7 5.19 20.92c.35 1.41 1.41 2.11 2.64 1.23c1.21-.87 11.15-7.46 12.47-8.52z"/></svg>
                <h3 id={style.summer}>from 09:00 am Last Entry 04:00 pm</h3>
              </div>
               <h2 id={style.blue}>Ramadan working hours:</h2>
              <div className={style.flex}>
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 128 128"><path fill="#FCC11A" d="M37.41 41.95c-9.71 12.48-9.54 34.65 2.87 45.64c14.09 12.47 33.92 12.34 46.39.87c14.95-13.76 14.09-36.66.87-49.63c-13.29-13.04-37.04-13.72-50.13 3.12z"/><path fill="#FEE269" d="M53 37.67c-3.84-1.7-8.04 2.93-9.87 6.09c-1.83 3.17-3.53 9.38.37 10.97c3.9 1.58 6.7-1.1 9.51-5.73c2.79-4.63 4.38-9.38-.01-11.33z"/><path fill="#FFA722" d="M63 20.27c-.93 1.74-.62 3.08 1.23 3.52c1.85.44 13.36 2.31 14.33 2.37c1.41.09 1.93-.97 1.76-2.2c-.18-1.23-2.99-18.46-3.25-20.04S75.14.76 73.55 2.87S63.7 18.96 63 20.27zm29.8 11.96c-1.81.56-1.76 1.67-.79 3.08c.97 1.41 7.65 11.6 8.26 12.31c.62.7 1.67.88 2.55-.18c.88-1.05 11.86-16.45 12.66-17.41c1.32-1.58.53-3.25-1.49-2.73c-1.54.41-20.05 4.58-21.19 4.93zm13.8 29.63c-1.3-.74-2.99-.53-3.43 1.14c-.44 1.67-2.37 13.8-2.55 14.86s.62 2.11 1.93 1.85s19.45-2.95 20.66-3.25c2.11-.53 2.81-2.64.62-4.22c-1.42-1.03-16-9.68-17.23-10.38zM92.09 90.6c1.4-.75 2.64-.18 2.99 1.41c.35 1.58 4.22 17.76 4.84 20.75c.31 1.5-1.41 2.73-2.81 1.85c-1.41-.88-16.69-11.53-17.67-12.4c-1.41-1.23-.43-2.51.26-3.16c1.4-1.33 11.07-7.74 12.39-8.45zm-42.55 8.88c-1.77-.17-2.29 1.41-2.02 2.81c.26 1.41 2.9 19.24 3.08 20.57c.26 1.93 2.29 2.73 3.6.79s10.35-16.4 11.08-17.76c1.32-2.46.35-2.99-.97-3.6c-1.31-.61-12.92-2.63-14.77-2.81zM24.23 79c1.23-2.02 2.81-1.49 3.96.44c.78 1.32 7.38 10.2 8 11.16c.62.97.88 2.81-1.05 3.25c-1.95.45-17.68 4.58-20.14 5.02c-2.46.44-3.87-1.49-2.29-3.6c.92-1.24 10.82-15.12 11.52-16.27zm-3.34-15.3c2.25 1 3.31.64 3.78-.97c.62-2.11 2.46-11.78 2.55-13.98c.06-1.43-.53-2.81-2.73-2.46S6.47 48.85 4.45 49.55c-2.35.82-2.18 3.4-.62 4.22c1.85.97 15.47 9.23 17.06 9.93zm27.34-36.92c1.27-1.01.88-2.46-.26-3.25c-1.14-.79-15.26-11-17.05-12.4c-1.58-1.23-3.52-.79-2.99 2.02c.38 2.02 4.88 19.7 5.19 20.92c.35 1.41 1.41 2.11 2.64 1.23c1.21-.87 11.15-7.46 12.47-8.52z"/></svg>
                <h3 id={style.summer}>from 09:00 am Last Entry 03:00 pm</h3>
              </div>
             
              </div>
              <div className={style.facility}>
                <h2 id={style.title}>Visit Regulations</h2>
                <div className={style.flex}>
                  <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="#f4f2f2ff" d="M160.5 0a64 64 0 1 1 0 128a64 64 0 1 1 0-128m-72 480v-80H70.7c-10.9 0-18.6-10.7-15.2-21.1l31.2-93.4L58 323.3c-10.7 14.1-30.8 16.8-44.8 6.2S-3.7 298.7 7 284.7L65.9 207c22.4-29.6 57.5-47 94.6-47s72.2 17.4 94.6 47l58.9 77.7c10.7 14.1 7.9 34.2-6.2 44.8s-34.2 7.9-44.8-6.2l-28.7-37.8l31.1 93.4c3.5 10.4-4.3 21.1-15.2 21.1h-17.8v80c0 17.7-14.3 32-32 32s-32-14.3-32-32v-80h-16v80c0 17.7-14.3 32-32 32s-32-14.3-32-32zm392-480a64 64 0 1 1 0 128a64 64 0 1 1 0-128m-8 384v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V300.5L395.6 321c-9.4 15-29.2 19.4-44.1 10s-19.4-29.2-10-44.1l51.7-82.1c17.6-27.9 48.3-44.9 81.2-44.9h12.3c33 0 63.7 16.9 81.2 44.9l51.7 82.2c9.4 15 4.9 34.7-10 44.1s-34.7 4.9-44.1-10l-12.9-20.5v179.5c0 17.7-14.3 32-32 32s-32-14.3-32-32v-96h-16z"/></svg>
                  <h3> Free entry for children below 6 years.</h3>
                </div>
                <div className={style.flex}>
                 <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 32 32"><path fill="#f4eeeeff" d="M20.373 19.85c0 4.08-3.318 7.397-7.398 7.397S5.577 23.93 5.577 19.85a7.39 7.39 0 0 1 3.073-5.997l-.25-2.21c-2.876 1.61-4.826 4.684-4.826 8.207c0 5.184 4.217 9.4 9.4 9.4c4.396 0 8.094-3.03 9.118-7.11l-1.722-2.41l.003.12zM11.768 6.534a2.392 2.392 0 1 0 0-4.784a2.392 2.392 0 0 0 0 4.784zm15.42 16.143l-5.367-7.505c-.28-.393-.748-.58-1.225-.538c-.035-.003-.07-.006-.106-.006h-6.133l-.152-1.335h4.557a.96.96 0 0 0 0-1.918h-4.776l-.25-2.192a2.335 2.335 0 1 0-4.641.527L9.8 15.9a2.331 2.331 0 0 0 2.33 2.07l.013.002h8.023l4.603 6.436c.438.615 1.337.727 2.006.248c.666-.478.852-1.364.412-1.98z"/></svg>                
                 <h3>wheel chair- Free entry for Egyptians with special needs.</h3>
              </div>
              <div className={style.flex}>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 48 48" fill="#f0e6e6ff"><g fill="#f0e9e9ff"><path fill-rule="evenodd" d="M17 15a4 4 0 1 0 0-8a4 4 0 0 0 0 8Zm0-2a2 2 0 1 0 0-4a2 2 0 0 0 0 4Z" clip-rule="evenodd"/><path d="M21 38v-4.07l2 2.857V38a3 3 0 0 1-5.5 1.66A2.999 2.999 0 0 1 12 38V26.642a3 3 0 0 1-4.372-3.186c.234-1.267.47-2.374.769-3.282c.293-.895.74-1.901 1.575-2.708c.912-.879 1.96-1.216 2.857-1.353c.739-.114 1.563-.113 2.243-.113h.038l2.76 2h-2.76c-.725 0-1.405.002-1.979.09c-.64.098-1.25.315-1.77.816c-.494.477-.813 1.125-1.064 1.892c-.253.771-.47 1.765-.702 3.02a1 1 0 0 0 1.967.363c.17-.922.322-1.64.472-2.203l1.966.257V38a1 1 0 0 0 1.999.054L16.538 28h1.925L19 38.054A1 1 0 0 0 21 38Z"/><path d="M17.87 18h1.168l.007.001h.007c.994.02 1.887.364 2.632.927l1.053-1.723A6.39 6.39 0 0 0 19 16h-3.89l2.76 2ZM8.5 27A2.5 2.5 0 0 0 6 29.5v.803a1 1 0 1 0 2 0V29.5a.5.5 0 0 1 1 0V39a1 1 0 1 0 2 0v-9.5A2.5 2.5 0 0 0 8.5 27ZM37 29.5a2.5 2.5 0 0 1 5 0V39a1 1 0 1 1-2 0v-9.5a.5.5 0 0 0-1 0v.803a1 1 0 1 1-2 0V29.5Z"/><path fill-rule="evenodd" d="M30 14.57c2.209 0 4-1.694 4-3.785C34 8.695 32.209 7 30 7c-2.21 0-4 1.695-4 3.785s1.79 3.786 4 3.786Zm0-1.892c1.104 0 2-.847 2-1.893c0-1.045-.896-1.892-2-1.892c-1.105 0-2 .847-2 1.892c0 1.046.895 1.893 2 1.893Zm1.479 3.785c.43 0 1.18.045 1.967.42c1.33.634 2.09 1.672 2.541 2.59l.083.168c.157.318.2.405.223.497c.008.035.014.07.021.12c.014.087.035.218.091.466c.176.767.18.787.28 1.272c.095.463.282 1.371.81 3.858c.326 1.537-.727 3.034-2.351 3.342c-.26.05-.52.066-.772.051l.986 4.34c.149.813-.284 1.7-1.21 2.013c-.908.306-2.553.736-4.648.736c-2.096 0-3.74-.43-4.648-.736a1.778 1.778 0 0 1-1.21-2.013l.54-2.933a3.172 3.172 0 0 1-.772-.051c-1.625-.309-2.677-1.805-2.351-3.343c.527-2.486.714-3.393.81-3.857c.1-.485.104-.506.279-1.273c.185-.808.433-1.78.865-2.657c.45-.917 1.21-1.956 2.541-2.59c.787-.375 1.537-.42 1.967-.42h3.958Zm0 1.893H27.52c-.284 0-.678.032-1.068.218c-.793.378-1.29 1.012-1.627 1.698c-.33.671-.542 1.464-.723 2.258c-.173.754-.175.766-.269 1.222l-.002.012a623.92 623.92 0 0 1-.812 3.869c-.109.512.242 1.011.784 1.114c.25.048.499.002.705-.113l1.186-6.174l1.968.339l-.627 3.26l.024-.026l-1.436 7.817c.773.252 2.143.593 3.876.593s3.103-.34 3.876-.593l-1.437-7.82l.021.011l-.623-3.242l1.968-.339l.77 4.784c.2.103.436.142.675.097c.541-.103.892-.602.783-1.114c-.528-2.49-.715-3.402-.812-3.87l-.002-.01c-.094-.457-.096-.469-.268-1.223c-.074-.324-.08-.414-.081-.452c0-.01 0-.017-.002-.023c-.003-.012-.009-.022-.026-.052c-.024-.045-.072-.132-.168-.326c-.337-.685-.834-1.32-1.627-1.698a2.47 2.47 0 0 0-1.069-.217Z" clip-rule="evenodd"/><path d="M25 39.58v-2.298c1.305.17 2.507.276 3.682.317l-.743 2.383c-.212.677-.916 1.104-1.654 1.003c-.738-.1-1.285-.699-1.285-1.404Zm6.07.431l-.805-2.394A37.155 37.155 0 0 0 34 37.369v2.212c0 .7-.54 1.295-1.27 1.402c-.73.108-1.435-.305-1.66-.972Z"/></g></svg>
                 <h3 id={style.elder}>  Free entry for Egyptians above 60 years.</h3>
              </div>
              <div className={style.flex} id={style.photo}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="#fbf7f7ff"><g fill="white" ><path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"/><path fill="#f7f2f2ff" d="M20 2a1 1 0 0 1 .946.677l.13.378a3 3 0 0 0 1.869 1.87l.378.129a1 1 0 0 1 0 1.892l-.378.13a3 3 0 0 0-1.87 1.869l-.129.378a1 1 0 0 1-1.892 0l-.13-.378a3 3 0 0 0-1.869-1.87l-.378-.129a1 1 0 0 1 0-1.892l.378-.13a3 3 0 0 0 1.87-1.869l.129-.378A1 1 0 0 1 20 2m0 3.196a5 5 0 0 1-.804.804q.448.355.804.804q.355-.448.804-.804A5 5 0 0 1 20 5.196M8 3.586A2 2 0 0 1 9.414 3H14a1 1 0 1 1 0 2H9.414L8 6.414A2 2 0 0 1 6.586 7H4v12h16v-6a1 1 0 1 1 2 0v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2.586zM9 12.5a3 3 0 1 1 6 0a3 3 0 0 1-6 0m3-5a5 5 0 1 0 0 10a5 5 0 0 0 0-10"/></g></svg>
                 <h3 >Photography with mobile phone is free of charge.</h3>
              </div>
              </div>
            </div>

          </div>

        </article>
      </div>
      
    </div>
  );
}

export default History;
