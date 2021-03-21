import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  pos: {
    marginBottom: 12,
  },
});

const ContactCard = ({ data }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              {data.name}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2" component="p">
              Phone number:
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2" component="p">
              {data.phoneNumber}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2" component="p">
              Postcode:
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2" component="p">
              {data.postcode}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ContactCard;
