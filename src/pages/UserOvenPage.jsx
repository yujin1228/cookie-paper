import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router';
import UserOven from '../components/useroven/UserOven';
import OvenHeader from '../components/share/OvenHeader';
import { Bg, Body } from '../style/Share.style';
import ovenback from '../assets/img/back_oven.png';

export default function UserOvenPage() {
    const { id } = useParams();
    return(
        <>
        <Helmet>
            <title>쿠키페이퍼 | @{id}</title>
        </Helmet>
        <Body $startcolor="#ffcb89" $endcolor="#fec988">
            <Bg $back={ovenback}>
                <OvenHeader />
                <UserOven id={id}/>                
            </Bg>
        </Body>

        </>   
    );
}

