import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router';
import UserOven from 'components/userOven/oven/UserOven';
import Header from 'components/common/Header/Header';
import { Bg, Body } from 'components/common/BackgroundImg.style';
import ovenback from 'assets/img/back_oven.png';
import { ovenInfoAPI } from 'api/oven.api';
import Loader from 'components/common/Loader/Loader';

export default function UserOvenPage() {
  const { id } = useParams();
  const [ovenInfo, setOvenInfo] = useState(null);

  useEffect(() => {
    ovenInfoAPI(id)
      .then((data) => {
        setOvenInfo({ ...ovenInfo, ovid: data.ovId, id: data.usId, name: data.usNickname, oven: data.ovDesign, pri: data.ovPrivateYn });
      })
      .catch((err) => {
        alert(err);
      });
  }, [id]);

  return (
    <>
      <Helmet>
        <title>쿠키페이퍼 | @{id}</title>
      </Helmet>
      <Body $startcolor="#ffcb89" $endcolor="#fec988">
        <Bg $back={ovenback}>
          <Header />
          {ovenInfo !== null ? <UserOven id={ovenInfo.id} name={ovenInfo.name} oven={ovenInfo.oven} pri={ovenInfo.pri} ovid={ovenInfo.ovid} /> : <Loader />}
        </Bg>
      </Body>
    </>
  );
}
