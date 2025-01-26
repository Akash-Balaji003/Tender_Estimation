import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Tooltip, Cell } from 'recharts';

const PieChartt = ({ basicData }) => {
  const [activeIndexLow, setActiveIndexLow] = useState(-1);
  const [activeIndexHigh, setActiveIndexHigh] = useState(-1);

  // State to store processed data
  const [dataLow, setDataLow] = useState([]);
  const [dataHigh, setDataHigh] = useState([]);

  // COLORS array for the pie chart
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AA336A', '#6633CC', '#33CC99', '#FF6666'];

  // Effect to process data whenever basicData changes
  useEffect(() => {
    if (basicData?.Cost_Breakdown) {
      const costBreakdown = basicData.Cost_Breakdown;

      // Process data for low and high costs
      const low = Object.entries(costBreakdown)
        .filter(([key]) => key.endsWith('_low'))
        .map(([key, value]) => ({ name: key.replace('_low', '').replace(/_/g, ' '), value }));

      const high = Object.entries(costBreakdown)
        .filter(([key]) => key.endsWith('_high'))
        .map(([key, value]) => ({ name: key.replace('_high', '').replace(/_/g, ' '), value }));

      setDataLow(low);
      setDataHigh(high);
    }
  }, [basicData]); // Dependency array: runs whenever basicData changes

  // Event handlers for pie chart interactions
  const onPieEnterLow = (_, index) => {
    setActiveIndexLow(index);
  };

  const onPieEnterHigh = (_, index) => {
    setActiveIndexHigh(index);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: '50px', padding: '20px' }}>
      {/* Low Price Pie Chart */}
      <div>
        <h3 style={{ textAlign: 'center' }}>Cost Breakdown (Low Prices)</h3>
        <PieChart width={400} height={400}>
          <Pie
            activeIndex={activeIndexLow}
            data={dataLow}
            dataKey="value"
            outerRadius={150}
            innerRadius={70}
            onMouseEnter={onPieEnterLow}
            style={{ cursor: 'pointer', outline: 'none' }}
          >
            {dataLow.map((entry, index) => (
              <Cell key={`low-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </div>

      {/* High Price Pie Chart */}
      <div>
        <h3 style={{ textAlign: 'center' }}>Cost Breakdown (High Prices)</h3>
        <PieChart width={400} height={400}>
          <Pie
            activeIndex={activeIndexHigh}
            data={dataHigh}
            dataKey="value"
            outerRadius={150}
            innerRadius={70}
            onMouseEnter={onPieEnterHigh}
            style={{ cursor: 'pointer', outline: 'none' }}
          >
            {dataHigh.map((entry, index) => (
              <Cell key={`high-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </div>
    </div>
  );
};

export default PieChartt;
