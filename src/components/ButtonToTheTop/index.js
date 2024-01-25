import { GrLinkTop } from "react-icons/gr";
import './styles.css';

const ButtonToTheTop = () => {
  return (
    <a href="#home" aria-label="Home" className="button-fixed">
      <GrLinkTop />
    </a>
  )
}

export default ButtonToTheTop;
