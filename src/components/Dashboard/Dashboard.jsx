import React from 'react';
import Text from '../Text/Text';
import { Link } from 'react-router-dom';
import Grade from '../Grade/Grade';
import styles from './dashboard.module.scss';
import BarChart from 'components/Dashboard/BarChart'
import PieChart from 'components/Dashboard/PieChart'
import LineChart from 'components/Dashboard/LineChart'
import favorite from '../../assets/img/favorite.svg';

const Dashboard = ({ dashboardTitle, reportCard, data }) => {
    return (
        <div className={styles.dashboard}>
            <div className={styles.dashboardNav}>
                <div className={styles.dashboardTitle} >
                    <Text type="title1">{dashboardTitle.name}</Text>
                    <Text type="small">Median Price: ${dashboardTitle.price} &nbsp; &bull; &nbsp; Population: {dashboardTitle.population} </Text>
                </div>

                <Text type="title3"> Overall Haüs Score: <span className={styles.dashboardScore}> {dashboardTitle.overall} </span> </Text>
            </div>
            <div className={styles.dashboardContainer}>
                <div className={styles.dashboardReportCard}>
                    {reportCard.map(({ name, score, type }) => (
                        <Text type="regular"> <Grade type={type}>{score}</Grade> {name} </Text>
                ))}
            </div>

            <div className={styles.dashboardStats}>
                <Text type="title2" className={styles.dashboardCategoryTitle}>About the Residents</Text>
                <div className={styles.dashboardResident}>
                    <Text type="large" className={styles.dashboardCategoryTitle}>Average Median Salary</Text>
                    <BarChart barData={data.barData}></BarChart>
                    <Text type="large" className={styles.dashboardCategoryTitle}>Educational Diversity</Text>
                    <PieChart pieData={data.pieData}></PieChart>

                </div>

                <Text type="title2" className={styles.dashboardCategoryTitle}>About the Homes</Text>
                <Text type="large" className={styles.dashboardCategoryTitle}>Appreciation</Text>
                <div className={styles.dashboardParts}>
                    <LineChart lineData={data.lineData}></LineChart>
                </div>
                <Text type="large" className={styles.dashboardCategoryTitle}>Rent vs. Owned Households</Text>

        <Link className={styles.plus}>
          <img className={styles.add} src={add} height={35} alt="add" />
        </Link>
      </div>
      <div className={styles.dashboardContainer}>
        <Text type="title3">
          {' '}
          Overall Haüs Score:{' '}
          <span className={styles.dashboardScore}>
            {' '}
            {dashboardTitle.overall}{' '}
          </span>{' '}
        </Text>
        <div className={styles.dashboardReportCard}>
          {reportCard.map(({ name, score, type }) => (
            <Text type="regular">
              {' '}
              <Grade type={type}>{score}</Grade> {name}{' '}
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
              {' '}
              <Grade type="A">#{rank}</Grade> {name}{' '}
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
