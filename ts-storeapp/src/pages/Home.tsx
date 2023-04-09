import React, { useEffect, useState } from "react";
import SearchComp from "../components/SearchComp";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  addFavorites,
  fetchFail,
  fetchStart,
  getSuccessProducts,
} from "../features/productsSlice";
import { EventFunc, Product, Products } from "../models/models";
import Card from "../components/Card";
import { toastSuccessNotify, toastWarnNotify } from "../helper/ToastNotify";

const Home = () => {
  const [search, setSearch] = useState("");
  const dispatch = useAppDispatch();
  const { products, loading, error, favorites } = useAppSelector(
    (state) => state.products
  );

  const getData = async () => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.get<Products>(
        `https://dummyjson.com/products/search?q=${search}`
      );
      dispatch(getSuccessProducts(data.products));
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  useEffect(() => {
    getData();
  }, [search]);

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setSearch(e.target.value);
  //   };

  const handleChange: EventFunc = (e) => {
    setSearch(e.target.value);
  };

  const handleAdd = (product: Product) => {
    if (favorites.filter((item) => item.id === product.id).length === 0) {
      dispatch(addFavorites(product));
      toastSuccessNotify("Product added to favorites!");
    } else {
      toastWarnNotify("Product is already in favorites!");
    }

  };

  return (
    <div>
      <SearchComp handleChange={handleChange} />
      {loading ? (
        <div className="mt-52">
          <p className="text-center text-blue-600">Loading...</p>
        </div>
      ) : error ? (
        <div className="mt-52">
          <p className="text-center text-red-600">Something went wrong...</p>
        </div>
      ) : (
        <div className="flex justify-center items-center flex-wrap gap-5 p-5">
          {products.map((item) => (
            <Card
              key={item.id}
              text="Add to favorites"
              item={item}
              handleFunc={handleAdd}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
