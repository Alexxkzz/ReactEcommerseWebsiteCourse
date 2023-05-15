import React, { createContext, useState } from "react";

export const FilterContext = createContext();

export const FilterProvider =({ Children })=>{
  const [rating, setRating] = useState(0);
  const [category, setCategory] = useState(0);
  const [price, setPrice] = useState(0);

  return<FilterContext.Provider value={{ category, setCategory }}>
    {Children}
  </FilterContext.Provider>;
};
