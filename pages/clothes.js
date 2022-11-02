import React from 'react';

import { client } from '../lib/client';
import { Product, FooterBannar, HeroBannar, Rice } from '../components';
import Link from 'next/link';
import { AiOutlineLeft } from 'react-icons/ai';

const clothes = ({ products, bannerData, productsRice }) => (
  <div>
    <Link href="/">
        <button
        type="button"
        className="cart-heading"
        >
            <AiOutlineLeft />
            <span className="heading">Back</span>
        </button>
    </Link>
    {/* <HeroBannar heroBanner={bannerData.length && bannerData[0]} /> */}
    <div className="products-heading">
      <h2>Clothes</h2>
      {/* <p>speaker There are many variations passages</p> */}
    </div>

    <div className="products-container">
      {products?.map((product) => <Product key={product._id} product={product} />)}
    </div>

    <FooterBannar footerBanner={bannerData && bannerData[0]} />
  </div>
);

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const queryRice = '*[_type == "rice"]';
  const productsRice = await client.fetch(queryRice);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData, productsRice }
  }
}

export default clothes;