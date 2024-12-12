import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';

const Tablee = () => {
    const columns = [
        { id: 'name', label: 'Name', minWidth: 150 },
        { id: 'email', label: 'Email', minWidth: 150 },
        { id: 'phone', label: 'Phone', minWidth: 120 },
        { id: 'schedule', label: 'Schedule', minWidth: 120 },
        { id: 'service', label: 'Service', minWidth: 150 },
        { id: 'edit', label: 'Edit', minWidth: 100 },
        { id: 'delete', label: 'Delete', minWidth: 100 },
    ];

    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:5000/formdata');
            setData(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/formdata/${id}`);
            fetchData();
        } catch (error) {
            console.error(error);
        }
    };

    const handleEdit = (entry) => {
        navigate('/nav/contact', { state: entry });
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                            <TableRow hover tabIndex={-1} key={row.id}>
                                {columns.map((column) => {
                                    if (column.id === 'edit') {
                                        return (
                                            <TableCell key={column.id}>
                                                <Button
                                                    variant="contained"
                                                    color="primary"
                                                    size="small"
                                                    onClick={() => handleEdit(row)}
                                                >
                                                    Edit
                                                </Button>
                                            </TableCell>
                                        );
                                    }
                                    if (column.id === 'delete') {
                                        return (
                                            <TableCell key={column.id}>
                                                <Button
                                                    variant="contained"
                                                    color="secondary"
                                                    size="small"
                                                    onClick={() => handleDelete(row.id)}
                                                >
                                                    Delete
                                                </Button>
                                            </TableCell>
                                        );
                                    }
                                    return (
                                        <TableCell key={column.id}>
                                            {row[column.id]}
                                        </TableCell>
                                    );
                                })}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={data.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
};

export default Tablee