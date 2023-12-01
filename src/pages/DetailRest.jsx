import React from 'react';
import { restaurantData } from '../utils/hardData';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Detail from '../components/Detail';

function DetailRest() {
  let { id } = useParams();
  const data = restaurantData.find((item) => item.id == id);

  return (
    <>
        <Navbar />
        {data && <Detail restaurant={data} />}
        <Footer />
    </>
  );
}

export default DetailRest;