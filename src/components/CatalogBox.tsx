import React, { FC } from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { DataGrid, GridRowsProp, GridColDef } from '@material-ui/data-grid'
import { getAllUser } from '../mocks/mocks'

const rows: GridRowsProp = getAllUser()

const columns: GridColDef[] = [
  { field: 'deskId', headerName: '場所', width: 100 },
  { field: 'name', headerName: '出展者名', width: 150 },
  { field: 'date', headerName: '出展日', width: 100 },
  { field: 'tag', headerName: 'ジャンル', width: 200 }
]

const useStyles = makeStyles({
  table: {
    '&.MuiDataGrid-root .MuiDataGrid-cell:focus-within': {
      outline: 'none'
    }
  }
})

export const CatalogBox: FC = () => {
  const classes = useStyles()
  return (
    <DataGrid
      rows={rows}
      columns={columns}
      className={classes.table}
      disableColumnMenu
      hideFooter
      onRowClick={(row) =>
        console.log('test', row.id)
      }
      loading={false}
      />
  )
}
