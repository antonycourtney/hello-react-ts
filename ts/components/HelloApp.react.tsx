/**
 * Hello World React App
 */

import * as React from 'react';

interface Props {
  message: string;
}

class HelloApp extends React.Component<Props,{}> {
  render() {
    return (
      <div>
        <h1>Hello, {this.props.message}!</h1>
      </div>
    );
  }
}

export default HelloApp;