import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  link: {
    color: "white",
    textDecoration: "none",
  },
}));

export default function Navigation({ name }) {
  const classes = useStyles();

  function linkEl() {
    switch (name) {
      case "About":
        return (
          <Link to="/" className={classes.link}>
            <Button color="inherit">Home</Button>
          </Link>
        );
      case "Detail":
        return (
          <>
            <Link to="/" className={classes.link}>
              <Button color="inherit">Home</Button>
            </Link>
            <Link to="/about" className={classes.link}>
              <Button color="inherit">About</Button>
            </Link>
          </>
        );
      default:
        return (
          <Link to="/about" className={classes.link}>
            <Button color="inherit">About</Button>
          </Link>
        );
    }
  }

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            {name}
          </Typography>
          {linkEl()}
        </Toolbar>
      </AppBar>
    </>
  );
}

Navigation.propTypes = {
  name: PropTypes.string.isRequired,
};
