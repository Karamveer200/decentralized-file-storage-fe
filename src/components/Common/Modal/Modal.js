import classes from './Modal.module.css';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';

const Modal = ({
  showModal = false,
  closeModal = () => {},
  hideOverlay = false,
  className,
  children
}) => {
  return (
    <div>
      <Rodal
        visible={showModal}
        onClose={closeModal}
        animation="zoom"
        className={`${hideOverlay && classes.hideOverlay} ${className} ${classes.root}`}>
        {children}
      </Rodal>
    </div>
  );
};
export default Modal;
