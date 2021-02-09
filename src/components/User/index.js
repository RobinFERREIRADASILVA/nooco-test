/* eslint-disable no-plusplus */
/* eslint-disable max-len */
import React from 'react';
import { Bar, Doughnut } from 'react-chartjs-2';
import { users, logClics } from 'src/data';

// Import style
import './user.scss';

const User = () => {
  // Datas for first graphic
  const lastNames = users.map((user) => (user.lastName));
  const loginByMonth = users.map((user) => (user.numberOfConnexion));
  const purchases = users.map((user) => {
    let counter = 0;
    const loop = logClics.map((product) => {
      if (user.id === product.idUser) {
        if (product.purchase === true) {
          counter++;
        }
      }
    });
    return counter;
  });

  // Data for second graphic
  const durationOnArticle = users.map((user) => {
    let counter = 0;
    const loopOnProduct = logClics.map((product) => {
      if (user.id === product.idUser) {
        counter += product.duration;
      }
    });
    return counter;
  });

  return (
    <div className="user">
      <h2>Statistiques sur les utilisateurs</h2>
      <div className="user-first">
        <div className="user-description-first">
          <p>Ce graphique représente le nombre de <strong>connexions</strong> et le nombre <strong>d'achats</strong> effectué pour chaque utilisateur dans le mois précédent.</p>
        </div>
        <div className="user-graph-first">
          <Bar
            data={{
              labels: lastNames,
              datasets: [
                {
                  label: 'Nombres de connexions par mois',
                  data: loginByMonth,
                  backgroundColor: [
                    'rgb(69, 220, 195, 0.5)',
                    'rgba(158, 198, 190, 0.5)',
                    'rgba(55, 64, 100, 0.5)',
                    'rgba(63, 0, 208, 0.5)',
                  ],
                },
                {
                  label: 'Nombres d\'achat effectué',
                  data: purchases,
                  backgroundColor: [
                    'rgb(69, 220, 195, 0.5)',
                    'rgba(158, 198, 190, 0.5)',
                    'rgba(55, 64, 100, 0.5)',
                    'rgba(63, 0, 208, 0.5)',
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
      <div className="user-second">
        <div className="user-graph-second">
          <h3>Durée (en seconde) à consulter des articles</h3>
          <Doughnut
            data={{
              labels: lastNames,
              datasets: [
                {
                  data: durationOnArticle,
                  backgroundColor: [
                    'rgb(69, 220, 195, 0.5)',
                    'rgba(158, 198, 190, 0.5)',
                    'rgba(55, 64, 100, 0.5)',
                    'rgba(63, 0, 208, 0.5)',
                  ],
                },
              ],
            }}
            height={450}
            width={600}
            options={{
              maintainAspectRatio: true,
            }}
          />

        </div>
        <div className="user-description-second">
          <p>Ici, le graphique représente <strong>la durée</strong> qu'on passé les utilisateurs, ces chiffres sont calculé sur les mêmes clients que le graphique du dessus, sur les différents articles du site.</p>
        </div>
      </div>
    </div>
  );
};

export default User;
