import React from 'react';
import Consultation from '../components/Consultation';
import ServiceList from '../components/ServiceList';
import Team from '../components/Team';

const Home = () => {
    return (
        <div>
            <h1>Welcome to HealthConnectZim</h1>
            <Consultation />
            <ServiceList />
            <Team />
        </div>
    );
};

export default Home;
