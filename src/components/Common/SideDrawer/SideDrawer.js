import Drawer from '@mui/material/Drawer';

import classes from './SideDrawer.module.css';

const SideDrawer = ({ isSideModalOpen, onClose, children }) => {
  return (
    <Drawer
      anchor="right"
      open={isSideModalOpen}
      onClose={onClose}
      transitionDuration={400}
      PaperProps={{ style: { width: '690px' } }}
      className={`${classes.root} `}>
      <>{children}</>
    </Drawer>
  );
};

export default SideDrawer;
