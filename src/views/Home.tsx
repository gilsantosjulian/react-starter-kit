import React from 'react';

interface HomeProps {
  compiler: string;
  framework: string;
  bundler?: string;
}

export default class Home extends React.Component<HomeProps, {}> {
  render() {
    const { compiler, framework, bundler } = this.props;

    return <h1>Hello from {compiler} and {framework} and {bundler ? bundler : ':)'}!</h1>;
  }
}