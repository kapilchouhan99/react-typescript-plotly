import {TypeUser} from "./interface/User";
import PlotlyChart from "./PlotlyChart";

const Chart = (props: {selectedRows: TypeUser[]}) => {
  const data = props.selectedRows;
  return <PlotlyChart data={data} />
}

export default Chart;
