import React, { useEffect } from 'react';
import Plot from 'plotly.js-basic-dist';
import { TypeUser } from "./interface/User";

type PlotlyChartProps = {
  data: TypeUser[];
};

const PlotlyChart: React.FC<PlotlyChartProps> = ({ data }) => {
  console.log('=>', data);
  
  const plotlyHeightConfig: { [key: string]: number; } = {'1': 260, '2': 320, '3': 370, '4': 430, '5': 500};


  const topic = data.map(item => item.topic);
  const score = data.map(item => item.score);
  const shapesData = [0, 20, 40, 60, 80];

  const getShapes = (): Partial<Plotly.Shape>[] => {
    return shapesData.map((value) => ({
      type: 'line',
      x0: value,
      y0: 0,
      x1: value,
      yref: 'paper',
      y1: 1,
      opacity: 0.5,
      line: {
        color: 'grey',
        width: 1.5,
        dash: 'dot',
      },
    }));
  };

  const shapes = getShapes();

  const layout: Partial<Plotly.Layout> = {
    title: {
      text: 'Security risk score by scan',
      font: {
        size: 24,
        color: 'black',
      },
      x: 0,
    },
    xaxis: {
      autorange: true,
      zeroline: false,
      showgrid: false,
      showline: false,
    },
    yaxis: {
      showline: false,
      automargin: true,
      autorange: true,
    },
    shapes: shapes,
    margin: {
      l: 50,
      r: 50,
      b: 100,
      t: 100,
    },
    showlegend: false,
    annotations: [],
    barmode: 'stack',
    height: plotlyHeightConfig[data.length.toString()],
    bargap: .7,
  };

  const d: Plotly.Data[] = [
    {
      x: score,
      y: topic,
      type: 'bar',
      orientation: 'h',
      mode: 'markers',
      marker: {
        size: 1,
        color: '#2084ff',
      },
    },
    {
      x: score,
      y: topic,
      type: 'scatter',
      orientation: 'h',
      mode: 'markers',
      marker: {
        size: 17,
        color: '#2084ff',
      },
      hoverinfo: 'none',
    }
  ];

  useEffect(() => {
    Plot.newPlot('chart', d, layout);
    return () => {
      Plot.purge('chart');
    };
  }, [data, layout]);

  return <div id="chart" />;
};

export default PlotlyChart;
