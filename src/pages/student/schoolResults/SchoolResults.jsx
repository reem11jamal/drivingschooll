function SchoolResults() {
  const result = [
    {
      name: "Ahmed",
      resault: "Success",
    },
    {
      name: "Hossam",
      resault: "Success",
    },
    {
      name: "Rana",
      resault: "Success",
    },
    {
      name: "Sara",
      resault: "Success",
    },
    {
      name: "Ahmed",
      resault: "Success",
    },
    {
      name: "Ahmed",
      resault: "Success",
    },
    {
      name: "Ahmed",
      resault: "Success",
    },
  ];
  return (
    <div className='my-4 text-center container'>
      <h1>School Results</h1>
      <table class='table mt-5 table-primary  table-striped'>
        <thead>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>Name</th>
            <th scope='col'>Resault</th>
          </tr>
        </thead>
        <tbody>
          {result.map((e, i) => (
            <tr>
              <th scope='row'>{i + 1}</th>
              <td>{e.name}</td>
              <td>{e.resault}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SchoolResults;
