import { Button, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import FirmCard from "../components/FirmCard";
import useStockCall from "../hooks/useStockCall";
import { flex } from "../styles/globalStyle";

const Firms = () => {
  const { getStockData } = useStockCall();
  const { firms } = useSelector((state) => state.stock);

  useEffect(() => {
    getStockData("firms");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Typography variant="h4" color="error" mb={3}>
        Firm
      </Typography>

      <Button variant="contained">New Firm</Button>

      <Grid container sx={flex}>
        {firms?.map((firm) => (
          <Grid item key={firm.id} xs={12}>
            <FirmCard firm={firm}/>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Firms;
