//var dataTable_directive = require('./lib/DataTable');
//var defaultSorter_directive = require('./lib/DefaultSorter');
//var paginator_component = require('./lib/Paginator');
//var bootstrapPaginator_component = require('./lib/BootstrapPaginator');

//exports.DataTable = dataTable_directive.DataTable;
//exports.DataEvent = dataTable_directive.DataEvent;
//exports.PageEvent = dataTable_directive.PageEvent;
//exports.SortEvent = dataTable_directive.SortEvent;
//exports.DefaultSorter = defaultSorter_directive.DefaultSorter;
//exports.Paginator = paginator_component.Paginator;
//exports.BootstrapPaginator = bootstrapPaginator_component.BootstrapPaginator;

//exports.DataTableDirectives = [
//    dataTable_directive.DataTable,
//    defaultSorter_directive.DefaultSorter,
//    paginator_component.Paginator,
//    bootstrapPaginator_component.BootstrapPaginator
//];

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTable } from './src/DataTable';
import { DefaultSorter } from './src/DefaultSorter';
import { Paginator } from './src/Paginator';
import { BootstrapPaginator } from './src/BootstrapPaginator';

@NgModule({
    imports: [CommonModule],
    declarations: [DataTable, DefaultSorter, Paginator,BootstrapPaginator],
    exports: [DataTable, DefaultSorter, BootstrapPaginator]
})
export class DataTableModule {

}