import React from 'react';

class Moodslider extends React.Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (event) => {
        this.props.setMoodsliderValue(this.props.id, event.target.value);
    };

    render() {
        return (
            <div className="d-flex my-4">
                <span className="font-weight-bold col-2 text-center">
                    {this.props.leftMood}
                </span>
                <input className="custom-range" type="range" min="-1" max="1" step="1"
                    value={this.props.value}
                    onChange={this.handleChange} />
                <span className="font-weight-bold col-2 text-center">
                    {this.props.rightMood}
                </span>
            </div>
        )
    }
}

class Moodsliders extends React.Component {

    createMoodsliders() {
        const slidersElements = [];
        this.props.moodsliders.forEach((moodslider, index) => {
            slidersElements.push(
                <Moodslider id={moodslider.id}
                    key={moodslider.id}
                    leftMood={moodslider.leftMood}
                    rightMood={moodslider.rightMood}
                    value={moodslider.value}
                    setMoodsliderValue={this.props.setMoodsliderValue} />);
        })
        return slidersElements;
    };

    render() {

        return (
            <div className="py-4">
                <form id="mood_sliders" className="range-field m-auto w-75">
                    {this.createMoodsliders()}
                </form>
            </div>
        )
    }
}

export default Moodsliders;