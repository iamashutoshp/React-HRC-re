import { purple, deepOrange } from "@material-ui/core/colors";

import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

export default withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
    "&:hover": {
      backgroundColor: purple[700]
    },
    variant: "contained"
  }
}))(Button);
