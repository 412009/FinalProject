import style from './places.module.css';
import { Link } from 'react-router-dom';

function Section({ region, image}) {
 
  const path = `/${region.toLowerCase().replace(/\s+/g, '-')}`;

 
  
  return (
    <>
      <div className={style.container9}>
        <article className={style.card__article}>
         <Link to={path} > <img src={image} alt={region} className={style.card__img}/></Link>
          <div className={style.card__data}>
              <h2 className={style.card__title}>{region}</h2>
          </div>
        </article>
      </div>
    </>
  );
}

export default Section;
