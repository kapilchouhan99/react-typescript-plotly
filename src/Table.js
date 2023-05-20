import React from "react";
import Chart from "./Chart"

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: this.props.Users,
      MasterChecked: false,
      SelectedList: [],
    };
  }

  // Select/ UnSelect Table rows
  onMasterCheck(e) {
    let tempList = this.state.list;
    // Check/ UnCheck All Items
    tempList.map((user) => (user.selected = e.target.checked));

    //Update State
    this.setState({
      MasterChecked: e.target.checked,
      list: tempList,
      SelectedList: this.state.list.filter((e) => e.selected),
    });
  }

  // Update List Item's state and Master Checkbox State
  onItemCheck(e, item) {
    let tempList = this.state.list;

    tempList.map((user) => {
      if (user.id === item.id) {
        user.selected = e.target.checked;
      }
      this.setState({
      list: tempList
    });
    });

    //To Control Master Checkbox State
    const totalItems = this.state.list.length;
    const totalCheckedItems = tempList.filter((e) => e.selected).length;

    // Update State
    this.setState({
      MasterChecked: totalItems === totalCheckedItems,
      list: tempList,
      SelectedList: this.state.list.filter((e) => e.selected),
    });
  }

  render() {
    const list = this.state.list
    const selectedRows = list.filter((e) => e.selected)

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      checked={this.state.MasterChecked}
                      id="mastercheck"
                      onChange={(e) => this.onMasterCheck(e)}
                    />
                  </th>
                  <th scope="col">Name</th>
                  <th scope="col">Number</th>
                </tr>
              </thead>
              <tbody>
                {list.map((user) => (
                  <tr key={user.id} className={user.selected ? "selected" : ""}>
                    <th scope="row">
                      <input
                        type="checkbox"
                        checked={user.selected}
                        className="form-check-input"
                        id="rowcheck{user.id}"
                        onChange={(e) => this.onItemCheck(e, user)}
                      />
                    </th>
                    <td>{user.name}</td>
                    <td>{user.number}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <Chart selectedRows={selectedRows} />
      </div>

    );
  }
}

export default Table;
