import VisibilityIcon from '@material-ui/icons/Visibility';
import CreateIcon from '@material-ui/icons/Create';
import { Chip } from '@material-ui/core';

export const contractsColumns = [
    { 
      field: 'streetName',
      headerName: 'Direccion', 
      description: 'Direccion del inmueble',
      width: 205,
      renderCell: (params) => (
        <strong>{params.value}</strong>
      ),
    },
    {
      field: 'locator',
      headerName: 'Locador',
      description: 'Es el propietario del inmueble',
      width: 205,
    },
    {
      field: 'amount',
      headerName: 'Monto mensual',
      description: 'Monto mensual a pagar al locador',
      width: 205,
    },
    {
      field: 'state',
      headerName: 'Estado',
      description: 'Estado del contrato',
      renderCell: (params) => (
        params.value 
          ? <Chip className='contract-pill' label='Vigente' color='primary' variant='outlined' />
          : <Chip className='contract-pill' label='No vigente' color='secondary' variant='outlined' />
      ),
      width: 205,
    },
    {
      field: 'days',
      headerName: 'Dias restantes',
      description: 'Dias restantes para la finalizacion del contrato',
      width: 205,
      renderCell: (params) => (
        <Chip className='contract-pill' label={`${params.value.remaining}/${params.value.total}`} color='primary' variant='outlined' />
      ),
    },
    {
      field: 'actions',
      headerName: 'Acciones',
      width: 205,
      renderCell: (params) => (
        <>
          <VisibilityIcon className='contract-action'/>
          <CreateIcon className='contract-action'/>
        </>
      ),
    },
  ];