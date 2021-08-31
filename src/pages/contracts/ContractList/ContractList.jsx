import React from 'react'
import ContractGrid from '../../../components/contracts/ContractGrid';
import PageContainer from '../../../components/hocs/Containers/PageContainer/PageContainer';
import { Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    actionsContainer: {
        display: 'flex',
        justifyContent: 'flex-end'
    },
    newContractButton: {
        width: '185px',
    },
})


const ContractList = () => {
    const classes = useStyles();

    return ( 
        <PageContainer>
            <h1>Contratos</h1>
            <div className={classes.actionsContainer}>
                <Button variant="contained" color="primary" className={classes.newContractButton}>
                    Nuevo Contrato
                </Button>
            </div>
            <ContractGrid/>
        </PageContainer>
    );
}
 
export default ContractList;