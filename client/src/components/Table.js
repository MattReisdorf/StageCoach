import React, { useState } from 'react';
import { useTable, useSortBy } from 'react-table';
import { Link } from 'react-router-dom';
import './css/Search.css';

function Table(props) {
    const data = React.useMemo(
        () => props.searchResults,
        []
    )

    const columns = React.useMemo(
        () => [
            {
                Header: 'Name',
                accessor: 'name',
                Cell: ({row}) => {
                    return (
                        row.original.type === "Venue" ?
                        <Link to = {{ pathname: `venues/${row.original.id}`}}>{row.values.name}</Link> :
                        <Link to = {{ pathname: `artists/${row.original.id}`}}>{row.values.name}</Link>
                    )
                }
            },
            {
                Header: 'Genres',
                accessor: 'genres'
            },
            {
                Header: 'Type',
                accessor: 'type'
            },
            {
                Header: 'Location',
                accessor: 'location'
            },
            {
                Header: 'Distance',
                accessor: 'distance'
            }
        ],
        []
    )

    const tableInstance = useTable(
        {
            columns,
            data
        },
        useSortBy
    )

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = tableInstance

    return (
        <table {...getTableProps()} className = 'table table-sortable text-center'>
            <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th {...column.getHeaderProps(column.getSortByToggleProps())} scope = 'col'>
                                {column.render('Header')}
                                <span>
                                    {column.isSorted
                                    ? column.isSortedDesc ? ' ▼' : ' ▲'
                                    : ''}
                                </span>
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>

            <tbody {...getTableBodyProps()}>
                {rows.map(row => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                return (
                                    <td {...cell.getCellProps()}>
                                        {cell.render('Cell')}
                                    </td> 
                                )
                            })}
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default Table;