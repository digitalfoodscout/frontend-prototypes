import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Paper from 'material-ui/Paper';
import { withRouter } from 'react-router-dom';

const FloatingActionButtonRoute = withRouter(({ history, route }) => (
  <FloatingActionButton secondary={true} onTouchTap={() => history.push(route)}>
    <ContentAdd />
  </FloatingActionButton>
));


const DashboardScreen = () => (
  <Paper>
    <FloatingActionButtonRoute route="/fooddiaryentry">
      <ContentAdd />
    </FloatingActionButtonRoute>
    <FloatingActionButtonRoute route="/symptom">
      <ContentAdd />
    </FloatingActionButtonRoute>
  </Paper>
);

export default DashboardScreen;
