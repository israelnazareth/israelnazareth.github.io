import { useEffect, useRef } from 'react';
import './styles.css'

export default function ProgressBar() {
  const progressBar = useRef(null)

  useEffect(() => {
    window.onscroll = () => setProgressBarWidth();
  }, [])

  function setProgressBarWidth() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    progressBar.current.style.width = scrolled + "%";
  }

  return (
    <div className="progress-container">
      <div ref={progressBar} className="progress-bar" id="myBar"></div>
    </div>
  )
}