import React from 'react';
import Layout from '../layouts/Main';
import WebFont from '../layouts/Font';
import Message from './content/message.md';

class Index extends React.Component {
  render () {
    return (
      <Layout>
        <WebFont />
        <Message />
      </Layout>
    )
  }
}

export default Index;
