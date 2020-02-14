import React from 'react';
import styled from 'styled-components';

import Text from 'components/Text';
import Grade from 'components/Grade';
import styles from 'components/Dashboard/dashboard.module.scss';
import BarChart from 'components/Dashboard/BarChart';
import PieChart from 'components/Dashboard/PieChart';
import LineChart from 'components/Dashboard/LineChart';
import DoubleBarChart from 'components/Dashboard/DoubleBarChart';

import data from 'assets/data/data.json';

const { schools } = data.dashboard;
const Dashboard = ({ dashboardTitle, reportCard, data, onClose }) => {
  return (
    <div className={styles.dashboard}>
      <DashboardHeading
        onClose={onClose}
        name={dashboardTitle.name}
        population={dashboardTitle.population}
        price={dashboardTitle.price}
      />
      <div className={styles.dashboardContainer}>
        <ReportCard grades={reportCard} overall={dashboardTitle.overall} />
        <DashboardSection
          title="About the Residents"
          subsections={[
            {
              name: 'Average Median Salary',
              graph: <BarChart barData={data.barData} type="0" />
            },
            {
              name: 'Educational Diversity',
              graph: <PieChart pieData={data.pieData} type="0" />
            }
          ]}
        />
        <DashboardSection
          title="About the Homes"
          subsections={[
            {
              name: 'Appreciation',
              graph: <LineChart lineData={data.lineData} />
            },
            {
              name: 'Rent vs. Owned Households',
              graph: <PieChart pieData={data.rentOwned} type="1" />
            }
          ]}
        />
        <DashboardSection
          title="About the Neighborhood"
          subsections={[
            {
              name: 'Schools',
              graph: schools.map(({ name, rank }) => (
                <Text type="regular">
                  <Grade value={`#${rank}`} offset={false} />
                  {name}
                </Text>
              ))
            },
            {
              name: 'Crime and Safety',
              graph: <DoubleBarChart barData={data.crimeData} />
            }
          ]}
        />
      </div>
    </div>
  );
};

const DashboardHeading = ({ name, price, population, onClose }) => (
  <div className={styles.dashboardNav}>
    <div className={styles.dashboardTitle}>
      <Text type="title1">{name}</Text>
      <Text type="small">
        Median Price: ${price} &nbsp; &bull; &nbsp; Population: {population}
      </Text>
    </div>
    <CloseButton onClose={onClose} />
  </div>
);

const CloseButton = ({ onClose }) => (
  <Text type="regular" className={styles.add} onClick={onClose}>
    X
  </Text>
);

const ReportCard = ({ overall, grades }) => {
  return (
    <div>
      <Text type="title3" className={styles.dashboardScore}>
        Overall Haüs Score:
        <Grade value={overall} classNames={styles.dashboardScore} />
      </Text>
      <div className={styles.dashboardReportCard}>
        {grades.map(({ name, score }) => (
          <Text type="regular">
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
      {subsections.map(({ name, graph }) => (
        <Section>
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
