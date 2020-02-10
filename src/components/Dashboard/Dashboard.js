import React from 'react';
import Text from '../Text/Text';
import Grade from '../Grade/Grade';
import styles from './dashboard.module.scss';
import favorite from '../../assets/img/favorite.svg';

const Dashboard = () => {
    return (
        <div className={styles.dashboard}>
            <div className={styles.dashboardNav}>
                <div className={styles.dashboardTitle} >
                    <Text type="title1">Westlake</Text> 
                    <Text type="small">Median Price: $50,000 &nbsp; &bull; &nbsp; Population: 2,000 </Text>
                </div>

                <Text type="title3"> Overall Haüs Score: <span className={styles.dashboardScore}> A+ </span> </Text>
            </div>
            <div className={styles.dashboardContainer}>

                <div className={styles.dashboardReportCard}>
                    <Text type="regular"> <Grade type="A">A+</Grade> Median Home Value </Text>
                    <Text type="regular"> <Grade type="B">B</Grade>Average Rent </Text>
                    <Text type="regular"> <Grade type="A">A+</Grade> Appreciation Score </Text>
                    <Text type="regular"> <Grade type="C">C</Grade> Schools </Text>
                    <Text type="regular"><Grade type="D">D</Grade> Population </Text>
                    <Text type="regular"><Grade type="A">A+</Grade> Diversity </Text>
                    <Text type="regular"><Grade type="F">F</Grade> Walk Score </Text>
                </div>

                <div className={styles.dashboardStats}>
                    <Text type="title2" className={styles.dashboardCategoryTitle}>About the Residents</Text>
                    <div className={styles.dashboardResident}>
                        <Text type="large" className={styles.dashboardCategoryTitle}>Average Median Salary</Text>
                        <div className={styles.dashboardParts}></div>

                        <Text type="large" className={styles.dashboardCategoryTitle}>Educational Diversity</Text>
                    </div>

                    <Text type="title2" className={styles.dashboardCategoryTitle}>About the Homes</Text>
                    <Text type="large" className={styles.dashboardCategoryTitle}>Appreciation</Text>
                    <div className={styles.dashboardParts}></div>
                    <Text type="large" className={styles.dashboardCategoryTitle}>Rent vs. Owned Households</Text>

                    <Text type="title2" className={styles.dashboardCategoryTitle}>About the Neighborhood</Text>
                    <Text type="large" className={styles.dashboardCategoryTitle}>Schools</Text>
                    <div className={styles.dashboardParts}></div>
                    <Text type="large" className={styles.dashboardCategoryTitle}>Crime and Safety</Text>

                </div>

            </div>

        </div>
    );
};

export default Dashboard;
