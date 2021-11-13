import React, { useEffect } from 'react';
//hooks
import { useGetUserData } from '../../hooks/useUserData';

//components
import Header from '../../components/Header'
//styling and animation
import styled from 'styled-components';
import { useAuthContext } from '../../hooks/useAuthContext';

const Dashboard = (token) => {
    const { getUserData } = useGetUserData();

    useEffect(() => {
        getUserData(token);
    }, []);

    const { user } = useAuthContext();

    return (
        <DashboardElement>
            <Header />
            {user.username && <h1>{user.username}, witaj!</h1>}
        </DashboardElement>
    );
}

const DashboardElement = styled.div`
    h1 {
        text-align: center;
    }
`;

export default Dashboard;