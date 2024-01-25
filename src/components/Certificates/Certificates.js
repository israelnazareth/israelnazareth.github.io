/* eslint-disable react-hooks/rules-of-hooks */
import { useRef } from 'react';
import certificatesData from './certificatesData.json';
import './Certificates.css';
import { register } from 'swiper/element/bundle';
import useWindowSize from '../../hooks/useWindowSize';

register();

const certificates = () => {
  const swiperElRef = useRef(null);

  const { width } = useWindowSize();

  return (
    <div className="certificates" id="certificates">
      <h1 className="title">Certificados</h1>
      <div className="certificates-container">
        <swiper-container
          ref={swiperElRef}
          slides-per-view={width > 768 ? 2 : 1}
          navigation="true"
          pagination="true"
          centered-slides="true"
          loop="true"
          space-between="20"
        >
          {certificatesData.map(({ img, path, title }) => (
            <swiper-slide>
              <div data-aos="fade-in" className="certificate" key={title}>
                <div className="certificate-content">
                  <a href={path} target="blank">
                    <img fetchpriority="high" src={img} alt={title} loading="lazy" title={title} />
                  </a>
                </div>
              </div>
            </swiper-slide>
          ))}
        </swiper-container>
      </div>
    </div >
  )
}

export default certificates;
