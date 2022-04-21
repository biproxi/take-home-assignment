import {TableProps, Todo} from "../../index";

const Table = (props: TableProps) => {
    const {headers, data} = props;
  return (
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
  )
};

export default Table;