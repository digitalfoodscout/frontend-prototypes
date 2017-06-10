import React from 'react';
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';

export const RegisterNote = () => (
    <Card>
      <CardHeader
        title="Noch nicht registriert?"
      />
      <CardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
        Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
      </CardText>
      <CardActions>
        <Link to="/register">
          <RaisedButton type="reset" label="Registrieren" fullWidth={true}/>
        </Link>
      </CardActions>
    </Card>
  );

export default RegisterNote;
