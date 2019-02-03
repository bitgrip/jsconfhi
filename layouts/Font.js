import React from 'react';

export default class extends React.Component {
  componentDidMount() {
    if (!document.documentElement.classList.contains('wf-active')) {
      import('webfontloader').then(WebFont =>
        WebFont.load({
          google: {
            families: ['Titillium Web']
          }
        })
      )
    }
  }

  render() {
    return (
      <style jsx global>{`
        html {
          font-family: helvetica, roboto, arial, sans-serif, sans-serif;
        }

        html.wf-active {
          font-family: "Titillium Web", helvetica, roboto, arial, sans-serif, sans-serif;
        }
      `}</style>
    )
  }
}
