function Table({ data, config, keyFn }) {
  const renderedHeader = config.map((column) => (
    <th key={column.label}>{column.label}</th>
  ));

  const renderedRows = data.map((rowData) => {
    const renderedCell = config.map((column) => {
      return <td key={column.label}>{column.render(rowData)}</td>;
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
