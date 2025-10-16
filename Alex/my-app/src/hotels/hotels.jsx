import style from './hotels.module.css';
import pic1 from '../assets/tolip.jpg';
import pic2 from '../assets/tolip2.jpg';
import pic3 from '../assets/tolip3.jpg';
import pic4 from '../assets/tolip4.jpg';
import pic5 from '../assets/tolip5.jpg';
import pic6 from '../assets/tolip6.avif';
import pic7 from '../assets/helnan.jpg';
import pic8 from '../assets/helnan2.jpg';
import pic9 from '../assets/helnan3.jpg';
import pic10 from '../assets/helnan4.jpeg';
import pic11 from '../assets/helnan5.jpg';
import pic12 from '../assets/helnan6.jpeg';
import pic13 from '../assets/crowne.jpg';
import pic14 from '../assets/crowne2.jpg';
import pic15 from '../assets/crowne3.jpg';
import pic16 from '../assets/crowne4.jpg';
import pic17 from '../assets/crowne5.jpg';
import pic18 from '../assets/crowne6.jpg';

import { useRef, useState } from 'react';
function Hotel() {

  const images = [pic1, pic2, pic3, pic4, pic5, pic6];
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

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


  const images2 = [pic7, pic8, pic9, pic10, pic11, pic12];
  const [currentIndex2, setCurrentIndex2] = useState(0);
  const sliderRef2 = useRef(null);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const openModal2 = () => setIsModalOpen2(true);
  const closeModal2 = () => setIsModalOpen2(false);
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


  const images3 = [pic13, pic14, pic15, pic16, pic17, pic18];
  const [currentIndex3, setCurrentIndex3] = useState(0);
  const sliderRef3 = useRef(null);
  const [isModalOpen3, setIsModalOpen3] = useState(false);
  const openModal3 = () => setIsModalOpen3(true);
  const closeModal3 = () => setIsModalOpen3(false);

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
              <h2 className={style.card__title}>Tolip Hotel</h2>
              <span className={style.card__stars}>★★★★★</span>
              <h2 id={style.rate}>Excellent Location</h2>
              <span className={style.card__stars2}>8.2</span>
            </div>
            <div className={style.map}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2.4em"
                height="2.4em"
                viewBox="0 0 24 24"
                fill="currentColor"
                style={{ marginRight: '8px', verticalAlign: 'middle' }}
              >
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
              </svg>
              <button onClick={openModal}>show on map</button>  Moustafa Kamel, Corniche Road Roshdy
            </div>
            <div className={style.props}>
              <div className={style.breakfast}>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-utensils-icon lucide-utensils"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" /><path d="M7 2v20" /><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" /></svg>
                <h5>Very good breakfast</h5>
              </div>
              <div className={style.pool}>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M80-120v-80q38 0 57-20t75-20q56 0 77 20t57 20q36 0 57-20t77-20q56 0 77 20t57 20q36 0 57-20t77-20q56 0 75 20t57 20v80q-59 0-77.5-20T748-160q-36 0-57 20t-77 20q-56 0-77-20t-57-20q-36 0-57 20t-77 20q-56 0-77-20t-57-20q-36 0-54.5 20T80-120Zm0-180v-80q38 0 57-20t75-20q56 0 77.5 20t56.5 20q36 0 57-20t77-20q56 0 77 20t57 20q36 0 57-20t77-20q56 0 75 20t57 20v80q-59 0-77.5-20T748-340q-36 0-55.5 20T614-300q-57 0-77.5-20T480-340q-38 0-56.5 20T346-300q-59 0-78.5-20T212-340q-36 0-54.5 20T80-300Zm196-204 133-133-40-40q-33-33-70-48t-91-15v-100q75 0 124 16.5t96 63.5l256 256q-17 11-33 17.5t-37 6.5q-36 0-57-20t-77-20q-56 0-77 20t-57 20q-21 0-37-6.5T276-504Zm392-336q42 0 71 29.5t29 70.5q0 42-29 71t-71 29q-42 0-71-29t-29-71q0-41 29-70.5t71-29.5Z" /></svg>
                <h5>outdoor swimming pool</h5>
              </div>
              <div className={style.fitness}>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="m536-84-56-56 142-142-340-340-142 142-56-56 56-58-56-56 84-84-56-58 56-56 58 56 84-84 56 56 58-56 56 56-142 142 340 340 142-142 56 56-56 58 56 56-84 84 56 58-56 56-58-56-84 84-56-56-58 56Z" /></svg>
                <h5>Fitness center</h5>
              </div>
              <div className={style.parking}>
                <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#1f1f1f"><path d="M160-120v-480l320-240 320 240v480h-80v-440L480-740 240-560v440h-80Zm200-80h240v-80H360v80Zm0-160h240v-80H360v80Zm-80 240v-400h400v400H280Z" /></svg>
                <h5>Private parking</h5>
              </div>
              <div className={style.hot}>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 32 32"><path fill="#000000" d="M11.219 4.375C10.39 5.398 10.008 6.273 10 7.125c-.008.852.371 1.512.625 1.938c.254.425.367.64.375.874c.008.235-.07.645-.688 1.438l1.563 1.25c.781-1.008 1.152-1.914 1.125-2.75c-.027-.836-.41-1.434-.656-1.844c-.246-.41-.348-.629-.344-.875c.004-.246.11-.703.781-1.531zm5 0C15.39 5.398 15.008 6.273 15 7.125c-.008.852.371 1.512.625 1.938c.254.425.367.64.375.874c.008.235-.07.645-.688 1.438l1.563 1.25c.781-1.008 1.152-1.914 1.125-2.75c-.027-.836-.41-1.434-.656-1.844c-.246-.41-.348-.629-.344-.875c.004-.246.11-.703.781-1.531zm5 0C20.39 5.398 20.008 6.273 20 7.125c-.008.852.371 1.512.625 1.938c.254.425.367.64.375.874c.008.235-.07.645-.688 1.438l1.563 1.25c.781-1.008 1.152-1.914 1.125-2.75c-.027-.836-.41-1.434-.656-1.844c-.246-.41-.348-.629-.344-.875c.004-.246.11-.703.781-1.531zM3 14v2h1.188l1.53 7.594v.031a3.062 3.062 0 0 0 2 2.219L7 28h2l.656-2h12.688L23 28h2l-.719-2.156c1.047-.32 1.86-1.16 2.094-2.219v-.031L27.813 16H29v-2zm3.219 2h19.593l-1.406 7.219c-.117.433-.484.781-1 .781H8.688c-.536 0-.899-.355-1-.813z"/></svg>
                <h5>Hot tub</h5>
              </div>
              <div className={style.room}>
             <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24"><path fill="none" stroke="#101010" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6.167V4m0 2.167a8 8 0 0 1 8 8V17H4v-2.833a8 8 0 0 1 8-8ZM3 20h18"/></svg>                
             <h5>room service</h5>
              </div>
            </div>
            <div className={style.props2}>
              <div className={style.cafe}>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M40-440v-80h81q14-127 103-216t216-103v-41h80v41q127 14 216 103t103 216h81v80H40Zm163-80h554q-14-103-92.5-171.5T480-760q-106 0-184.5 68.5T203-520Zm372 80H320v240h222q21 0 40.5-7t35.5-21l166-137q-8-8-18-12t-21-6q-17-3-33 1t-30 15l-108 87H400v-80h146l44-36q5-3 7.5-8t2.5-11q0-10-7.5-17.5T575-440Zm-335 0h-80v280h80v-280Zm0 360h-80q-33 0-56.5-23.5T80-160v-280q0-33 23.5-56.5T160-520h415q85 0 164 29t127 98l27 41-223 186q-27 23-60 34.5T542-120H309q-11 18-29 29t-40 11Zm240-440Z" /></svg>
                <h5>6 restaurants</h5>
              </div>
              <div className={style.beach}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="27" viewBox="0 0 24 24"><path fill="#000000" d="M9.35 5.321a6.75 6.75 0 0 1 11.692 6.75l-.25.434a.75.75 0 0 1-1.025.274l-4.558-2.632l-2.373 4.152c1.905.226 3.59 1.21 4.843 2.615a2.001 2.001 0 0 0-1.3.802C15.214 16.508 13.666 15.75 12 15.75c-1.666 0-3.214.758-4.38 1.966a2.002 2.002 0 0 0-1.299-.802c1.24-1.39 2.903-2.368 4.783-2.607l2.806-4.91l-4.535-2.618A.75.75 0 0 1 9.1 5.754l.25-.433Zm1.43.537l1.966 1.135c.534-.819 1.074-1.493 1.743-2.102a11.15 11.15 0 0 1 1.826-1.325a5.253 5.253 0 0 0-5.535 2.292Zm5.81 3.354c.554-.997.82-1.79.916-2.555c.077-.62.047-1.255-.064-2.01c-.818.46-1.43.887-1.944 1.354c-.533.485-.981 1.031-1.451 1.743l2.543 1.468Zm1.299.75l1.974 1.14a5.253 5.253 0 0 0-.857-6.02a7.98 7.98 0 0 1-.012 1.761c-.126 1.01-.476 1.993-1.105 3.12ZM6.714 18.66a.75.75 0 0 0-1.444.056c-.21.891-.607 1.364-1.041 1.634c-.46.286-1.05.401-1.729.401a.75.75 0 0 0 0 1.5c.822 0 1.73-.135 2.521-.627a3.504 3.504 0 0 0 1.062-1.029c1.552 1.866 4.41 1.857 5.917-.029c1.534 1.919 4.466 1.895 5.997-.07c.848 1.108 2.17 1.755 3.503 1.755a.75.75 0 1 0 0-1.5c-1.183 0-2.384-.797-2.784-2.084a.75.75 0 0 0-1.43-.007c-.784 2.44-3.81 2.399-4.575.104a.75.75 0 0 0-1.422 0c-.765 2.295-3.791 2.335-4.575-.104Z" /></svg>
                <h5>private beach</h5>
              </div>
              <div className={style.wifi}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="23" viewBox="0 0 24 24"><path fill="#000000" d="m6.35 15.35l-2.1-2.15q1.475-1.475 3.463-2.337T12 10q2.3 0 4.288.875t3.462 2.375l-2.1 2.1q-1.1-1.1-2.55-1.725T12 13q-1.65 0-3.1.625T6.35 15.35ZM2.1 11.1L0 9q2.3-2.35 5.375-3.675T12 4q3.55 0 6.625 1.325T24 9l-2.1 2.1q-1.925-1.925-4.463-3.013T12 7Q9.1 7 6.562 8.088T2.1 11.1ZM12 21l3.525-3.55q-.675-.675-1.575-1.063T12 16q-1.05 0-1.95.388T8.475 17.45L12 21Z" /></svg>
                <h5>Free wi-fi</h5>
              </div>
              <div className={style.spa}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="#000000"><g fill="none" stroke="#000000" stroke-width="1.5"><path d="M14.225 15.957a4.28 4.28 0 0 0 5.883-1.437l.645-1.062l.008-8.262L15.57 7.9m-5.795 8.057a4.28 4.28 0 0 1-5.883-1.437l-.645-1.062l-.008-8.262L8.411 7.89M2 22h20" /><path d="M15.367 14.605a4.76 4.76 0 0 0 1.395-3.367v-1.38L12 2L7.238 9.857v1.381a4.762 4.762 0 0 0 8.13 3.367Z" /></g></svg>
                <h5>Wellness and spa center</h5>
              </div>
              <div className={style.disabled}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="#000000"><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0zM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036c-.01-.003-.019 0-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"/><path fill="#000000" d="M11 4a1 1 0 1 0 0 2a1 1 0 0 0 0-2M8 5a3 3 0 1 1 4 2.83v1.45l2.162.72H16a1 1 0 1 1 0 2h-2a1 1 0 0 1-.316-.051L12 11.387V13a1 1 0 0 0 1 1h2a3 3 0 0 1 2.4 1.2l2.1 2.8h.5a1 1 0 1 1 0 2h-1a1 1 0 0 1-.8-.4l-2.4-3.2a1 1 0 0 0-.8-.4h-2a3 3 0 0 1-3-3V7.829A3.001 3.001 0 0 1 8 5m.272 6.17a4.5 4.5 0 1 0 5.238 6.375l1.78.91a6.5 6.5 0 1 1-7.563-9.21z"/></g></svg>
                  <h5> Accesissible</h5>
              </div>
                <div className={style.laundry}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 50 50"><path fill="#101010ff" d="M6 11v33.74C6 46.21 7.237 48 8.76 48h33.218C43.497 48 45 46.21 45 44.74V11H6zm19.46 26.776c-5.86 0-10.611-4.594-10.611-10.263S19.6 17.25 25.46 17.25s10.611 4.594 10.611 10.263c0 5.67-4.751 10.263-10.611 10.263zM41.978 1H8.76C7.237 1 6 2.033 6 3.505V9h39V3.505C45 2.033 43.497 1 41.978 1zM19 7H8V3h11v4zm19.146-.28c-1.249 0-2.258-.979-2.258-2.188c0-1.207 1.009-2.186 2.258-2.186s2.261.979 2.261 2.186c-.001 1.208-1.012 2.188-2.261 2.188z"/></svg>
                  <h5>Laundry service</h5>
                </div>
              
            </div>
            <div className={style.cost}>
              <h4>cost for 1 night</h4>
              <h3>Approximately</h3>
              <h2> 65$-56$ </h2>
            </div>
          </div>
        </article>
      </div>
      {isModalOpen && (
        <div className={style.modal}>
          <div className={style.modal__content}>
            <span className={style.close} onClick={closeModal}>&times;</span>
          <div className={style.map}>
       <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3411.6066223418366!2d29.946108100000004!3d31.23162619999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c4e610b4e28d%3A0x55e0e76c064a00be!2sTolip%20Hotel%20Alexandria!5e0!3m2!1sen!2seg!4v1760352472120!5m2!1sen!2seg"
 
  style={{ border: '0' }} // Converted to a JavaScript object
  allowFullScreen={true} // Converted to camelCase and explicitly set to true
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade" // Converted to camelCase
></iframe>
         </div>
          </div>
        </div>

      )}
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
              <h2 className={style.card__title}>Helnan Antoniades Palace Hotel</h2>
              <h2 id={style.rate}>Great Location</h2><span className={style.card__stars}>★★★★★</span>
              <span className={style.card__stars2}>9.2</span>
            </div>
            <div className={style.map}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2em"
                height="2em"
                viewBox="0 0 24 24"
                fill="currentColor"
                style={{ marginRight: '8px', verticalAlign: 'middle' }}
              >
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
              </svg>
              <button onClick={openModal2}>show on map</button> 1 Albert Al Awel, Alexandria Egypt
            </div>
            <div className={style.props}>
              <div className={style.breakfast2}>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-utensils-icon lucide-utensils"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" /><path d="M7 2v20" /><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" /></svg>
                <h5>good breakfast</h5>
              </div>
              <div className={style.pool2}>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M80-120v-80q38 0 57-20t75-20q56 0 77 20t57 20q36 0 57-20t77-20q56 0 77 20t57 20q36 0 57-20t77-20q56 0 75 20t57 20v80q-59 0-77.5-20T748-160q-36 0-57 20t-77 20q-56 0-77-20t-57-20q-36 0-57 20t-77 20q-56 0-77-20t-57-20q-36 0-54.5 20T80-120Zm0-180v-80q38 0 57-20t75-20q56 0 77.5 20t56.5 20q36 0 57-20t77-20q56 0 77 20t57 20q36 0 57-20t77-20q56 0 75 20t57 20v80q-59 0-77.5-20T748-340q-36 0-55.5 20T614-300q-57 0-77.5-20T480-340q-38 0-56.5 20T346-300q-59 0-78.5-20T212-340q-36 0-54.5 20T80-300Zm196-204 133-133-40-40q-33-33-70-48t-91-15v-100q75 0 124 16.5t96 63.5l256 256q-17 11-33 17.5t-37 6.5q-36 0-57-20t-77-20q-56 0-77 20t-57 20q-21 0-37-6.5T276-504Zm392-336q42 0 71 29.5t29 70.5q0 42-29 71t-71 29q-42 0-71-29t-29-71q0-41 29-70.5t71-29.5Z" /></svg>
                <h5>2 swimming pools</h5>
              </div>
              <div className={style.smoking}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 64 64"><path fill="#000000" d="M32.084 18.571c.691.652 1.817 1.384 3.496 1.584c-.259 1.204-.08 2.53.537 3.61c.775 1.357 2.12 2.134 3.688 2.134h5.063c1.443 0 3.161.472 3.161 2.716v2.581h1.885v-2.581c0-2.837-1.933-4.6-5.046-4.6h-5.064c-1.136 0-1.742-.644-2.051-1.185c-.534-.934-.54-2.21-.016-3.1a.941.941 0 0 0-.869-1.419c-1.43.086-2.633-.301-3.492-1.11a3.689 3.689 0 0 1-1.166-2.667c0-1.308.764-3.754 3.615-3.836v2.215h1.885v-.383c2.663.054 4.583 1.843 4.583 4.299c0 .993-.409 2.148-1.09 3.089a.941.941 0 0 0 .762 1.496h2.993c3.899 0 6.003 3.254 6.003 6.317v3.468h1.886v-3.468c0-4.032-2.952-8.202-7.89-8.202h-1.376c.386-.887.595-1.819.595-2.7c0-3.489-2.773-6.127-6.468-6.183V8.248h-1.886v.565c-3.609.075-5.501 2.912-5.501 5.722a5.586 5.586 0 0 0 1.761 4.037zM48.03 32.125h1.885v5.695H48.03v-5.695zm2.947 0h1.884v5.695h-1.884v-5.695z"/><path fill="#000000" d="M32.586 0C15.264 0 1.173 14.092 1.173 31.414c0 17.321 14.092 31.413 31.413 31.413C49.908 62.827 64 48.735 64 31.414C64.001 14.092 49.909 0 32.587 0zm24.408 31.414c0 5.343-1.73 10.286-4.655 14.311l-7.883-7.882h2.519v-5.627H38.83L18.275 11.662a24.26 24.26 0 0 1 14.312-4.655c13.458 0 24.408 10.949 24.408 24.408zm-48.815 0a24.267 24.267 0 0 1 4.555-14.174l14.975 14.975H11.801v5.627h21.535L46.76 51.265a24.285 24.285 0 0 1-14.174 4.554C19.13 55.821 8.18 44.873 8.18 31.413z"/></svg>            
              <h5>Non smoking rooms</h5>
              </div>
              <div className={style.parking2}>
              <svg width="23" height="23" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#000000" d="M15 11h1.5V9h2q.625 0 1.063-.437T20 7.5v-1q0-.625-.437-1.062T18.5 5H15zm1.5-3.5v-1h2v1zM13 14q-.825 0-1.412-.587T11 12V4q0-.825.588-1.412T13 2h8q.825 0 1.413.588T23 4v8q0 .825-.587 1.413T21 14h-3v7h-2v-7zm0-2h8V4h-8zm-5 9q-.425 0-.712-.288T7 20v-1H2v-2h6v-5H2v-2h5.2L6.15 7H2V5h4.5q.475 0 .863.275T7.9 6l2.1 6v8q0 .425-.288.713T9 21zm-2.5-5q.625 0 1.063-.437T7 14.5t-.437-1.062T5.5 13t-1.062.438T4 14.5t.438 1.063T5.5 16"/></svg>               
              <h5>parking</h5>
              </div>
              <div className={style.hot2}>
              <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 512 512"><path fill="#000000" d="M104.998 104.998v110.004h206.004V104.998H104.998zm288 112v46.004h30.004v-46.004h-30.004zm-194.512 16l-8.668 26.004h36.364l-8.668-26.004h-19.028zm-157.488 44v18.004h430.004v-18.004H40.998zm14.004 36V496h17.996V371.729l58.73-58.731h-25.453l-33.277 33.277v-33.277H55.002zm289.996 0v46.004h94.004v-46.004h-94.004zM394.271 320a10.272 8 0 0 1 10.272 8a10.272 8 0 0 1-10.272 8A10.272 8 0 0 1 384 328a10.272 8 0 0 1 10.271-8zm-49.273 56.998v46.004h94.004v-46.004h-94.004zM394.271 384a10.272 8 0 0 1 10.272 8a10.272 8 0 0 1-10.272 8A10.272 8 0 0 1 384 392a10.272 8 0 0 1 10.271-8zm-49.273 56.998v46.004h94.004v-46.004h-94.004zM394.271 448a10.272 8 0 0 1 10.272 8a10.272 8 0 0 1-10.272 8A10.272 8 0 0 1 384 456a10.272 8 0 0 1 10.271-8z"/></svg>
              <h5>24 hour front desk</h5>
              </div>
               <div className={style.laundry2}>
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="#000000" d="M9 14.5h6M17 4H7m10 0a3 3 0 0 0 3-3V.5H7.5a3.5 3.5 0 1 0 0 7H20V7a3 3 0 0 0-3-3ZM3.5 23.5h17c0-4 .934-7.79 2.722-11.217l.278-.533v-.25H.5v.25l.278.533C2.566 15.71 3.5 19.5 3.5 23.5Z"/></svg> 
               <h5>Laundry services</h5>
              </div>
              
            </div>
            <div className={style.props2}>
              <div className={style.cafe2}>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M40-440v-80h81q14-127 103-216t216-103v-41h80v41q127 14 216 103t103 216h81v80H40Zm163-80h554q-14-103-92.5-171.5T480-760q-106 0-184.5 68.5T203-520Zm372 80H320v240h222q21 0 40.5-7t35.5-21l166-137q-8-8-18-12t-21-6q-17-3-33 1t-30 15l-108 87H400v-80h146l44-36q5-3 7.5-8t2.5-11q0-10-7.5-17.5T575-440Zm-335 0h-80v280h80v-280Zm0 360h-80q-33 0-56.5-23.5T80-160v-280q0-33 23.5-56.5T160-520h415q85 0 164 29t127 98l27 41-223 186q-27 23-60 34.5T542-120H309q-11 18-29 29t-40 11Zm240-440Z" /></svg>
                <h5>3 restaurants</h5>
              </div>
              <div className={style.confrence}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#000000"><g fill="#000000" fill-rule="evenodd" clip-rule="evenodd"><path d="M5.405 20.368a1.66 1.66 0 0 0-.41-.678a1.5 1.5 0 0 0-.468-.32c.382-.326.657-.761.788-1.247A2.115 2.115 0 0 0 3.75 15.42q.232-.52.538-.998c.09-.14.17-.28.25-.42q.113-.225.25-.438q.128-.188.289-.35h.07q.613.045 1.227 0c.26.27.459.56.688.849c.23.289.26.309.51.618c.248.31.558-.18.498-.688c-.06-.51-.06-.579-.32-.808a2.4 2.4 0 0 0-.438-.4c.375-.318.646-.742.778-1.217a2.125 2.125 0 0 0-1.656-2.734c-.35-.06-.708-.06-1.058 0a1.9 1.9 0 0 0-.748.3a2.6 2.6 0 0 0-1.108 2.275a2 2 0 0 0 .719 1.407a3.2 3.2 0 0 0-.679.389a2.2 2.2 0 0 0-.389.518q-.15.288-.24.599c-.078.35-.111.709-.1 1.068a2 2 0 0 0-.229 0c-.27.045-.527.143-.758.289a2.64 2.64 0 0 0-1.107 2.275a2 2 0 0 0 .718 1.417q-.362.148-.679.379a2.5 2.5 0 0 0-.389.529a2.8 2.8 0 0 0-.24.588a4.8 4.8 0 0 0-.139 1.387a.38.38 0 0 0 .32.449a.41.41 0 0 0 .448-.33c.177-.504.418-.984.719-1.426c.09-.13.17-.27.25-.41q.115-.231.259-.448q.135-.182.289-.35h.07q.614.034 1.227 0c.26.28.459.57.689.849l.399.489q.14.15.259.319c.26.34.688-.449.469-1.028m-.1-10.187a.7.7 0 0 1 .37-.09q.254-.045.508 0a1 1 0 0 1 .808 1.258a1.43 1.43 0 0 1-.708 1.077a.35.35 0 0 0-.14.06a1.06 1.06 0 0 1-.858 0a1 1 0 0 1-.768-1.097a1.46 1.46 0 0 1 .788-1.208m-1.057 7.713a1.44 1.44 0 0 1-.719 1.058a.5.5 0 0 0-.14.07a1.06 1.06 0 0 1-.858 0a1 1 0 0 1-.768-1.068a1.47 1.47 0 0 1 .758-1.187a.9.9 0 0 1 .38-.09q.249-.03.499 0a1 1 0 0 1 .848 1.217m12.481.529a37 37 0 0 1-.72-2.335l-.737-2.325a5 5 0 0 0-.26-.678a1 1 0 0 0-.25-.33a1.7 1.7 0 0 0-.787-.189c-.859 0-2.904-.06-3.423-.12a5 5 0 0 0-.798-.05a1.13 1.13 0 0 0-.579.21a.9.9 0 0 0-.19.36q-.109.268-.189.548S8.07 15.28 8.09 15.31s-2.484 5.517-2.574 6.884a.39.39 0 0 0 .489.25a.36.36 0 0 0 .24-.28a.37.37 0 0 0 .149-.22l2.704-6.185l.888-1.796s.15-.21.2-.34q.155.06.318.1c.53.05 2.615.06 3.483.1h.09q.03.182.08.36l.827 2.194c.26.789.559 1.577.878 2.355c.42.998.868 1.996 1.327 2.993a9 9 0 0 0-.918-.18c-.658-.08-1.317-.11-1.995-.179c-.679-.07-.998-.09-1.517-.11a22 22 0 0 0-2.294.05a29 29 0 0 0-3.792.639a.349.349 0 0 0 .1.688c.499 0 .998-.06 1.486-.07h2.994c.997 0 1.995-.05 2.993 0c.658 0 1.317-.07 1.995-.07q.618-.006 1.228.09c.259 0 .479-.13.479-.279a19.6 19.6 0 0 0-1.218-3.881m7.083 2.414a2.8 2.8 0 0 0-.24-.588a2.5 2.5 0 0 0-.388-.53a4 4 0 0 0-.669-.378a2 2 0 0 0 .718-1.387a2.63 2.63 0 0 0-1.117-2.275a2 2 0 0 0-.748-.29a2 2 0 0 0-.24 0a4.2 4.2 0 0 0-.1-1.067a3 3 0 0 0-.239-.599a2.2 2.2 0 0 0-.39-.518a3.2 3.2 0 0 0-.677-.39a2 2 0 0 0 .718-1.406a2.6 2.6 0 0 0-1.108-2.275a1.9 1.9 0 0 0-.748-.3c-.35-.06-.708-.06-1.058 0a2.126 2.126 0 0 0-1.656 2.734c.13.487.404.922.788 1.247a3.3 3.3 0 0 0-.688 1.048c-.22.459.14.998.419.798c-.07 0 .439-.399.569-.568c.13-.17.429-.58.688-.849q.614.045 1.227 0h.07q.16.162.29.35q.135.213.249.439c.08.14.16.28.25.419q.308.477.538.997a2.105 2.105 0 0 0-1.556 2.694c.131.483.406.914.788 1.238a4 4 0 0 0-.529.249a1.3 1.3 0 0 0-.379.439c-.201.28-.331.606-.38.948c-.139.828.36 1.067.49.878c.13-.19.499-.579.638-.748c.14-.17.27-.32.4-.49s.428-.568.688-.847q.619.04 1.237 0h.06q.156.159.29.339q.138.216.249.449c.08.14.16.28.25.409c.296.443.534.922.708 1.427a.41.41 0 0 0 .449.329a.38.38 0 0 0 .319-.45a4.8 4.8 0 0 0-.18-1.476m-5.986-8.35a.35.35 0 0 0-.14-.06a1.43 1.43 0 0 1-.718-1.078a1 1 0 0 1 .838-1.218q.254-.045.509 0a.7.7 0 0 1 .369.09a1.46 1.46 0 0 1 .758 1.178a1.207 1.207 0 0 1-1.656 1.087zM20.6 19.03a.5.5 0 0 0-.12-.06a1.44 1.44 0 0 1-.718-1.077a1 1 0 0 1 .848-1.217q.25-.03.5 0c.13.002.26.033.378.09a1.47 1.47 0 0 1 .719 1.187a1.197 1.197 0 0 1-1.646 1.077z"/><path d="M13.397 5.322c-.07.08-.15.14-.22.21c-.419.06-.339.639 0 .758q.436.463.779.998q.24.35.449.718q.158.231.289.48c.205.361.356.751.449 1.157a.39.39 0 0 0 .546.335a.38.38 0 0 0 .222-.365a4.4 4.4 0 0 0-.18-1.796a3 3 0 0 0-.329-.709a3 3 0 0 0-.479-.618a4 4 0 0 0-.947-.609q.2-.19.369-.409a2.4 2.4 0 0 0 .449-1.896a2.92 2.92 0 0 0-.998-1.726a2.55 2.55 0 0 0-1.357-.598a2.83 2.83 0 0 0-1.447.22a3.16 3.16 0 0 0-1.646 1.995a2.35 2.35 0 0 0 .698 2.434s.1 0 .15.09a4.4 4.4 0 0 0-.599.33a3.8 3.8 0 0 0-.578.558q-.247.31-.42.668a6.4 6.4 0 0 0-.538 1.697a.39.39 0 0 0 .24.498a.39.39 0 0 0 .488-.239a8.6 8.6 0 0 1 1.118-1.527c.15-.18.3-.359.459-.528s.18-.25.29-.36c.608-.638 1.107-1.217.478-1.506a1.1 1.1 0 0 1-.41-.3a1.41 1.41 0 0 1-.189-1.476a1.9 1.9 0 0 1 .998-1.118c.25-.113.525-.161.798-.14c.266.028.521.124.739.28c.337.24.575.594.668.998c.127.381.098.797-.08 1.157q-.117.18-.26.34"/></g></svg>
                <h5> confrence facilities</h5>
              </div>
              <div className={style.wifi2}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="23" viewBox="0 0 24 24"><path fill="#000000" d="m6.35 15.35l-2.1-2.15q1.475-1.475 3.463-2.337T12 10q2.3 0 4.288.875t3.462 2.375l-2.1 2.1q-1.1-1.1-2.55-1.725T12 13q-1.65 0-3.1.625T6.35 15.35ZM2.1 11.1L0 9q2.3-2.35 5.375-3.675T12 4q3.55 0 6.625 1.325T24 9l-2.1 2.1q-1.925-1.925-4.463-3.013T12 7Q9.1 7 6.562 8.088T2.1 11.1ZM12 21l3.525-3.55q-.675-.675-1.575-1.063T12 16q-1.05 0-1.95.388T8.475 17.45L12 21Z" /></svg>
                <h5>Free wi-fi</h5>
              </div>
              <div className={style.spa2}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="#000000"><g fill="none" stroke="#000000" stroke-width="1.5"><path d="M14.225 15.957a4.28 4.28 0 0 0 5.883-1.437l.645-1.062l.008-8.262L15.57 7.9m-5.795 8.057a4.28 4.28 0 0 1-5.883-1.437l-.645-1.062l-.008-8.262L8.411 7.89M2 22h20" /><path d="M15.367 14.605a4.76 4.76 0 0 0 1.395-3.367v-1.38L12 2L7.238 9.857v1.381a4.762 4.762 0 0 0 8.13 3.367Z" /></g></svg>
                <h5>Wellness and spa center</h5>
              </div>
              <div className={style.disabled2}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="#000000"><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0zM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036c-.01-.003-.019 0-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"/><path fill="#000000" d="M11 4a1 1 0 1 0 0 2a1 1 0 0 0 0-2M8 5a3 3 0 1 1 4 2.83v1.45l2.162.72H16a1 1 0 1 1 0 2h-2a1 1 0 0 1-.316-.051L12 11.387V13a1 1 0 0 0 1 1h2a3 3 0 0 1 2.4 1.2l2.1 2.8h.5a1 1 0 1 1 0 2h-1a1 1 0 0 1-.8-.4l-2.4-3.2a1 1 0 0 0-.8-.4h-2a3 3 0 0 1-3-3V7.829A3.001 3.001 0 0 1 8 5m.272 6.17a4.5 4.5 0 1 0 5.238 6.375l1.78.91a6.5 6.5 0 1 1-7.563-9.21z"/></g></svg>
                  <h5> Accesissible</h5>
              </div>
              <div className={style.check}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16"><path fill="#000000" d="m6.91 9.8l4.74-4.657a.5.5 0 1 1 .7.714l-5.09 5a.5.5 0 0 1-.701 0L3.649 8a.5.5 0 1 1 .701-.714z"/><path fill="#000000" fill-rule="evenodd" d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16m0-1A7 7 0 1 1 8 1a7 7 0 0 1 0 14" clip-rule="evenodd"/></svg>              <h5>24 hour check in</h5>
              </div>
            </div>
            <div className={style.cost}>
              <h4>cost for 1 night</h4>
              <h3>Approximately</h3>
              <h2> 139.21$</h2>
            </div>
          </div>
          

        </article>
      </div>
      {isModalOpen2 && (
        <div className={style.modal}>
          <div className={style.modal__content}>
            <span className={style.close} onClick={closeModal2}>&times;</span>
            <iframe
    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3412.6311965848836!2d29.9526386!3d31.2032377!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c51e97f8ac3f%3A0x3a14171428582f1c!2sHelnan%20Antoniades%20Palace%20Hotel!5e0!3m2!1sen!2seg!4v1760429920352!5m2!1sen!2seg"
   
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />
          </div>
        </div>

      )}

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
              <h2 className={style.card__title}>Crowne Plaza Alexandria Mirage by IHG</h2>
              <span className={style.card__stars}>★★★★★</span>
              <span className={style.card__stars2}>8.7</span>
            </div>
            <div className={style.map}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2em"
                height="2em"
                viewBox="0 0 24 24"
                fill="currentColor"
                style={{ marginRight: '8px', verticalAlign: 'middle' }}
              > 
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
              </svg>
              <button onClick={openModal3}>show on map</button> Victor Emanuel square, Ezbet Saad, Sidi Gaber 
            </div>
            <div className={style.props}>
              <div className={style.breakfast}>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-utensils-icon lucide-utensils"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" /><path d="M7 2v20" /><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" /></svg>
                <h5>Very good breakfast</h5>
              </div>
              <div className={style.pool}>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M80-120v-80q38 0 57-20t75-20q56 0 77 20t57 20q36 0 57-20t77-20q56 0 77 20t57 20q36 0 57-20t77-20q56 0 75 20t57 20v80q-59 0-77.5-20T748-160q-36 0-57 20t-77 20q-56 0-77-20t-57-20q-36 0-57 20t-77 20q-56 0-77-20t-57-20q-36 0-54.5 20T80-120Zm0-180v-80q38 0 57-20t75-20q56 0 77.5 20t56.5 20q36 0 57-20t77-20q56 0 77 20t57 20q36 0 57-20t77-20q56 0 75 20t57 20v80q-59 0-77.5-20T748-340q-36 0-55.5 20T614-300q-57 0-77.5-20T480-340q-38 0-56.5 20T346-300q-59 0-78.5-20T212-340q-36 0-54.5 20T80-300Zm196-204 133-133-40-40q-33-33-70-48t-91-15v-100q75 0 124 16.5t96 63.5l256 256q-17 11-33 17.5t-37 6.5q-36 0-57-20t-77-20q-56 0-77 20t-57 20q-21 0-37-6.5T276-504Zm392-336q42 0 71 29.5t29 70.5q0 42-29 71t-71 29q-42 0-71-29t-29-71q0-41 29-70.5t71-29.5Z" /></svg>
                <h5>outdoor swimming pool</h5>
              </div>
              <div className={style.fitness}>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="m536-84-56-56 142-142-340-340-142 142-56-56 56-58-56-56 84-84-56-58 56-56 58 56 84-84 56 56 58-56 56 56-142 142 340 340 142-142 56 56-56 58 56 56-84 84 56 58-56 56-58-56-84 84-56-56-58 56Z" /></svg>
                <h5>Fitness center</h5>
              </div>
              <div className={style.parking3}>
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="#000000"><g fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><circle cx="12" cy="12" r="10"/><path d="M9 13V8.4c0-.372 0-.558.049-.709a1 1 0 0 1 .642-.642C9.841 7 10.028 7 10.4 7H13a3 3 0 1 1 0 6zm0 0v5"/></g></svg>                <h5>Private parking</h5>
              </div>
              <div className={style.money}>
              <svg xmlns="http://www.w3.org/2000/svg" width="27" height="26" viewBox="0 0 24 24"><path fill="#000000" d="M12 23q-2.8 0-5.15-1.275T3 18.325V21H1v-6h6v2H4.525q1.2 1.8 3.163 2.9T12 21q1.875 0 3.513-.713t2.85-1.924q1.212-1.213 1.925-2.85T21 12h2q0 2.275-.863 4.275t-2.362 3.5q-1.5 1.5-3.5 2.363T12 23Zm-.9-4v-1.3q-1.175-.275-1.913-1.012T8.1 14.75l1.65-.65q.3 1.025.938 1.538t1.462.512q.825 0 1.413-.387t.587-1.213q0-.725-.613-1.175T11.35 12.35q-1.475-.525-2.162-1.25T8.5 9.2q0-1.025.713-1.862T11.15 6.25V5h1.75v1.25q.9.075 1.638.725T15.55 8.5l-1.6.65q-.2-.575-.65-.963T12.05 7.8q-.875 0-1.338.375T10.25 9.2q0 .65.575 1.025t2.075.875q1.8.65 2.4 1.525t.6 1.925q0 .725-.25 1.275t-.663.938q-.412.387-.962.624t-1.175.363V19H11.1ZM1 12q0-2.275.863-4.275t2.362-3.5q1.5-1.5 3.5-2.362T12 1q2.8 0 5.15 1.275t3.85 3.4V3h2v6h-6V7h2.475q-1.2-1.8-3.163-2.9T12 3q-1.875 0-3.513.713t-2.85 1.924Q4.426 6.85 3.714 8.488T3 12H1Z"/></svg>                <h5>currency exchange</h5>
              </div>
              <div className={style.pool3}>
                <svg width="23" height="23" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M45 45c-1.89 0-3.78-.556-5.42-1.67a2.86 2.86 0 0 0-3.16 0A9.64 9.64 0 0 1 31 45c-1.89 0-3.78-.556-5.42-1.67a2.86 2.86 0 0 0-3.16 0A9.64 9.64 0 0 1 17 45c-1.89 0-3.78-.556-5.42-1.67a2.86 2.86 0 0 0-3.16 0A9.64 9.64 0 0 1 3 45m37-12H20m20-11H20m0 16.5v-27a8.5 8.5 0 0 0-17 0v1.955c0 .947.545 1.824 1.481 1.968a6.7 6.7 0 0 0 2.038 0C7.455 15.279 8 14.402 8 13.455V11.5a3.5 3.5 0 1 1 7 0v28m30 .5V11.5a8.5 8.5 0 0 0-17 0v1.955c0 .947.545 1.824 1.481 1.968a6.7 6.7 0 0 0 2.038 0c.936-.144 1.481-1.021 1.481-1.968V11.5a3.5 3.5 0 1 1 7 0V38"/></svg>
                <h5>heated pool</h5>
              </div>
            </div>
            <div className={style.props2}>
              <div className={style.cafe}>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M40-440v-80h81q14-127 103-216t216-103v-41h80v41q127 14 216 103t103 216h81v80H40Zm163-80h554q-14-103-92.5-171.5T480-760q-106 0-184.5 68.5T203-520Zm372 80H320v240h222q21 0 40.5-7t35.5-21l166-137q-8-8-18-12t-21-6q-17-3-33 1t-30 15l-108 87H400v-80h146l44-36q5-3 7.5-8t2.5-11q0-10-7.5-17.5T575-440Zm-335 0h-80v280h80v-280Zm0 360h-80q-33 0-56.5-23.5T80-160v-280q0-33 23.5-56.5T160-520h415q85 0 164 29t127 98l27 41-223 186q-27 23-60 34.5T542-120H309q-11 18-29 29t-40 11Zm240-440Z" /></svg>
                <h5>restaurant</h5>
              </div>
              <div className={style.family}>
                <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 128 128"><path fill="#BDBDBD" d="M116 4H12c-4.42 0-8 3.58-8 8v104c0 4.42 3.58 8 8 8h104c4.42 0 8-3.58 8-8V12c0-4.42-3.58-8-8-8"/><path fill="#E0E0E0" d="M109.7 4H11.5A7.555 7.555 0 0 0 4 11.5v97.9c-.01 4.14 3.34 7.49 7.48 7.5h98.12c4.14.01 7.49-3.34 7.5-7.48V11.5c.09-4.05-3.13-7.41-7.18-7.5z"/><path fill="#FFF" d="M39.7 12.9c0-2.3-1.6-3-10.8-2.7c-7.7.3-11.5 1.2-13.8 4c-1.9 2.3-2.3 5.6-2.6 8.4c-.2 2.2-2.2 14.9 3.5 11.2c.68-.45 1.23-1.07 1.6-1.8c1.2-2.1 1.9-3.5 3.3-5.6c5.3-8.6 18.8-10.5 18.8-13.5"/><path d="M36.03 98.58c-4.1-3-7.22-8.31-7.22-13.77c0-9.08 7.39-16.47 16.47-16.47c6.29 0 10.36 2.18 13.53 6.75c1.23 1.77 2.8 1.44 2.8-.49h.01l-.15-5.11c0-8.79-6.58-12.77-18.91-12.77h-7.61c-10.64 0-17.35 4.71-17.35 13.93v25.13c0 3.83 3.11 6.94 6.94 6.94h6.72c.02-.02.03-.04.05-.06c1.2-1.54 4.72-4.08 4.72-4.08"/><circle cx="39.55" cy="37.88" r="15.22"/><path d="M92.59 56.72h-7.61c-12.33 0-18.91 3.98-18.91 12.77l-.16 5.64c.03.76.21 1.32.97 1.49c.84.19 1.18-.6 1.63-1.3c2.98-4.7 7.47-6.98 13.76-6.98c9.08 0 16.47 7.39 16.47 16.47c0 5.46-2.68 10.3-6.79 13.29c0 0 3.42 2.64 5.06 4.52c.03.03.05.06.08.09h5.9c3.83 0 6.94-3.11 6.94-6.94V70.65c.01-9.22-6.71-13.93-17.34-13.93"/><circle cx="88" cy="37.88" r="15.22"/><circle cx="82.1" cy="84.81" r="12.27"/><path d="M69.91 110.77c-1 0-1.75-.95-1.49-1.91c1.36-4.97 6.95-9.01 13.65-9.01c6.73 0 12.33 3.93 13.67 9.02c.25.96-.49 1.91-1.49 1.91c0-.01-24.34-.01-24.34-.01"/><circle cx="45.5" cy="84.81" r="12.27"/><path d="M33.31 110.77c-1 0-1.75-.95-1.49-1.91c1.36-4.97 6.95-9.01 13.65-9.01c6.73 0 12.33 3.93 13.67 9.02c.25.96-.49 1.91-1.49 1.91c0-.01-24.34-.01-24.34-.01m36.27-15.93c-.84-.95-2.9-1.42-4.45-.17c-.58.47-1.35 1.47-1.35 1.47s-.77-1-1.35-1.47c-1.55-1.25-3.61-.78-4.45.17c-1.33 1.51-1.12 3.49.55 5.54c2.29 2.81 5.25 5.49 5.25 5.5c0 0 2.96-2.68 5.25-5.5c1.67-2.05 1.88-4.03.55-5.54"/></svg> 
                 <h5>Family rooms</h5>
              </div>
              <div className={style.wifi}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="23" viewBox="0 0 24 24"><path fill="#000000" d="m6.35 15.35l-2.1-2.15q1.475-1.475 3.463-2.337T12 10q2.3 0 4.288.875t3.462 2.375l-2.1 2.1q-1.1-1.1-2.55-1.725T12 13q-1.65 0-3.1.625T6.35 15.35ZM2.1 11.1L0 9q2.3-2.35 5.375-3.675T12 4q3.55 0 6.625 1.325T24 9l-2.1 2.1q-1.925-1.925-4.463-3.013T12 7Q9.1 7 6.562 8.088T2.1 11.1ZM12 21l3.525-3.55q-.675-.675-1.575-1.063T12 16q-1.05 0-1.95.388T8.475 17.45L12 21Z" /></svg>
                <h5>Free wi-fi</h5>
              </div>
              <div className={style.spa}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="#000000"><g fill="none" stroke="#000000" stroke-width="1.5"><path d="M14.225 15.957a4.28 4.28 0 0 0 5.883-1.437l.645-1.062l.008-8.262L15.57 7.9m-5.795 8.057a4.28 4.28 0 0 1-5.883-1.437l-.645-1.062l-.008-8.262L8.411 7.89M2 22h20" /><path d="M15.367 14.605a4.76 4.76 0 0 0 1.395-3.367v-1.38L12 2L7.238 9.857v1.381a4.762 4.762 0 0 0 8.13 3.367Z" /></g></svg>
                <h5>Wellness and spa center</h5>
              </div>
              <div className={style.disabled}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="#000000"><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0zM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036c-.01-.003-.019 0-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"/><path fill="#000000" d="M11 4a1 1 0 1 0 0 2a1 1 0 0 0 0-2M8 5a3 3 0 1 1 4 2.83v1.45l2.162.72H16a1 1 0 1 1 0 2h-2a1 1 0 0 1-.316-.051L12 11.387V13a1 1 0 0 0 1 1h2a3 3 0 0 1 2.4 1.2l2.1 2.8h.5a1 1 0 1 1 0 2h-1a1 1 0 0 1-.8-.4l-2.4-3.2a1 1 0 0 0-.8-.4h-2a3 3 0 0 1-3-3V7.829A3.001 3.001 0 0 1 8 5m.272 6.17a4.5 4.5 0 1 0 5.238 6.375l1.78.91a6.5 6.5 0 1 1-7.563-9.21z"/></g></svg>
                  <h5> Accesissible</h5>
              </div>
             <div className={style.laundry}>
              <svg xmlns="http://www.w3.org/2000/svg" width="35" height="30" viewBox="0 0 24 24"><path fill="#000000" d="M17 5H3a2 2 0 0 0-2 2v9h2c0 1.65 1.34 3 3 3s3-1.35 3-3h5.5c0 1.65 1.34 3 3 3s3-1.35 3-3H23v-5l-6-6zM3 11V7h4v4H3zm3 6.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5zm7-6.5H9V7h4v4zm4.5 6.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5zM15 11V7h1l4 4h-5z"/></svg>
              <h5>Airport shuttle</h5>
             </div>
            </div>
            <div className={style.cost}>
              <h4>cost for 1 night</h4>
              <h3>Approximately</h3>
              <h2>  $121.37 </h2>
            </div>
          </div>

        </article>
      </div>
      {isModalOpen3 && (
        <div className={style.modal}>
          <div className={style.modal__content}>
            <span className={style.close} onClick={closeModal3}>&times;</span>
           <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3412.2013264084367!2d29.9460959!3d31.2151512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c5569f53a049%3A0x53e69023a3abed74!2sCrowne%20Plaza%20Alexandria%20Mirage%20by%20IHG!5e0!3m2!1sen!2seg!4v1760438129232!5m2!1sen!2seg"

  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>

          </div>
        </div>

      )}
    </div>
  );
}

export default Hotel;
