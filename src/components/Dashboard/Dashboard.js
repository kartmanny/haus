import React from 'react';

import Text from '../Text/Text';
import styles from './dashboard.module.scss';

const Dashboard = () => {
    return (
        <div className={styles.dashboard}>
            <div className={styles.dashboardNav}>
                <Text className={styles.dashboardTitle} type="title1">Westlake</Text>
                <Text type="title3"> Overall Haus Score: <span className={styles.dashboardScore}> A+ </span> </Text>
            </div>
            <div className={styles.dashboardContainer}>

                <div className={styles.dashboardReportCard}>
                    <Text type="regular"> <span className={styles.dashboardScore}> A+ </span> Median Home Value: </Text>
                    <Text type="regular"> <span className={styles.dashboardScore}> A+ </span> Average Rent </Text>
                    <Text type="regular"> <span className={styles.dashboardScore}> B+ </span> Appreciation Score </Text>
                    <Text type="regular"> <span className={styles.dashboardScore}> A+ </span> Schools </Text>
                    <Text type="regular"><span className={styles.dashboardScore}> A+ </span> Population </Text>
                    <Text type="regular"><span className={styles.dashboardScore}> C+ </span> Diversity </Text>
                    <Text type="regular"><span className={styles.dashboardScore}> A+ </span> Walk Score </Text>
                </div>

                <div className={styles.dashboardStats}>
                    <Text type="title2" className={styles.dashboardCategoryTitle}>About the Residents</Text>
                    <div className={styles.dashboardParts}>

                    </div>

                    <Text type="title2" className={styles.dashboardCategoryTitle}>About the Homes</Text>
                    <div className={styles.dashboardParts}>

                    </div>
                    <Text type="title2" className={styles.dashboardCategoryTitle}>About the Neighborhood</Text>
                    <div className={styles.dashboardParts}>

                    </div>
                </div>

            </div>

        </div>
    );
};

export default Dashboard;
