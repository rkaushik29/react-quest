import React, { useState, useEffect } from 'react';

const CryptoPriceTracker = () => {
  const [crypto, setCrypto] = useState([]);
  const [alerts, setAlerts] = useState([]);
  const [error, setError] = useState(null);

  const fetchCrypto = async () => {
    try {
      const response = await fetch(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'
      );
      if (!response.ok) {
        throw new Error('Failed to fetch cryptocurrency data.');
      }
      const data = await response.json();
      setCrypto(data);
      setError(null);
    } catch (error) {
      setError(error.message);
      setCrypto([]);
    }
  };

  useEffect(() => {
    fetchCrypto();
  }, []);

  const addAlert = (cryptoName, price) => {
    setAlerts((prevAlerts) => [...prevAlerts, { name: cryptoName, price }]);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="mb-6 w-full max-w-5xl">
        <h2 className="text-3xl font-medium text-gray-700 mb-4">Cryptocurrency Prices</h2>
        {error && <p className="text-red-500">{error}</p>}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {crypto.map((coin) => (
            <div
              key={coin.id}
              className="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-between"
            >
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-gray-700">{coin.name}</h3>
                  <img src={coin.image} alt={coin.name} className="h-8 w-8" />
                </div>
                <p className="text-gray-700">${coin.current_price}</p>
                <p
                  className={`text-${
                    coin.price_change_percentage_24h > 0 ? 'green' : 'red'
                  }-500`}
                >
                  {coin.price_change_percentage_24h.toFixed(2)}%
                </p>
              </div>
              <button
                onClick={() => addAlert(coin.name, coin.current_price)}
                className="bg-indigo-500 text-white py-2 px-4 rounded-lg shadow-sm hover:bg-indigo-600 transition duration-300"
              >
                Set Alert
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-12 w-full max-w-5xl">
        <h2 className="text-3xl font-medium text-gray-700 mb-4">Price Alerts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {alerts.map((alert, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-lg flex items-center justify-between"
            >
              <p className="text-gray-700">{alert.name}: ${alert.price}</p>
              <button
                onClick={() =>
                  setAlerts((prevAlerts) =>
                    prevAlerts.filter((_, i) => i !== index)
                  )
                }
                className="bg-red-500 text-white py-1 px-3 rounded-lg shadow-sm hover:bg-red-600 transition duration-300"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CryptoPriceTracker;
