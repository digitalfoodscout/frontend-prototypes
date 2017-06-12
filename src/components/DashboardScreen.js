import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Paper from 'material-ui/Paper';
import { withRouter } from 'react-router-dom';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { List, ListItem } from 'material-ui/List';
import SubHeader from 'material-ui/Subheader';
import FoodIcon from 'material-ui/svg-icons/maps/local-dining';
import MediumBadMood from 'material-ui/svg-icons/social/sentiment-very-dissatisfied';
import BadMood from 'material-ui/svg-icons/social/mood-bad';
import NeutralMood from 'material-ui/svg-icons/social/sentiment-neutral';

const FloatingActionButtonRoute = withRouter(({ history, route }) => (
  <FloatingActionButton secondary={true} onTouchTap={() => history.push(route)}>
    <ContentAdd />
  </FloatingActionButton>
));


const DashboardScreen = () => (
  <Paper>
      <Grid fluid>
        <Row>
          <Col xs={12} md>
            <List>
              <SubHeader>Mahlzeiten</SubHeader>
              <ListItem
                primaryText="Aal mit Küchenabfall (+ 2 weitere)"
                secondaryText="10:12"
                leftIcon={<FoodIcon/>}
              />
              <ListItem
                primaryText="Gegarte Taube mit Küchenabfall"
                secondaryText="10:20"
                leftIcon={<FoodIcon/>}
              />
              <ListItem
                primaryText="Irgendwas mit Küchenabfall"
                secondaryText="10:30"
                leftIcon={<FoodIcon/>}
              />
            </List>
            <Row>
              <Col xsOffset={10} xs={2}>
                <FloatingActionButtonRoute route="/fooddiaryentry">
                  <ContentAdd />
                </FloatingActionButtonRoute>
              </Col>
            </Row>
          </Col>
          <Col xs={12} md>
            <List>
              <SubHeader>Symptome</SubHeader>
              <ListItem
                primaryText="Bauchschmerzen"
                secondaryText="10:40"
                leftIcon={<MediumBadMood/>}
              />
              <ListItem
                primaryText="Kopfschmerzen"
                secondaryText="18:00"
                leftIcon={<BadMood/>}
              />
              <ListItem
                primaryText="Schläfrigkeit"
                secondaryText="19:40"
                leftIcon={<NeutralMood/>}
              />
            </List>
            <Row>
              <Col xsOffset={10} xs={2}>
                <FloatingActionButtonRoute route="/symptom">
                  <ContentAdd />
                </FloatingActionButtonRoute>
              </Col>
            </Row>
          </Col>
        </Row>
      </Grid>
  </Paper>
);

export default DashboardScreen;
