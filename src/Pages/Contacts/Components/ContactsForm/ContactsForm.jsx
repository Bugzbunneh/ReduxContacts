import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addContactAction } from '../../../../Store';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: theme.spacing(2),
  },
  textField: {
    margin: theme.spacing(1),
  },
}));

const postcodeRegex = new RegExp(
  /^([A-Za-z][A-Ha-hJ-Yj-y]?[0-9][A-Za-z0-9]? ?[0-9][A-Za-z]{2}|[Gg][Ii][Rr] ?0[Aa]{2})$/,
);

const ContactsForm = () => {
  const classes = useStyles();
  const { register, errors, handleSubmit } = useForm({
    mode: 'onBlur',
  });
  const dispatch = useDispatch();

  const submitForm = (data) => {
    dispatch(addContactAction({ ...data }));
  };

  return (
    <Paper elevation={3} className="w100">
      <div className={classes.root}>
        <TextField
          id="firstName"
          name="firstName"
          label="First Name"
          className={classes.textField}
          inputRef={register({
            required: true,
          })}
          error={errors.firstName}
          helperText={errors.firstName ? 'First name is required' : ''}
        />
        <TextField
          id="lastName"
          name="lastName"
          label="Last Name"
          className={classes.textField}
          inputRef={register({
            required: true,
          })}
          error={errors.lastName}
          helperText={errors.lastName ? 'Last name is required' : ''}
        />
        <TextField
          id="phoneNumber"
          name="phoneNumber"
          label="Phone Number"
          className={classes.textField}
          inputRef={register({
            required: true,
            validate: (value) => value.length === 11,
          })}
          error={errors.phoneNumber}
          helperText={errors.phoneNumber ? 'Needs to be 11 numbers' : ''}
        />
        <TextField
          id="postcode"
          name="postcode"
          label="Postcode"
          className={classes.textField}
          inputRef={register({
            required: true,
            validate: (value) => postcodeRegex.test(value),
          })}
          error={errors.postcode}
          helperText={errors.postcode ? 'Needs to be a valid UK postcode' : ''}
        />
        <Fab
          color="primary"
          aria-label="add"
          size="medium"
          onClick={handleSubmit(submitForm)}
        >
          <AddIcon />
        </Fab>
      </div>
    </Paper>
  );
};

export default ContactsForm;
