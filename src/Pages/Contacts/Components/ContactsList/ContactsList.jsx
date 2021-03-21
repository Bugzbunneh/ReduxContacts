import ContactCard from './Components/ContactCard/ContactCard';
import Grid from '@material-ui/core/Grid';

const ContactsList = ({ data }) => {
  return (
    <div className="mtop-10">
      <Grid container spacing={2}>
        {data.map((contact) => (
          <Grid item md={6} lg={4} key={contact.name}>
            <ContactCard data={contact} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ContactsList;
