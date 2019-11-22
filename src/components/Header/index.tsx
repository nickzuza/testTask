import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { ObjectLiteral } from "../../models/ObjectLiteral"

const Header = ({ classes }: ObjectLiteral) => (
  <header>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}> FakeApi App </Typography>
      </Toolbar>
    </AppBar>
  </header>
)

export default Header;