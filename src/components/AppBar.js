import * as React from 'react';
import MuiAppBar from '@mui/material/AppBar';

function AppBar(props) {
  return <MuiAppBar elevation={0} position="sticky-top" color="primary" {...props} />;
}

export default AppBar;
