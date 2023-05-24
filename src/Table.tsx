import {ChangeEvent, useState} from "react";
import Chart from "./Chart"
import {TypeUser} from "./interface/User";

const Table = (props: { Users:  TypeUser[]}) => {
  const [list, setList] = useState(props.Users);
  const [masterChecked, setMasterChecked] = useState(false);
  const [selectedList, setSelectedList] = useState<TypeUser[]>(list);

  // Select/ UnSelect Table rows
  const onMasterCheck = (e: ChangeEvent<HTMLInputElement>) => {
      const tempList = list;
      // Check/ UnCheck All Items
      tempList.map((user: TypeUser) => (user.selected = e.target.checked));

      //Update State
      setMasterChecked(e.target.checked);
      setList(tempList);
      setSelectedList(list.filter((e) => e.selected));
  }

  // Update List Item's state and Master Checkbox State
  const onItemCheck = (e: ChangeEvent<HTMLInputElement>, item: TypeUser) => {
      const tempList = list

      tempList.forEach((user) => {
          if (user.id === item.id) {
              user.selected = e.target.checked;
          }
          setList(tempList);
      });

      //To Control Master Checkbox State
      const totalItems = list.length;
      const totalCheckedItems = tempList.filter((e) => e.selected).length;

      // Update State
      setMasterChecked(totalItems === totalCheckedItems);
      setList(tempList);
      setSelectedList(list.filter((e) => e.selected));

  }

  const selectedRows = selectedList

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
                    checked={masterChecked}
                    id="mastercheck"
                    onChange={(e) => onMasterCheck(e)}
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
                      onChange={(e) => onItemCheck(e, user)}
                  />
                </th>
                <td>{user.topic}</td>
                <td>{user.score}</td>
              </tr>
            ))}
            </tbody>
          </table>
        </div>
      </div>

      <Chart selectedRows={selectedRows}/>
    </div>
  );
}

export default Table;
