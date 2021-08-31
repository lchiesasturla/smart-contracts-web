import React from 'react'
import { Container } from '@material-ui/core';

const PageContainer = ({children}) => {
    return ( 
        <Container maxWidth='lg'>
            {children}
        </Container>
    );
}
 
export default PageContainer;