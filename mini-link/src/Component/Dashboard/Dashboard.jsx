import React from 'react';
import NavMenu from '../NavMenu/NavMenu';

const Dashboard = () => {
    return (
        <div className='dashboard'>
            <NavMenu page='dashboard'></NavMenu>
            <div className="dashboard__main content__container">
                <h1>Dashboard</h1>
            </div>

        </div>
    );
};

export default Dashboard;