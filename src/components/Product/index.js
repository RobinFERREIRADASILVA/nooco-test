import React from 'react';
import { Bar } from 'react-chartjs-2';

// Import data
import { products } from 'src/data';

import './product.scss';

const Product = () => {
  const brand = products.map((product) => product.brand);
  console.log(brand);
  return (
    <div className="product">
      <h2>Statistiques des produits</h2>
      <div className="product-first">
        <div className="product-first-graph">
          <Bar
            data={{
              labels: ['Gap', 'Levis', 'Diesel'],
              datasets: [
                {
                  label: 'Nombres de connexions par mois',
                  data: [0,10,20,30],
                  backgroundColor: [
                    'rgba(63, 0, 208, 0.5)',
                    'rgba(158, 198, 190, 0.5)',
                    'rgba(55, 64, 100, 0.5)',
                  ],
                },
              ],
            }}
            height={450}
            width={900}
            options={{
              maintainAspectRatio: false,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Product;
