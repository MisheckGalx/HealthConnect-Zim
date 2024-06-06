import React from 'react';

const services = [
    { name: 'General Health', description: 'Everyday & chronic conditions' },
    { name: 'Mental Health', description: 'Support & counselling' },
    // ...additional services
];

const ServiceList = () => {
    return (
        <section>
            <h2>Our Services</h2>
            <ul>
                {services.map((service, index) => (
                    <li key={index}>
                        <h3>{service.name}</h3>
                        <p>{service.description}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default ServiceList;
