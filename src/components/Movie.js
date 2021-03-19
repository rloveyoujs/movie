import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Rating from "@material-ui/lab/Rating";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
  link: {
    textDecoration: "none",
  },
}));

export default function Movie({
  title,
  year,
  summary,
  genres,
  poster,
  rating,
}) {
  const classes = useStyles();

  return (
    <>
      <Grid item xs={12} sm={6}>
        <Link
          to={{
            pathname: "/detail",
            state: {
              title,
            },
          }}
          className={classes.link}
        >
          <Paper className={classes.paper}>
            <Grid container spacing={2} justify="center">
              <Grid item>
                <img src={poster} alt={title} title={title} />
              </Grid>
              <Grid item sm>
                <Grid container direction="column" spacing={1}>
                  <Grid item>
                    <Typography variant="h5" color="textPrimary">
                      {title}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle1">{year}</Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle1">
                      {genres.map((genre, index) =>
                        index === genres.length - 1 ? `${genre}` : `${genre}, `
                      )}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Rating name="read-only" value={rating} readOnly />
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle1">
                      {summary.slice(0, 170)}...
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Link>
      </Grid>
    </>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  rating: PropTypes.number.isRequired,
};
