/* eslint-disable max-len */
/* eslint-disable no-plusplus */
import React from 'react';
import { Bar } from 'react-chartjs-2';

// Import data
import { products, logClics } from 'src/data';

import './product.scss';

const Product = () => {
  // Get the brand's name with article
  const brandWithArticle = products.map((product) => `${product.brand}-${product.article}`);

  // Get the number of sales for each article
  const numberOfSales = products.map((product) => {
    let count = 0;
    const loopOnLog = logClics.map((log) => {
      if (product.id === log.idProduct) {
        if (log.purchase === true) {
          count++;
        }
      }
    });
    return count;
  });

  return (
    <div className="product">
      <h2>Statistiques des produits</h2>
      <div className="product-first">
        <div className="product-infos">
          <p>On peut voir avec ce graphique le nombre de <span className="product-sales">ventes</span> sur les différents articles de votre boutique</p>
        </div>
        <div className="product-first-graph">
          <Bar
            data={{
              labels: brandWithArticle,
              datasets: [
                {
                  label: 'Nombre de ventes',
                  data: numberOfSales,
                  backgroundColor: [
                    'rgba(63, 0, 208, 0.5)',
                    'rgba(158, 198, 190, 0.5)',
                    'rgba(55, 64, 100, 0.5)',
                    'rgba(145, 64, 100, 0.5)',
                    'rgba(55, 75, 100, 0.5)',
                    'rgba(55, 25, 100, 0.5)',
                    'rgba(55, 158, 100, 0.5)',
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
