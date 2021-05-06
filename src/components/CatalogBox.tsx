import React, { FC } from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { DataGrid, GridRowsProp, GridColDef } from '@material-ui/data-grid'
import {getAllUser} from '../mocks/mocks'

const rows: GridRowsProp = getAllUser()

const columns: GridColDef[] = [
  { field: 'deskId', headerName: '場所', width: 100 },
  { field: 'name', headerName: '出展者名', width: 150 },
  { field: 'date', headerName: '出展日', width: 100 },
  { field: 'tag', headerName: 'ジャンル', width: 200 },
]
export const CatalogBox: FC = () => {
  return (
    <DataGrid rows={rows} columns={columns} disableColumnMenu />
  )
}
