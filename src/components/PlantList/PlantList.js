import React, { Component } from 'react';
import { connect } from 'react-redux';
//import Button from '@material-ui/core/Button';
//import Card from '@material-ui/core/Card';
//import { withStyles } from '@material-ui/core/styles';
//import PropTypes from 'prop-types';
//import CardActions from '@material-ui/core/CardActions';
//import CardContent from '@material-ui/core/CardContent';
//import Typography from '@material-ui/core/Typography';
import PlantCard from '../PlantCard/PlantCard'


const mapStateToProps = reduxState => ({
    reduxState,
});

class PlantList extends Component {
    componentDidMount() {

        this.getPlant();
    }

    getPlant() {
        this.props.dispatch({ type: 'FETCH_PLANT' })
    }

    deletePlant = (key) => () => {
        console.log('key', key);

        this.props.dispatch({ type: 'DELETE_PLANT', payload: key })
    }

    render() {
        return (
            <div>
            <h3>These are your plants</h3>
            <div className="flex-container"> 
                {this.props.reduxState.plantList.map((plantItem) => {
                    return (
                        <>
                            <PlantCard plantId={plantItem.id}
                                plantName={plantItem.name}
                                plantKingdom={plantItem.kingdom}
                                plantClade={plantItem.clade}
                                plantOrder={plantItem.order}
                                plantFamily={plantItem.family}
                                plantSubFamily={plantItem.subfamily}
                                plantGenus={plantItem.genus}
                                deletePlant={this.deletePlant}
                            />
                        </>
                    );
                })}
              </div> 
            </div>
            
        );
    }
}

export default connect(mapStateToProps)(PlantList);


