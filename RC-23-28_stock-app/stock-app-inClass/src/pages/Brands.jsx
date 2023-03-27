import { Button, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import BrandCard from "../components/BrandCard";
import useStockCall from "../hooks/useStockCall";
import { flex } from "../styles/globalStyle";

const Brands = () => {
  const { getStockData } = useStockCall();
  const { brands } = useSelector((state) => state.stock);

  useEffect(() => {
    getStockData("brands");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div>
          <Typography variant="h4" color="error" mb={3}>
        Brands
      </Typography>

      <Button variant="contained">New Brand</Button>

      <Grid container sx={flex}>
        {brands?.map((brand) => (
          <Grid item key={brand.id} >
            <BrandCard brand={brand}/>
          </Grid>
        ))}
      </Grid>
    
  </div>
}

export default Brands
