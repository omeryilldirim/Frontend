import Typography from "@mui/material/Typography";
import { useEffect } from "react";
import Charts from "../components/Charts";
import KPIcards from "../components/KPIcards";
import useStockCall from "../hooks/useStockCall";

const Home = () => {
  const {getStockData} = useStockCall()

  useEffect(() => {
    getStockData("sales")
    getStockData("purchases")
  }, [])
  
  return <div>
    <Typography variant="h4" color="error" mb={3}>Dashboard</Typography>
    <KPIcards/>
    <Charts/>
  </div>
}

export default Home
