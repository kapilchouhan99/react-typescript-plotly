import React, { useEffect } from 'react';
import Plot from 'plotly.js-basic-dist';
import {TypeUser} from "./interface/User";

type PlotlyChartProps = {
  // data: Plotly.Data[];
  data: TypeUser[];
  // layout: Partial<Plotly.Layout>;
};

const PlotlyChart: React.FC<PlotlyChartProps> = ({ data }) => {
  const topic = data.map((item) => item.topic );
  const score = data.map((item) => item.score );

  const layout: Partial<Plotly.Layout> = {
    title: {
      text:'Security risk score by scan',
      font: {
        size: 24,
        color: "black"
      },
      xref: 'paper',
      x: 0,
    },
    xaxis: {
      zeroline: false
    },
    yaxis: {
      showline: false,
      automargin: true
    },
    
    shapes: [{
        type: 'line',
        x0: 0,
        y0: 0,
        x1: 0,
        yref: 'paper',
        y1: 1,
        opacity: 0.5,
        line: {
          color: 'grey',
          width: 1.5,
          dash: 'dot'
        }
      },
      {
        type: 'line',
        x0: 20,
        y0: 0,
        x1: 20,
        yref: 'paper',
        y1: 1,
        opacity: 0.5,
        line: {
          color: 'grey',
          width: 1.5,
          dash: 'dot'
        }
      },
      {
        type: 'line',
        x0: 40,
        y0: 0,
        x1: 40,
        yref: 'paper',
        y1: 1,
        opacity: 0.5,
        line: {
          color: 'grey',
          width: 1.5,
          dash: 'dot'
        }
      },
      {
        type: 'line',
        x0: 60,
        y0: 0,
        x1: 60,
        yref: 'paper',
        y1: 1,
        opacity: 0.5,
        line: {
          color: 'grey',
          width: 1.5,
          dash: 'dot'
        }
      },
      {
        type: 'line',
        x0: 80,
        y0: 0,
        x1: 80,
        yref: 'paper',
        y1: 1,
        opacity: 0.5,
        line: {
          color: 'grey',
          width: 1.5,
          dash: 'dot'
        }
      }],
    margin: {
      l: 50, r: 50, b: 100, t: 100
    } 
  };
  const d: Plotly.Data[]  = [{x: score, y: topic, type: 'bar', orientation: 'h'}];

  useEffect(() => {
    Plot.newPlot('chart', d, layout);
    return () => {
        Plot.purge('chart');
    };
  }, [data, layout]);

  return <div id="chart" />;
};

export default PlotlyChart;
