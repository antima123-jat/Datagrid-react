import React, { useState } from 'react';
import './App.css';

const jsonData = [
  // Place your JSON data here
  // Make sure it is a valid JSON array of objects with the given properties
  
    {
      "Customer": "Branson Weimann",
      "LastSeen": "08/08/2020",
      "Orders": 2,
      "TotalSpent": "295,31 SUS",
      "LatestPurchase": "27/11/2019 à 13:12:25",
      "News": "✔️",
      "Segments": "Reguler"
    },
    {
      "Customer": "Antima choudhary",
      "LastSeen": "01/01/2020",
      "Orders": 1,
      "TotalSpent": "295,311 SUS",
      "LatestPurchase": "22/11/2019 à 11:12:25",
      "News": "✔️",
      "Segments": "Reguler"
    },
    
    {
      "Customer": "Ashok goliya",
      "LastSeen": "03/04/2021",
      "Orders": 3,
      "TotalSpent": "395,31 SUS",
      "LatestPurchase": "17/13/2019 à 10:12:25",
      "News": "❌",
      "Segments": "Reguler"
    },
    
    {
      "Customer": "Vijay goliya",
      "LastSeen": "06/08/2021",
      "Orders": 4,
      "TotalSpent": "595,31 SUS",
      "LatestPurchase": "17/5/2015 à 13:12:25",
      "News": "❌",
      "Segments": "Reguler"
    },
    
    {
      "Customer": "sarita pichkiya",
      "LastSeen": "04/09/2021",
      "Orders": 5,
      "TotalSpent": "395,31 SUS",
      "LatestPurchase": "01/12/2011 à 13:12:25",
      "News": "✔️",
      "Segments": "Reguler"
    },
    
    {
      "Customer": "Komal ",
      "LastSeen": "01/08/2022",
      "Orders": 6,
      "TotalSpent": "195,34 SUS",
      "LatestPurchase": "17/12/2019 à 13:12:25",
      "News": "✔️",
      "Segments": "Reguler"
    },
    
    {
      "Customer": "Radhika",
      "LastSeen": "02/03/2023",
      "Orders": 7,
      "TotalSpent": "595,39 SUS",
      "LatestPurchase": "02/12/2018 à 13:12:25",
      "News": "❌",
      "Segments": "Reguler"
    },
    
    {
      "Customer": "kanika",
      "LastSeen": "08/08/2020",
      "Orders": 8,
      "TotalSpent": "895,31 SUS",
      "LatestPurchase": "17/08/2017 à 13:12:25",
      "News": "✔️",
      "Segments": "Reguler"
    },
    
    {
      "Customer": "Anuska",
      "LastSeen": "03/04/2022",
      "Orders": 9,
      "TotalSpent": "895,31 SUS",
      "LatestPurchase": "17/10/2018 à 13:12:25",
      "News": "❌",
      "Segments": "Reguler"
    },
    
    {
      "Customer": "Ram",
      "LastSeen": "02/02/2020",
      "Orders": 10,
      "TotalSpent": "495,31 SUS",
      "LatestPurchase": "17/12/2020 à 13:12:25",
      "News": "✔️",
      "Segments": "Reguler"
    }
  ];


const App = () => {
  const [filteredData, setFilteredData] = useState(jsonData);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState(null);
  const [sortDirection, setSortDirection] = useState('asc');

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    filterData(value, sortBy, sortDirection);
  };

  const handleSort = (key) => {
    if (key === sortBy) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(key);
      setSortDirection('asc');
    }
    filterData(searchTerm, key, sortDirection);
  };

  const filterData = (searchTerm, sortBy, sortDirection) => {
    let filteredData = jsonData;

    if (searchTerm) {
      filteredData = filteredData.filter(
        (item) =>
          item.Customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.LastSeen.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.Orders.toString().includes(searchTerm.toLowerCase()) ||
          item.TotalSpent.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.LatestPurchase.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.News.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.Segments.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (sortBy) {
      filteredData.sort((a, b) => {
        const compareA = a[sortBy];
        const compareB = b[sortBy];

        if (sortDirection === 'asc') {
          return compareA.localeCompare(compareB);
        } else {
          return compareB.localeCompare(compareA);
        }
      });
    }

    setFilteredData(filteredData);
  };

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <table>
        <thead>
          <tr>
            <th onClick={() => handleSort('Customer')}>Customer</th>
            <th onClick={() => handleSort('LastSeen')}>Last seen</th>
            <th onClick={() => handleSort('Orders')}>Orders</th>
            <th onClick={() => handleSort('Total spent')}>Total spent</th>
            <th onClick={() => handleSort('Latest purchase')}>Latest purchase</th>
            <th onClick={() => handleSort('News')}>News</th>
            <th onClick={() => handleSort('Segments')}>Segments</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, index) => (
            <tr key={index}>
              <td>{item.Customer}</td>
              <td>{item.LastSeen}</td>
              <td>{item.Orders}</td>
              <td>{item.TotalSpent}</td>
              <td>{item.LatestPurchase}</td>
              <td>{item.News}</td>
              <td>{item.Segments}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default App;




