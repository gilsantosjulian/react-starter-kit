import React from 'react';

interface HelloProps {
  compiler: string;
  framework: string;
}

export default class HelloWorld extends React.Component<HelloProps, {}> {
  render() {
    const { compiler, framework } = this.props;

    return (
      <h1>
        Hello from {compiler} and {framework}!
      </h1>
    );
  }
}
