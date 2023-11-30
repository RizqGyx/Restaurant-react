import React from 'react';
import { restaurantData } from '../utils/hardData';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function DetailRest() {
  let { id } = useParams();
  const data = restaurantData.find((item) => item.id == id);

  return (
    <>
        <Navbar />
        <Footer />
    </>
  );
}

export default DetailRest;