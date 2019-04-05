import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';

const mapStateToProps = reduxState => ({
    reduxState,
});

class NewPlantForm extends Component {
    state = {
        newPlant: {
            id: 4,
            name: '',
            kingdom: '',
            clade: '',
            order: '',
            family: '',
            subfamily: '',
            genus: '',
        }
    }

    handleNameChange = (property) => event => {
        console.log('event happended')
        this.setState({
            newPlant: {
                ...this.state.newPlant,
                [property]: event.target.value,
            }
        });
    }

    addNewPlant = event => {
        event.preventDefault();
        this.props.dispatch({ type: 'POST_PLANT', payload: this.state.newPlant })
        this.setState({
            newPlant: {
                id: this.state.newPlant.id + 1,
                name: '',
                kingdom: '',
                clade: '',
                order: '',
                family: '',
                subfamily: '',
                genus: '',
            }
        });
    }

    render() {
        return (
            <div>
                <h3>Input Plant Data</h3>
                <form onSubmit={this.addNewPlant} id = "formId">
                    <input type='text' placeholder="Name" value={this.state.newPlant.name} onChange={this.handleNameChange('name')} />
                    <input type='text' placeholder="Kingdom" value={this.state.newPlant.kingdom} onChange={this.handleNameChange('kingdom')} />
                    <input type='text' placeholder="Clade" value={this.state.newPlant.clade} onChange={this.handleNameChange('clade')} />
                    <input type='text' placeholder="Order" value={this.state.newPlant.order} onChange={this.handleNameChange('order')} />
                    <input type='text' placeholder="Family" value={this.state.newPlant.family} onChange={this.handleNameChange('family')} />
                    <input type='text' placeholder="Subfamily" value={this.state.newPlant.subfamily} onChange={this.handleNameChange('subfamily')} />
                    <input type='text' placeholder="Genus" value={this.state.newPlant.genus} onChange={this.handleNameChange('genus')} />

                    <Button type='submit' value='Add New Plant' variant = "contained" color= "primary" > Add New</Button>
                </form>
            </div>
        );
    }
}




export default connect(mapStateToProps)(NewPlantForm);
