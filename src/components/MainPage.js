import React from 'react';
import Moodsliders from './Moodsliders';
import Movies from './Movies';

class MainPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      moodsliders: [
        { id: 0, value: 0, leftMood: "Agitated", rightMood: "Calm" },
        { id: 1, value: 0, leftMood: "Happy", rightMood: "Sad" },
        { id: 2, value: 0, leftMood: "Tired", rightMood: "Wide Awake" },
        { id: 3, value: 0, leftMood: "Scared", rightMood: "Fearless" }
      ]

    };
    this.setMoodsliderValue = this.setMoodsliderValue.bind(this);
  }

  setMoodsliderValue(id, value) {
    const updatedMoodsliders = this.state.moodsliders.map(moodslider => {
      if (moodslider.id === id) {
        moodslider.value = value;
      }
      return moodslider;
    });

    this.setState({
      moodsliders: updatedMoodsliders
    })
  }

  getSelectedMoods() {
    let selectedMoods = [];
    this.state.moodsliders.forEach(moodslider => {
      if (moodslider.value === '-1') {
        selectedMoods.push(moodslider.leftMood);
      }
      if (moodslider.value === '1') {
        selectedMoods.push(moodslider.rightMood);
      }
    })
    return selectedMoods;
  }

  filterMoviesContent() {
    const movies = this.props.moviesContent.programmeData.programme;
   if (this.getSelectedMoods().length > 0) {
      const result = movies.filter(movie => this.containsAllMoods(movie.mood, this.getSelectedMoods()));
      console.log(result);
      return result;
   }
   return [];
  };

  containsAllMoods(movieMoods, selectedMoods) {
    
    for (let i = 0; i < selectedMoods.length; i++) {
      if (!movieMoods.includes(selectedMoods[i])) {
        return false;
      }
    }
    return true;
  }

  render() {
    return (
      <div>
        <Moodsliders moodsliders={this.state.moodsliders}
          setMoodsliderValue={this.setMoodsliderValue} />
        <Movies suggestedMovies={this.filterMoviesContent()} />
      </div>
    )
  }
}

export default MainPage;