import { Button, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useEffect,useState } from "react";
import { useSelector } from "react-redux";
import FirmCard from "../components/FirmCard";
import useStockCall from "../hooks/useStockCall";
import { flex } from "../styles/globalStyle";
import FirmModal from "../components/modals/FirmModal";

const Firms = () => {
  const { getStockData } = useStockCall();
  const { firms } = useSelector((state) => state.stock);
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
    getStockData("firms");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Typography variant="h4" color="error" mb={3}>
        Firms
      </Typography>

      <Button variant="contained" onClick={handleOpen}>New Firm</Button>

      <FirmModal open={open} handleClose={handleClose} info={info} setInfo={setInfo}/>

      <Grid container sx={flex}>
        {firms?.map((firm) => (
          <Grid item key={firm.id} >
            <FirmCard firm={firm} setOpen={setOpen} info={info} setInfo={setInfo}/>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Firms;
