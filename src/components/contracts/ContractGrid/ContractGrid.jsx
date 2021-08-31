import React, { useState } from 'react'
import { DataGrid } from '@material-ui/data-grid';
import { contractsColumns } from '../../../utils/formats';

const ContractGrid = () => {
    const [contracts, setContracts] = useState([
      { id: 1, streetName: 'Charcas 2500', locator: 'Jon Snow', amount: '$25.000', state: true, days: {remaining: '245', total: '720'}, actions: '' },
      { id: 2, streetName: 'Curapaligue 200', locator: 'Marley', amount: '$30.000', state: false, days: {remaining: '0', total: '720'}, actions: '' },
    ])

    return ( 
      <div style={{ height: '50vh', width: '100%', marginTop: '25px' }}>
        <DataGrid
          rows={contracts}
          columns={contractsColumns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          autoPageSize
        />
      </div>
    );
}
 
export default ContractGrid;