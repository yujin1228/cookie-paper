import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router';
import UserOven from '../components/oven/UserOven';
import OvenHeader from '../components/share/OvenHeader';

export default function UserOvenPage() {
    const { id } = useParams();
    return(
        <>
        <Helmet>
            <title>쿠키페이퍼 | @{id}</title>
        </Helmet>
        <OvenHeader />
        <UserOven />
        </>   
    );
}

