import {Table} from "../../index";
import {Fragment} from "react";

const Table = (props: Table) => {
    const {headers, data, title} = props;
  return (
      <Fragment>
          <h2>{title}</h2>
        <table>
            <thead>
            <tr>
                {headers.map((header: string) => {
                    return <th key={header}>{header}</th>
                })}
            </tr>
            </thead>
            <tbody>
                {data}
            </tbody>
          </table>
    </Fragment>
  )
};

export default Table;