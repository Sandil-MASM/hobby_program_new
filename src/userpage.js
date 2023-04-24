import CIcon from '@coreui/icons-react';
import { cilPeople } from '@coreui/icons';
import { CChartPie } from '@coreui/react-chartjs';
import React from 'react';
import { CButton, CCard, CCardBody, CCol, CRow, CCardHeader } from '@coreui/react';
import { useParams } from 'react-router-dom';
import './userPage.css';


const UserPage = () => {
  const { id, email, name, contact, hobby } = useParams();

  const handleClick = () => {
    console.log('Go to add user page');
  };

  const handleClickAgain = () => {
    console.log('Add user');
  };

  return (
    <>
      <CRow xs={{ cols: 2 }} md={{ cols: 2 }}>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader component="h5" className="p-3">
              <span className="p-3">
                <CIcon icon={cilPeople} size="xxl" />
              </span>
              <span className="h3">User Details</span>
              <p className="float-end h4 p-2">ID: {id}</p>
            </CCardHeader>
            <CCardBody style={{ fontSize: '1.2rem' }}>
              <div className="p-3">
                User Name: <span className="float-end sm">{name}</span>
              </div>
              <div className="p-3">
                User Contact Number: <span className="float-end">{contact}</span>
              </div>
              <div className="p-3">
                User hobby: <span className="float-end">{hobby}</span>
              </div>
              <div className="p-3">
                User Email Address: <span className="float-end">{email}</span>
              </div>
              <CCol xs={12}>
                <br />
                <div className="p-2">
                  <CButton color="primary" variant="outline" size="md" onClick={handleClick}>
                    Go to add user page
                  </CButton>
                  <CButton
                    color="primary"
                    variant="outline"
                    size="md"
                    onClick={handleClickAgain}
                    className="float-end"
                    as="a"
                  >
                    Add user
                  </CButton>
                </div>
              </CCol>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default UserPage;
