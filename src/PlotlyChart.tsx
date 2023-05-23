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
    title: 'Security risk score by scan',
    yaxis: {
      automargin: true
    },
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
