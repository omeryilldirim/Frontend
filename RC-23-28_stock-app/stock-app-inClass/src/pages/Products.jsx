import { Button, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useEffect,useState } from "react";
import { useSelector } from "react-redux";
import FirmCard from "../components/FirmCard";
import useStockCall from "../hooks/useStockCall";
import { flex } from "../styles/globalStyle";
import FirmModal from "../components/modals/FirmModal";

const Products = () => {
  const { getStockData } = useStockCall();
  const { products } = useSelector((state) => state.stock);
  const [open, setOpen] = useState(false);
  const [info, setInfo] = useState({
    name: "",
    phone: "",
    address: "",
    image: "",
  });
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    getStockData("products");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Typography variant="h4" color="error" mb={3}>
        Products
      </Typography>

      <Button variant="contained" onClick={handleOpen}>New Product</Button>

      <ProductModal open={open} handleClose={handleClose} info={info} setInfo={setInfo}/>

      <Grid container sx={flex}>
        {products?.map((product) => (
          <Grid item key={product.id} >
            <ProductCard product={product} setOpen={setOpen} info={info} setInfo={setInfo}/>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Products;
