import React, { useContext } from 'react';
import styled from 'styled-components';

import Context from 'assets/context/Context';
import Text from 'components/Text';
import Grade from 'components/Grade';
import styles from 'components/Dashboard/dashboard.module.scss';
import BarChart from 'components/Dashboard/BarChart';
import PieChart from 'components/Dashboard/PieChart';
import LineChart from 'components/Dashboard/LineChart';
import DoubleBarChart from 'components/Dashboard/DoubleBarChart';

import data from 'assets/data/data.json';

const FALLBACK_DATA = {
  name: 'Magnolia',
  price: '177,000',
  population: '28,000',
  overall: 'B',
  report: [
    { name: 'Home Value', score: 'B' },
    { name: 'Rent', score: 'A-' },
    { name: 'Appreciation', score: 'B' },
    { name: 'Schools', score: 'A' },
    { name: 'Population', score: 'B-' },
    { name: 'Diversity', score: 'B' },
    { name: 'Walk Score', score: 'B' }
  ],
  schools: [
    { name: 'Ballard High School', rank: 11 },
    { name: 'Center High School', rank: 15 },
    { name: 'Cleveland High School', rank: 28 },
    { name: 'Center School', rank: 14 }
  ],
  chartData: {
    barData: [40700, 79431],
    pieData: [45, 10, 10, 35],
    lineData: [
      170000,
      400000,
      440000,
      680000,
      900000,
      920000,
      1110000,
      1270000
    ],
    crimeData: [
      [559, 6275],
      [463, 2784]
    ],
    rentOwned: [69, 31]
  }
};

const Add = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  transition: color 0.2s;
  &:hover {
    span.hover {
      color: var(--seed-color-primary) !important;
    }
  }
  span.filled {
    color: var(--seed-color-primary) !important;
  }
`;

const { schools } = data.dashboard;
const Dashboard = ({ neighborhood, onClose }) => {
  const { data, dispatch } = useContext(Context);
  let entry = data.neighborhoods.find(
    item => item.name.toLowerCase() === neighborhood.toLowerCase()
  );
  entry = entry ? entry : FALLBACK_DATA;
  const isInFavorites = name => {
    return !!data.favorites.find(
      neighborhood => neighborhood.toLowerCase() === name.toLowerCase()
    );
  };
  return (
    entry && (
      <div className={styles.dashboard}>
        <DashboardHeading
          onClose={onClose}
          name={entry.name}
          population={entry.population}
          price={entry.price}
          dispatch={dispatch}
          favorite={isInFavorites(entry.name)}
        />
        <div className={styles.dashboardContainer}>
          <ReportCard grades={entry.report} overall={entry.overall} />
          <DashboardSection
            title="About the Residents"
            subsections={[
              {
                name: 'Average Median Salary',
                graph: <BarChart barData={entry.chartData.barData} type="0" />
              },
              {
                name: 'Educational Diversity',
                graph: <PieChart pieData={entry.chartData.pieData} type="0" />
              }
            ]}
          />
          <DashboardSection
            title="About the Homes"
            subsections={[
              {
                name: 'Appreciation',
                graph: <LineChart lineData={entry.chartData.lineData} />
              },
              {
                name: 'Rent vs. Owned Households',
                graph: <PieChart pieData={entry.chartData.rentOwned} type="1" />
              }
            ]}
          />
          <DashboardSection
            title="About the Neighborhood"
            subsections={[
              {
                name: 'Schools',
                graph: schools.map(({ name, rank }, index) => (
                  <Text type="regular" key={index}>
                    <Grade value={`#${rank}`} offset={false} />
                    {name}
                  </Text>
                ))
              },
              {
                name: 'Crime and Safety',
                graph: <DoubleBarChart barData={entry.chartData.crimeData} />
              }
            ]}
          />
        </div>
      </div>
    )
  );
};

const DashboardHeading = ({
  name,
  price,
  population,
  onClose,
  dispatch,
  favorite
}) => (
  <div className={styles.dashboardNav}>
    <div className={styles.dashboardTitle}>
      <Text type="title1">{name}</Text>
      <Text type="small">
        Median Price: ${price} &nbsp; &bull; &nbsp; Population: {population}
      </Text>
    </div>
    <CloseButton onClose={onClose} />
    <AddButton name={name} dispatch={dispatch} favorite={favorite} />
  </div>
);

const CloseButton = ({ onClose }) => (
  <div style={{ position: 'absolute', top: 15, right: 0 }}>
    <Text className="filled" type="title2" onClick={onClose}>
      &#10006;
    </Text>
  </div>
);

const AddButton = ({ dispatch, name, favorite }) => {
  return (
    <Add
      onClick={() =>
        dispatch({
          type: favorite ? 'REMOVE_FAVORITE' : 'ADD_FAVORITE',
          payload: { favorite: name }
        })
      }
      style={{ position: 'absolute', top: 15, right: 35 }}
    >
      {favorite ? (
        <Text className="filled" type="title2">
          &#9829;
        </Text>
      ) : (
        <Text className="hover" type="title2">
          &#9825;
        </Text>
      )}
    </Add>
  );
};

const ReportCard = ({ overall, grades }) => {
  return (
    <div>
      <Text type="title3" className={styles.dashboardScore}>
        Overall Haüs Score:
        <Grade value={overall} classNames={styles.dashboardScore} />
      </Text>
      <div className={styles.dashboardReportCard}>
        {grades.map(({ name, score }, index) => (
          <Text key={index} type="regular">
            <Grade value={score} />
            {name}
          </Text>
        ))}
      </div>
    </div>
  );
};

const DashboardSection = ({ title, subsections }) => {
  const Section = styled.div`
    padding: 2rem 0 1rem;
  `;
  return (
    <div>
      <Text type="title2">{title}</Text>
      {subsections.map(({ name, graph }, index) => (
        <Section key={`section-${index}`}>
          <Text type="large" className={styles.dashboardCategoryTitle}>
            {name}
          </Text>
          {graph}
        </Section>
      ))}
    </div>
  );
};

export default Dashboard;
