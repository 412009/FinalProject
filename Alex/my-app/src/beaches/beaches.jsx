import style from './beaches.module.css';
import pic1 from '../assets/montazabeach.jpg';
import pic2 from '../assets/montazabeach2.avif';
import pic3 from '../assets/montazabeach3.avif';
import pic4 from '../assets/montazabeach4.jpg';
import pic5 from '../assets/maamoura.jpeg';
import pic6 from '../assets/maamoura2.jpg';
import pic7 from '../assets/maamoura3.jpg';
import pic8 from '../assets/maamoura4.webp';
import pic10 from '../assets/sanstefano.jpg';
import pic9 from '../assets/sanstefano2.webp';
import pic11 from '../assets/sanstefano3.avif';
import pic12 from'../assets/sanstefano4.jpg'
import { useRef, useState } from 'react';
function Hotel() {

  const images = [pic1, pic2, pic3, pic4];
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


  const images2 = [ pic5, pic6,pic7,pic8];
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


  const images3 = [pic9,pic10,pic11,pic12];
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
              <h2 className={style.card__title}>Montazah Aida beach</h2>
              <span className={style.card__stars}>★★★★</span><span class={style.halfstar}>★</span>
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
              <button onClick={openModal}>show on map</button>  Al Mandarah Bahri, Montaza 2
            </div>
            <div className={style.overview}>
              <h2>Overview</h2>
              <h4>Montazah Aida Beach, located in Sidi Bishr, offers a tranquil and exclusive atmosphere compared to public beaches. The well-maintained facilities such as loungers, umbrellas, and private cabanas provide a luxurious beach experience. The clear waters and soft sands create a relaxing environment for visitors. This beach has been featured in classic and modern movies, making it a place of memories and history.
                Why you should go</h4>
            </div>
            <hr></hr>
            <div className={style.expect}>
              <div className={style.flex}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="#f2df07" d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45L7.77 18l1.12-4.81l-3.73-3.23l4.92-.42L12 5l1.92 4.53l4.92.42l-3.73 3.23L16.23 18z" /></svg>               <h2>What to expect?</h2>
              </div>
              <ul>
                <li><h3>Engage in swimming in the wonderful sea waters</h3></li>
                <li><h3>Enjoy a serene and selective climate compared to public beaches</h3></li>
                <li><h3>Relax on well-maintained facilities including loungers, umbrellas, and cabanas</h3></li>
              </ul>
              <hr></hr><div className={style.tips}>
                <div className={style.flex}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path fill="#f2df07" d="M14.5 9.5C14.5 6.47 12.03 4 9 4S3.5 6.47 3.5 9.5c0 2.47 1.49 3.89 2.35 4.5h6.3c.86-.61 2.35-2.03 2.35-4.5z" opacity=".3" /><path fill="#f2df07" d="M7 20h4c0 1.1-.9 2-2 2s-2-.9-2-2zm-2-1h8v-2H5v2zm11.5-9.5c0 3.82-2.66 5.86-3.77 6.5H5.27c-1.11-.64-3.77-2.68-3.77-6.5C1.5 5.36 4.86 2 9 2s7.5 3.36 7.5 7.5zm-2 0C14.5 6.47 12.03 4 9 4S3.5 6.47 3.5 9.5c0 2.47 1.49 3.89 2.35 4.5h6.3c.86-.61 2.35-2.03 2.35-4.5zm6.87-2.13L20 8l1.37.63L22 10l.63-1.37L24 8l-1.37-.63L22 6l-.63 1.37zM19 6l.94-2.06L22 3l-2.06-.94L19 0l-.94 2.06L16 3l2.06.94L19 6z" /></svg>
                  <h2>Tips</h2>
                </div>
                <ul>
                  <li><h3>Experience a blend of natural beauty and historical significance within Montazah Palace grounds.</h3></li>
                  <li><h3>Bring sunscreen and water as there might not be many vendors around selling these items.</h3></li>
                  <li><h3>Visit during weekdays to avoid crowds.</h3></li>
                </ul>
              </div>
            </div>

            <div className={style.flex}>
              <div className={style.cost1}>
                <h3>ticket price</h3>
                <h4> 50 LE</h4>
              </div>
              <h5>(free for children less than 6years)</h5>
              <div className={style.date2}>
                <h2>opened from 7 am to 11 pm</h2>
              </div>
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13638.848765290295!2d30.0110761!3d31.284055349999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5d06651a7d0d9%3A0x60063fe15ed1f077!2sMontazah%20Aida%20Beach!5e0!3m2!1sen!2seg!4v1760517340866!5m2!1sen!2seg"
                width={600}
                height={450}
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
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
              <h2 className={style.card__title}>Maamoura Beach</h2>
              <span className={style.card__stars}>★★★★</span><span className={style.plain}>★</span>
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
              <button onClick={openModal2}>show on map</button> Al Mandarah Bahri Montaza 2
            </div>
            <div className={style.overview}>
              <h2>Overview</h2>
              <h4>Maamoura Beach is one of Alexandria's most distinctive beaches. Not only does it enjoy privacy thanks to its private gate, which separates it from the rest of Alexandria's beaches,
                It also boasts a wonderful Corniche area with a vast green area and exquisite architectural design. It's an ideal place for strolling and cycling.
                From the above, we can conclude that Maamoura Beach is one of Alexandria's most popular private beaches.</h4>
            </div>
            <hr></hr>
            <div className={style.expect}>
              <div className={style.flex}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="#f2df07" d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45L7.77 18l1.12-4.81l-3.73-3.23l4.92-.42L12 5l1.92 4.53l4.92.42l-3.73 3.23L16.23 18z" /></svg>               <h2>What to expect?</h2>
              </div>
              <ul>
                <li><h3>Engage in swimming in the wonderful sea waters</h3></li>
                <li><h3>Eat Food at the reasturant along Maamoura Beach</h3></li>
                <li><h3>Enjoy the stunning sea view</h3></li>
              </ul>
              <hr></hr><div className={style.tips}>
                <div className={style.flex}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path fill="#f2df07" d="M14.5 9.5C14.5 6.47 12.03 4 9 4S3.5 6.47 3.5 9.5c0 2.47 1.49 3.89 2.35 4.5h6.3c.86-.61 2.35-2.03 2.35-4.5z" opacity=".3" /><path fill="#f2df07" d="M7 20h4c0 1.1-.9 2-2 2s-2-.9-2-2zm-2-1h8v-2H5v2zm11.5-9.5c0 3.82-2.66 5.86-3.77 6.5H5.27c-1.11-.64-3.77-2.68-3.77-6.5C1.5 5.36 4.86 2 9 2s7.5 3.36 7.5 7.5zm-2 0C14.5 6.47 12.03 4 9 4S3.5 6.47 3.5 9.5c0 2.47 1.49 3.89 2.35 4.5h6.3c.86-.61 2.35-2.03 2.35-4.5zm6.87-2.13L20 8l1.37.63L22 10l.63-1.37L24 8l-1.37-.63L22 6l-.63 1.37zM19 6l.94-2.06L22 3l-2.06-.94L19 0l-.94 2.06L16 3l2.06.94L19 6z" /></svg>
                  <h2>Tips</h2>
                </div>
                <ul>
                  <li><h3>Rent bikes for night out.</h3></li>
                  <li><h3>Visit during weekdays to avoid crowds.</h3></li>
                  <li><h3>Visit Maamoura Amusement park.</h3></li>
                </ul>
              </div>
            </div>

            <div className={style.flex}>
              <div className={style.cost}>
                <h4>ticket price(public beach)</h4>
                <h2> 75 LE</h2>
              </div>
              <div className={style.cost}>
                <h4>ticket price(special beach)</h4>
                <h2> 200 LE</h2>
              </div>
              <div className={style.date}>
                <h2>opened from 7 am to 6 pm</h2>
              </div>
            </div>

          </div>


        </article>
      </div>
      {isModalOpen2 && (
        <div className={style.modal}>
          <div className={style.modal__content}>
            <span className={style.close} onClick={closeModal2}>&times;</span>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6819.0725475543995!2d30.01993985139915!3d31.288919933240763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5d0ee2eb4dc57%3A0xdfb608e08a88d82c!2sAl%20Mamurah%2C%20Al%20Mandarah%20Bahri%2C%20Montaza%202%2C%20Alexandria%20Governorate!5e0!3m2!1sen!2seg!4v1760515428147!5m2!1sen!2seg"
              width={600}
              height={450}
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
              <h2 className={style.card__title}> San Stefano Beach </h2>
              <span className={style.card__stars}>★★★★</span><span class={style.halfstar}>★</span>
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
              <button onClick={openModal3}>show on map</button> San Stefano, El Raml 1,El-Geish Road
            </div>
            <div className={style.overview}>
              <h2>Overview</h2>
              <h4>San Stefano Beach is one of the most upscale and beautiful beaches in Alexandria. it's an ideal destination for those looking to spend a special day in luxury and relaxation. Combining enchanting nature with luxurious amenities, the beach is the perfect choice for sea lovers and those who enjoy relaxation amidst a sophisticated atmosphere and comprehensive servicesbeaches.

                The beach boasts clear blue waters and soft golden sands. It also offers a variety of activities and facilities to suit all tastes.</h4>
            </div>
            <hr></hr>
            <div className={style.expect}>
              <div className={style.flex}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="#f2df07" d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45L7.77 18l1.12-4.81l-3.73-3.23l4.92-.42L12 5l1.92 4.53l4.92.42l-3.73 3.23L16.23 18z" /></svg>               <h2>What to expect?</h2>
              </div>
              <ul>
                <li><h3>Enjoy waklways extending to the sea,offering a rare opportunity to walk through the water and capture some stunning souvenir photos</h3></li>
                <li><h3>Embrace a fun adventure by swimming in the clear waters,or enjoy exciting water sports like diving and surfing under the supervision of proffesional instructors</h3></li>
                <li><h3>Enjoy the stunning sea view</h3></li>
                <li><h3>For children,the beac features a safe and fun play area </h3></li>
              </ul>
              <hr></hr>
              <div className={style.tips}>
                <div className={style.flex}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path fill="#f2df07" d="M14.5 9.5C14.5 6.47 12.03 4 9 4S3.5 6.47 3.5 9.5c0 2.47 1.49 3.89 2.35 4.5h6.3c.86-.61 2.35-2.03 2.35-4.5z" opacity=".3" /><path fill="#f2df07" d="M7 20h4c0 1.1-.9 2-2 2s-2-.9-2-2zm-2-1h8v-2H5v2zm11.5-9.5c0 3.82-2.66 5.86-3.77 6.5H5.27c-1.11-.64-3.77-2.68-3.77-6.5C1.5 5.36 4.86 2 9 2s7.5 3.36 7.5 7.5zm-2 0C14.5 6.47 12.03 4 9 4S3.5 6.47 3.5 9.5c0 2.47 1.49 3.89 2.35 4.5h6.3c.86-.61 2.35-2.03 2.35-4.5zm6.87-2.13L20 8l1.37.63L22 10l.63-1.37L24 8l-1.37-.63L22 6l-.63 1.37zM19 6l.94-2.06L22 3l-2.06-.94L19 0l-.94 2.06L16 3l2.06.94L19 6z" /></svg>
                  <h2>Tips</h2>
                </div>
                <ul>
                  <li><h3>Try the variety restaurant and cafes and shops surronding the beach to ensure complete experience combining fun relaxation and shopping.</h3></li>

                </ul>
              </div>
            </div>

            <div className={style.flex3}>
              <div className={style.cost}>
                <h4>ticket price(sunday to wednesday)</h4>
                <h2> 1850 LE</h2>
              </div>
              <div className={style.cost}>
                <h4>ticket price(thursday to friday)</h4>
                <h2> 2400 LE</h2>
              </div>
              <div className={style.date3}>
                <h2>opened from 10 am to 5 pm</h2>
              </div>
            </div>
          </div>

        </article>
      </div>
      {isModalOpen3 && (
        <div className={style.modal}>
          <div className={style.modal__content}>
            <span className={style.close} onClick={closeModal3}>&times;</span>
            <>
              {/* Hello world */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d54577.476337347536!2d29.999116!3d31.2458689!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c52f6726a757%3A0x57d19e5f823613e!2sSan%20Dtephano%20Beach!5e0!3m2!1sen!2seg!4v1760522826295!5m2!1sen!2seg"
                width={600}
                height={450}
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </>

          </div>
        </div>

      )}
    </div>
  );
}

export default Hotel;
