"use client";

import { useState } from "react";
import AllProducts from "./all-products";
import Categories from "./categories";
import MyInfo from "./myInfo";
import { ProductItemType } from "./products-item-type";


const products: ProductItemType[] = [
  {
    id: 1,
    name: 'Iphone 15 Promax',
    price: 2500,
    category: "Mobile Phones"
  }
  , {
    id: 2,
    name: 'Iphone 14 Promax',
    price: 2300,
    category: "Mobile Phones"
  }
  , {
    id: 3,
    name: 'Iphone 11 Promax',
    price: 2000,
    category: "Mobile Phones"
  }
  , 
  {
    id: 4,
    name: 'Macbook',
    price: 2500,
    category: "Computers"
  },
  {
    id:5,
    name: 'Core i7',
    price: 3000,
    category: "Computers"
  },
  {
    id: 6,
    name: 'core i6',
    price: 4500,
    category: "Computers"
  },
  {
    id: 7,
    name: 'Air Pod',
    price: 25,
    category: "Gadgets"
  },
  {
    id: 8,
    name: 'Blue Screen',
    price: 35,
    category: "Gadgets"
  }, {
    id: 9,
    name: 'Ronin Buds',
    price: 27,
    category: "Gadgets"
  },
  {
    id: 10,
    name: 'Tesla Cybertruck',
    price: 65000,
    category: "Cars"
  },
  {
    id: 11,
    name: 'Lambo Huracan',
    price: 265000,
    category: "Cars"
  },  {
    id: 12,
    name: 'Mehran',
    price: 5000,
    category: "Cars"
  },
  {
    id: 13,
    name: 'Special Eid Nara of J.',
    price: 25,
    category: "Cloths"
  },{
    id: 14,
    name: 'Classic Pants',
    price: 78,
    category: "Cloths"
  },{
    id: 15,
    name: 'Resham trouser',
    price: 80,
    category: "Cloths"
  },
  {
    id: 16,
    name: 'Iphone 16 Promax',
    price: 3000,
    category: "Mobile Phones"
  },
]


export default function Home() {
  const [categList, setCategList] = useState(
    [
      "All",
      'Cars',
      "Mobile Phones",
      "Gadgets",
      "Computers",
      "Cloths"
    ]);

  const [filteredProd, setFilteredProd] = useState(products);
  const [choosenCategory, setChoosenCategory] = useState('')

  const selectCategory = (categoryName: string) => {
    setChoosenCategory(categoryName);
    if (categoryName === 'All') {
      setFilteredProd(products)
    }
    else {
      setFilteredProd(products.filter((products) => {
        return products.category === categoryName
      }))
    }
  }

  return (
    <>
      {/* <MyInfo /><br /> */}
      <h1 style={{color:'#212121',display:'inline',margin:'600px'}}>Digital Shop</h1>
      <Categories
        categories={categList}
        selectCategory={selectCategory} />
      <br /><br />
      <AllProducts
        productsList={filteredProd}
      />
    </>
  );
}