import certificatesData from './certificatesData.json';
import './Certificates.css';

const certificates = () => {
  return (
    <div className="certificates" id="certificates">
      <h1 className="title">Certificados</h1>
      <div className="certificates-container">
        {certificatesData.map(({ img, path, title }) => (
          <div data-aos="fade-in" className="certificate" key={title}>
            <div className="certificate-content">
              <a href={path} target="blank">
                <img fetchpriority="high" src={img} alt={title} loading="lazy" title={title} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div >
  )
}

export default certificates;
