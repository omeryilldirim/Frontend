import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { modalStyle } from "../../styles/globalStyle";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import useStockCall from "../../hooks/useStockCall";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useSelector } from "react-redux";

export default function ProductModal({ open, handleClose, info, setInfo }) {
  const { postStockData} = useStockCall();
  const{categories,brands} = useSelector((state) => state.stock);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    postStockData("products", info);
    handleClose();
    setInfo({ name: "", phone: "", address: "", image: "" });
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={() => {
          handleClose();
          setInfo({ name: "", phone: "", address: "", image: "" });
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Box
            component="form"
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
            onSubmit={handleSubmit}
          >
            <FormControl fullWidth>
              <InputLabel id="category-label">Categories</InputLabel>
              <Select
                labelId="category"
                id="category"
                label="Category"
                required
              >
                {categories.map((item) => (<MenuItem value={item.name}>{item.name}</MenuItem>))}

              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id="brand-label">Brands</InputLabel>
              <Select
                labelId="brand"
                id="brand"
                label="Brand"
                required
              >
                {brands.map((item) => (<MenuItem value={item.name}>{item.name}</MenuItem>))}

              </Select>
            </FormControl>
            <TextField
              label="Product Name"
              name="name"
              id="name"
              type="text"
              variant="outlined"
              required
            />
            <Button variant="contained" type="submit">
              Submit Form
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
