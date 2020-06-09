import React, { Component } from "react";
// HOC is a function that takes a component as a parameter
// and returns a new component wrapping the given component
// and "supercharging" it by giving it some extra abilities

class Toggler extends Component {
    // Default Prop: Add default props to be passed to Favorite component, but overrident in Menu Component
    static defaultProps = {
        defaultOnValue: false
    }

    state = {
        // value passed into the withToggler Component, 
        //which will be passed into the superchanged component
        on: this.props.defaultOnValue
    };

    toggle = () => {
        //implicit return
        this.setState(prevState => ({on: !prevState.on}))
    }
    // The Toggler component renders the component (Menu or favorite) passedinto it, add passes its arguments as additional properties (state), that will be updated in Toggler.
    render() {
        console.log(this.state.on);
        let args = {
            on: this.state.on,
            toggle: this.toggle
        };
        return (
            <div>
                {this.props.render(args)}
            </div>
        )
    }
}
// Moved above: Add default props to be passed to Favorite component, but overrident in Menu Component
// Toggler.defaultProps = {
//     defaultOnValue: false
// }

export default Toggler;
