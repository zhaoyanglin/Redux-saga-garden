import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const styles = {
    card: {
      width: 275,
      margin:25,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      margin: 12,
    },
     
  };
class PlantCard extends Component {

// function PlantCard(props) {

render(){

    const { classes } = this.props;
   
    return (
      <Card className={classes.card} >
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
          Name: {this.props.plantName}
          </Typography>
          <Typography variant="h5" component="h2">
          Kingdom: {this.props.plantKingdom}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
          Clade: {this.props.plantClade}
          </Typography>
          <Typography component="p">
          Order: {this.props.plantOrder}
          </Typography>
          <Typography component="p">
          Family: {this.props.plantFamily}
          </Typography>
          <Typography component="p">
          SubFamily: {this.props.plantSubFamily}
          </Typography>
          <Typography component="p">
          Genus: {this.props.plantGenus}
          </Typography>
        </CardContent>
        <CardActions>
          <Button  onClick={this.props.deletePlant(this.props.plantId)}>Delete</Button>
        </CardActions>
      </Card>
    );
  }
}


const mapStateToProps = reduxState => ({
    reduxState,
});


PlantCard.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(connect(mapStateToProps)(PlantCard));

  