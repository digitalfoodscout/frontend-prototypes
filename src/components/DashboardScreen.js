import React from "react";
import FloatingActionButton from "material-ui/FloatingActionButton";
import ContentAdd from "material-ui/svg-icons/content/add";
import Paper from "material-ui/Paper";
import { withRouter } from "react-router-dom";
import { Col, Grid, Row } from "react-flexbox-grid";
import { List, ListItem } from "material-ui/List";
import SubHeader from "material-ui/Subheader";
import FoodIcon from "material-ui/svg-icons/maps/local-dining";
import MediumBadMood from "material-ui/svg-icons/social/sentiment-very-dissatisfied";
import BadMood from "material-ui/svg-icons/social/mood-bad";
import NeutralMood from "material-ui/svg-icons/social/sentiment-neutral";

const FloatingActionButtonRoute = withRouter(({ history, route }) => (
  <FloatingActionButton secondary={true} onTouchTap={() => history.push(route)}>
    <ContentAdd />
  </FloatingActionButton>
));

const SymptomIcon = intensity => {
  switch (intensity) {
    case 0:
      return <NeutralMood/>;
    case 1:
      return <MediumBadMood/>;
    case 2:
      return <BadMood/>;
    default:
      return <MediumBadMood/>;
  }
};


const DashboardScreen = ({ meals, symptoms }) => {
  const ListItemRoute = withRouter(({ history, route, primaryText, secondaryText, leftIcon }) => (
    <ListItem
      primaryText={primaryText}
      secondaryText={secondaryText}
      onTouchTap={() => history.push(route)}
      leftIcon={leftIcon}
    />
  ));
  return (
    <Paper>
      <Grid fluid>
        <Row>
          <Col xs={12} md>
            <List>
              <SubHeader>Mahlzeiten</SubHeader>
              {meals.map(meal =>
                <ListItemRoute
                  key={meal.id}
                  primaryText={meal.name}
                  secondaryText={meal.date.toString()}
                  route={`/meals/edit/${meal.id}`}
                  leftIcon={<FoodIcon/>}
                />
              )}
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
              {symptoms.map(symptom =>
                <ListItemRoute
                  key={symptom.id}
                  primaryText={symptom.name}
                  secondaryText={symptom.date.toString()}
                  route={`/symptom/edit/${symptom.id}`}
                  leftIcon={SymptomIcon(symptom.intensity)}
                />
              )}
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
};

export default DashboardScreen;
