import React from 'react';

import { client } from '../lib/client';
import { Product, FooterBannar, HeroBannar, Rice } from '../components';
import Link from 'next/link';
import { TbHanger } from 'react-icons/ai';

const Home = ({ products, bannerData, productsRice }) => (
  <div>
    <HeroBannar heroBanner={bannerData.length && bannerData[0]} />
    <div className="products-heading">
      <h2>Clothes</h2>
      {/* <TbHanger size={20}/> */}
      <p>speaker There are many variations passages</p>

      <div className="btn-container">
        <Link href="/clothes">
          <button
            type="button"
            // onClick={() => setShowCart(false)}
            className="btn"
            >
            Dress Shopping
          </button>
        </Link>
      </div>
    </div>

    {/* <div className="products-container"> */}
      {/* {products?.map((product) => <Product key={product._id} product={product} />)} */}
    {/* </div> */}

    <div className="products-heading">
      <h2>Rice</h2>
      <p>speaker There are many variations passages</p>

      <div className="btn-container">
        <Link href="/rice">
          <button
            type="button"
            // onClick={() => setShowCart(false)}
            className="btn"
            >
            Rice Shopping
          </button>
        </Link>
      </div>
    </div>

    {/* <div className="products-container"> */}
      {/* {productsRice?.map((productsRice) => <Rice key={productsRice._id} product={productsRice} />)} */}
    {/* </div> */}

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

export default Home;