import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useStockCall from "../hooks/useStockCall";
import ProductModal from "../components/modals/ProductModal";
import Box from "@mui/material/Box";
import { DataGrid, GridActionsCellItem, GridToolbar } from "@mui/x-data-grid";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { btnStyle } from "../styles/globalStyle";

const Products = () => {
  const {deleteStockData, getProCatBrand } = useStockCall();
  const { products } = useSelector((state) => state.stock);
  const [open, setOpen] = useState(false);
  const [info, setInfo] = useState({
    category_id: "",
    brand_id: "",
    name: "",
  });
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const columns = [
    {
      field: "id",
      headerName: "#",
      minWidth: 60,
      flex: 0.5,
      headerAlign: "center",
      align: "center",
    },
    {
      field: "category",
      headerName: "Category",
      headerAlign: "center",
      align: "center",
      minWidth: 150,
      flex: 2,
    },
    {
      field: "brand",
      headerName: "Brand",
      minWidth: 150,
      headerAlign: "center",
      align: "center",
      flex: 2,
    },
    {
      field: "name",
      headerName: "Name",
      minWidth: 150,
      headerAlign: "center",
      align: "center",
      flex: 2,
    },
    {
      field: "stock",
      headerName: "Stock",
      minWidth: 100,
      headerAlign: "center",
      align: "center",
      flex: 1,
    },
    {
      field: "",
      headerName: "Actions",
      headerAlign: "center",
      align: "center",
      minWidth: 70,
      flex: 1,
      renderCell: ({ id }) => (
        <GridActionsCellItem
          icon={<DeleteForeverIcon />}
          label="Delete"
          sx={btnStyle}
          onClick={() => deleteStockData("products", id)}
        />
      ),
    },
  ];

  useEffect(() => {
    // getStockData("products");
    // getStockData("categories");
    // getStockData("brands");
    getProCatBrand();


    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Typography variant="h4" color="error" mb={3}>
        Products
      </Typography>

      <Button variant="contained" onClick={handleOpen}>
        New Product
      </Button>

      <ProductModal
        open={open}
        handleClose={handleClose}
        info={info}
        setInfo={setInfo}
      />

      <Box sx={{ width: "100%", marginTop: "1rem" }}>
        <DataGrid
          autoHeight
          rows={products}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          disableRowSelectionOnClick
          slots={{ toolbar: GridToolbar }}
        />
      </Box>
    </div>
  );
};

export default Products;
