import React from 'react';

const CarparkInfo = ({ carpark, carparkRates, index }) => {
  return (
    <div className="carpark-info" key={carpark.id}>
      <h3>{carpark.name}</h3>
      <p>Road: {carpark.road}</p>
      <p>Weekday: {carparkRates && carparkRates[index]['data']['data']['wd1']}
        {carparkRates && carparkRates[index]['data']['data']['wd1'] !== carparkRates[index]['data']['data']['wd2'] && ` and/or ${carparkRates[index]['data']['data']['wd2']}`}
      </p>
      <p>Saturday: {carparkRates && carparkRates[index]['data']['data']['sat']}</p>
      <p>Sunday: {carparkRates && carparkRates[index]['data']['data']['sun']}</p>
      <p>
        {carparkRates && carparkRates[index]['data']['data']['remarks'] !== (null || "") && ` Note: ${carparkRates[index]['data']['data']['remarks']}`}
      </p>
      <hr />
    </div>
  );
};

export default CarparkInfo;
