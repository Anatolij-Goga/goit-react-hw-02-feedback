import React, { Component } from 'react';
import { FeedbackForm } from './Feedbackform';
import SectionTitle from './SectionTitle/SectionTitle';
import Container from './Container/Container';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return (
      <Container>
        <SectionTitle title="Please leave feedback"></SectionTitle>
        <FeedbackForm />
      </Container>
    );
  }
}

export default App;
