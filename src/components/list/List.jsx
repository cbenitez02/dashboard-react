import React from 'react'
import './list.scss'
import { DataGrid } from '@mui/x-data-grid';
import { rows } from '../../datatablesource';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { productColumns } from '../../datatablesource';

const List = () => {
  const [data, setData] = useState(rows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New Product
        <Link to="/products/new" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={productColumns.concat(actionColumn)}
        pageSize={7}
        rowsPerPageOptions={[7]}
        checkboxSelection
      />
    </div>
  );
};

export default List