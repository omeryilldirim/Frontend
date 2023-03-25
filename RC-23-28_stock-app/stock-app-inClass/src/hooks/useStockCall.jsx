import { useDispatch } from "react-redux";
import { fetchFail, getSuccess, fetchStart } from "../features/stockSlice";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import useAxios from "./useAxios";

const useStockCall = () => {
  const dispatch = useDispatch();
  const {axiosWithToken} = useAxios()

  const getStockData = async (url) => {
    // const BASE_URL = "https://10001.fullstack.clarusway.com/";
    dispatch(fetchStart());
    try {
      // const { data } = await axios(`${BASE_URL}stock/${url}/`, {
      //   headers: { Authorization: `Token ${token}` },
      // });
      const {data} = await axiosWithToken(`stock/${url}/`)
      dispatch(getSuccess({ data, url }));
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
    }
  };

  const deleteStockData = async (url, id) => {
    // const BASE_URL = "https://10001.fullstack.clarusway.com/"
    dispatch(fetchStart())
    try {
      // await axios.delete(`${BASE_URL}stock/${url}/${id}/`, {
      //   headers: { Authorization: `Token ${token}` },
      // })
      await axiosWithToken.delete(`stock/${url}/${id}/`)
      toastSuccessNotify(`Item successfuly deleted from ${url}`)
      getStockData(url)
    } catch (error) {
      toastErrorNotify(`Item can not be deleted from ${url}`)
      dispatch(fetchFail())
    }
  }

  return { getStockData,deleteStockData };
};

export default useStockCall;
