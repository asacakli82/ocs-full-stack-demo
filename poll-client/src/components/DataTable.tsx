import React, {forwardRef} from 'react';

import MaterialTable, {MaterialTableProps} from "material-table";
import {Paper} from "@material-ui/core";

import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';


const ICONS = {
  Add: forwardRef((props: any, ref: React.Ref<SVGSVGElement>) => <AddBox {...props} ref={ref}/>),
  Check: forwardRef((props: any, ref: React.Ref<SVGSVGElement>) => <Check {...props} ref={ref}/>),
  Clear: forwardRef((props: any, ref: React.Ref<SVGSVGElement>) => <Clear {...props} ref={ref}/>),
  Delete: forwardRef((props: any, ref: React.Ref<SVGSVGElement>) => <DeleteOutline {...props} ref={ref}/>),
  DetailPanel: forwardRef((props: any, ref: React.Ref<SVGSVGElement>) => <ChevronRight {...props} ref={ref}/>),
  Edit: forwardRef((props: any, ref: React.Ref<SVGSVGElement>) => <Edit {...props} ref={ref}/>),
  Export: forwardRef((props: any, ref: React.Ref<SVGSVGElement>) => <SaveAlt {...props} ref={ref}/>),
  Filter: forwardRef((props: any, ref: React.Ref<SVGSVGElement>) => <FilterList {...props} ref={ref}/>),
  FirstPage: forwardRef((props: any, ref: React.Ref<SVGSVGElement>) => <FirstPage {...props} ref={ref}/>),
  LastPage: forwardRef((props: any, ref: React.Ref<SVGSVGElement>) => <LastPage {...props} ref={ref}/>),
  NextPage: forwardRef((props: any, ref: React.Ref<SVGSVGElement>) => <ChevronRight {...props} ref={ref}/>),
  PreviousPage: forwardRef((props: any, ref: React.Ref<SVGSVGElement>) => <ChevronLeft {...props} ref={ref}/>),
  ResetSearch: forwardRef((props: any, ref: React.Ref<SVGSVGElement>) => <Clear {...props} ref={ref}/>),
  Search: forwardRef((props: any, ref: React.Ref<SVGSVGElement>) => <Search {...props} ref={ref}/>),
  SortArrow: forwardRef((props: any, ref: React.Ref<SVGSVGElement>) => <ArrowDownward {...props} ref={ref}/>),
  ThirdStateCheck: forwardRef((props: any, ref: React.Ref<SVGSVGElement>) => <Remove {...props} ref={ref}/>),
  ViewColumn: forwardRef((props: any, ref: React.Ref<SVGSVGElement>) => <ViewColumn {...props} ref={ref}/>)
};

const LANG = {
  body: {
    emptyDataSourceMessage: 'G??sterilecek kay??t yok'
  },
  toolbar: {
    searchTooltip: 'Arama',
    searchPlaceholder: 'Arama'
  },
  pagination: {
    labelRowsSelect: 'sat??r',
    labelDisplayedRows: '{count} sat??rdan {from}-{to} aras??',
    firstTooltip: '??lk Sayfa',
    previousTooltip: '??nceki Sayfa',
    nextTooltip: 'Sonraki Sayfa',
    lastTooltip: 'Son Sayfa'
  }
};

const COMPONENTS = {
  Container: (props: any) => <Paper {...props} variant="outlined"/>
};

export default function DataTable<RowData extends object>(props: MaterialTableProps<RowData>) {
  return (
    <MaterialTable
      icons={ICONS}
      localization={LANG}
      components={COMPONENTS}
      {...props}
    />
  )
}
