import React, { Component } from 'react';
import Checkbox from './Checkbox';

const items = [
    'Day of Planning', 'Month of Planning', 'Full Service Planning',
];

class Eventform extends Component {
    componentWillMount = () => {
        this.selectedCheckboxes = new Set();
    }

    toggleCheckbox = label => {
        if (this.selectedCheckboxes.has(label)) {
            this.selectedCheckboxes.delete(label);
        } else {
            this.selectedCheckboxes.add(label);
        }
    }

    handleFormSubmit = formSubmitEvent => {
        formSubmitEvent.preventDefault();
        const selected = []
        for (const checkbox of this.selectedCheckboxes) {
            selected.push(checkbox)
        }
        console.log(selected)
    }

    createCheckbox = label => (
        <Checkbox
            label={label}
            handleCheckboxChange={this.toggleCheckbox}
            key={label}
        />
    )

    createCheckboxes = () => (
        items.map(this.createCheckbox)
    )

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">

                        <form onSubmit={this.handleFormSubmit}>
                            {this.createCheckboxes()}

                            <button className="btn btn-default" type="submit">Save</button>
                        </form>

                    </div>
                </div>
            </div>
        );
    }
}

export default Eventform;

