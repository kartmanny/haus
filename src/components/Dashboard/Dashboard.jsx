import React from 'react';
import Text from 'components/Text';
import { Link } from 'react-router-dom';
import Grade from 'components/Grade';
import styles from './dashboard.module.scss';
import BarChart from 'components/Dashboard/BarChart';
import PieChart from 'components/Dashboard/PieChart';
import LineChart from 'components/Dashboard/LineChart';
import DoubleBarChart from 'components/Dashboard/DoubleBarChart';
import add from 'assets/img/plus.svg';
const SCHOOLS = [
  { name: 'Ballard High School', rank: '27' },
  { name: 'Center High School', rank: '1' },
  { name: 'Cleveland High School', rank: '92' },
  { name: 'Center School', rank: '74' }
];
const Dashboard = ({ dashboardTitle, reportCard, data }) => {
  return (
    <div className={styles.dashboard}>
      <div className={styles.dashboardNav}>
        <div className={styles.dashboardTitle}>
          <Text type="title1">{dashboardTitle.name}</Text>
          <Text type="small">
            Median Price: ${dashboardTitle.price} &nbsp; &bull; &nbsp;
            Population: {dashboardTitle.population}
          </Text>
        </div>
        <Link className={styles.plus}>
          <img className={styles.add} src={add} height={35} alt="add" />
        </Link>
      </div>
      <div className={styles.dashboardContainer}>
        <Text type="title3" className={styles.dashboardScore}>
          Overall Haüs Score:
          <Grade
            value={dashboardTitle.overall}
            classNames={styles.dashboardScore}
          />
        </Text>
        <div className={styles.dashboardReportCard}>
          {reportCard.map(({ name, score, type }) => (
            <Text type="regular">
              <Grade value={type} />
              {name}
            </Text>
          ))}
        </div>

        <div className={styles.dashboardStats}>
          <Text type="title2" className={styles.dashboardCategoryTitle}>
            About the Residents
          </Text>
          <Text type="large" className={styles.dashboardCategoryTitle}>
            Average Median Salary
          </Text>
          <BarChart barData={data.barData} type="0"></BarChart>
          <Text type="large" className={styles.dashboardCategoryTitle}>
            Educational Diversity
          </Text>
          <PieChart pieData={data.pieData} type="0"></PieChart>

          <Text type="title2" className={styles.dashboardCategoryTitle}>
            About the Homes
          </Text>
          <Text type="large" className={styles.dashboardCategoryTitle}>
            Appreciation
          </Text>
          <LineChart lineData={data.lineData}></LineChart>
          <Text type="large" className={styles.dashboardCategoryTitle}>
            Rent vs. Owned Households
          </Text>
          <PieChart pieData={data.rentOwned} type="1"></PieChart>
          <Text type="title2" className={styles.dashboardCategoryTitle}>
            About the Neighborhood
          </Text>
          <Text type="large" className={styles.dashboardCategoryTitle}>
            Schools
          </Text>
          <Text type="small" className={styles.dashboardCategoryTitle}>
            Top ranked schools in this city's neighborhood
          </Text>
          {SCHOOLS.map(({ name, rank }) => (
            <Text type="regular">
              <Grade value={`#${rank}`} offset={false} />
              {name}
            </Text>
          ))}
          <Text type="large" className={styles.dashboardCategoryTitle}>
            Crime and Safety
          </Text>
          <DoubleBarChart barData={data.crimeData}></DoubleBarChart>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
