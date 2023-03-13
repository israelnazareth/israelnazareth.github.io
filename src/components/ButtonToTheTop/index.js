import { useRef } from "react";
import { GrLinkTop } from "react-icons/gr";
import './styles.css';

const ButtonToTheTop = () => {
  const refButton = useRef(null);

  window.onscroll = () => scrollFunction();

  function scrollFunction() {
    let button = refButton.current.style;
    window.scrollY > 400 ?
      button.display = "block" :
      button.display = "none";
  }

  return (
    <a ref={refButton} href="#home" className="button-fixed">
      <GrLinkTop />
    </a>
  )
}

export default ButtonToTheTop;
