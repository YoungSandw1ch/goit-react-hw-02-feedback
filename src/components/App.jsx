import React, { Component } from 'react';
import { Box } from './Common';
import { Section } from './Section';
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return (
      <Box>
        <Section title="Please leave feedback"></Section>
      </Box>
    );
  }
}
