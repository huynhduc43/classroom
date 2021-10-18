import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { grey } from '@mui/material/colors';

import CreateClassButton from './CreateClassButton';
import { styled } from '@mui/system';

const StyledAppBar = styled(AppBar)`
  background-color: ${grey[900]};
  color: ${grey[100]};
`

export default function MenuAppBar({ handleRender }) {
  return (
    <StyledAppBar elevation={0} position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} textAlign="left">
          Classroom
        </Typography>
        <CreateClassButton handleRender={handleRender} />
      </Toolbar>
    </StyledAppBar>
  );
}