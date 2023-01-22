import { Fragment } from "react";

function Table({ data, config, keyFn }) {
  const renderedHeader = config.map((column) => {
    if (column.header) {
      return <Fragment key={column.label}>{column.header()}</Fragment>;
    }
    return <th key={column.label}>{column.label}</th>;
  });

  const renderedRows = data.map((rowData) => {
    const renderedCell = config.map((column) => {
      return (
        <td className="p-4" key={column.label}>
          {column.render(rowData)}
        </td>
      );
    });

    return <tr key={keyFn(rowData)}>{renderedCell}</tr>;
  });

  return (
    <table>
      <thead>
        <tr>{renderedHeader}</tr>
      </thead>
      <tbody>{renderedRows}</tbody>
    </table>
  );
}
export default Table;
