export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "age",
    headerName: "Age",
    width: 100,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];
//--------------------------------------------------------------------------
export const productColumns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "product",
    headerName: "Product",
    width: 240,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.product}
        </div>
      );
    },
  },
  {
    field: "category",
    headerName: "Category",
    width: 150,
  },

  {
    field: "date",
    headerName: "Date",
    width: 110,
  },
  {
    field: "quantity",
    headerName: "Quantity",
    width: 110,
  },
  {
    field: "status",
    headerName: "Status",
    width: 120,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];
//-------------------------------------------------------------------------------------------------------
//temporary data
export const userRows = [
  {
    id: 1,
    username: "Snow",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "active",
    email: "1snow@gmail.com",
    age: 35,
  },
  {
    id: 2,
    username: "Jamie Lannister",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "2snow@gmail.com",
    status: "passive",
    age: 42,
  },
  {
    id: 3,
    username: "Lannister",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "3snow@gmail.com",
    status: "pending",
    age: 45,
  },
  {
    id: 4,
    username: "Stark",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "4snow@gmail.com",
    status: "active",
    age: 16,
  },
  {
    id: 5,
    username: "Targaryen",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "5snow@gmail.com",
    status: "passive",
    age: 22,
  },
  {
    id: 6,
    username: "Melisandre",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "6snow@gmail.com",
    status: "active",
    age: 15,
  },
  {
    id: 7,
    username: "Clifford",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "7snow@gmail.com",
    status: "passive",
    age: 44,
  },
  {
    id: 8,
    username: "Frances",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "8snow@gmail.com",
    status: "active",
    age: 36,
  },
  {
    id: 9,
    username: "Roxie",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "snow@gmail.com",
    status: "pending",
    age: 65,
  },
  {
    id: 10,
    username: "Roxie",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "snow@gmail.com",
    status: "active",
    age: 65,
  },
];


export const rows = [
  {
    id: 1,
    product: "Acer Nitro 5",
    img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
    category: "Hardware",
    date: "1 March",
    quantity: 785,
    method: "Cash on Delivery",
    status: "In Stack",
  },
  {
    id: 2,
    product: "Playstation 5",
    img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
    category: "Gamer",
    date: "1 March",
    quantity: 900,
    method: "Online Payment",
    status: "No Stack",
  },
  {
    id: 3,
    product: "Redragon S101",
    img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
    category: "Peripherals",
    date: "1 March",
    quantity: 35,
    method: "Cash on Delivery",
    status: "In Stack",
  },
  {
    id: 4,
    product: "Razer Blade 15",
    img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
    category: "Hardware",
    date: "1 March",
    quantity: 920,
    method: "Online",
    status: "In Stack",
  },
  {
    id: 5,
    product: "ASUS ROG Strix",
    img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
    category: "Hardware",
    date: "1 March",
    quantity: 2000,
    method: "Online",
    status: "No Stack",
  },
];