import React from "react";
import Plot from 'react-plotly.js';

class Chart extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const data = this.props.selectedRows
    const names = data.map((item) => item.name )
    const number = data.map((item) => item.number )

    return (
      <Plot
        data={[
          {
            x: number,
            y: names,
            type: 'bar',
            orientation: 'h'
          }
        ]}
      />
    );
  }
}

export default Chart;
