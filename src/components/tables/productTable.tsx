import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function createData(name, price, stock, category, rating, history, image) {
  return {
    name,
    price,
    stock,
    category,
    rating,
    history,
    image,
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row" sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <img src={row.image} alt={row.name} width={50} height={50} style={{ borderRadius: 8, objectFit: 'cover' }} />
          {row.name}
        </TableCell>
        <TableCell align="right">${row.price.toFixed(2)}</TableCell>
        <TableCell align="right">{row.stock}</TableCell>
        <TableCell align="right">{row.category}</TableCell>
        <TableCell align="right">{row.rating}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Purchase History
              </Typography>
              <Table size="small" aria-label="history">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Customer</TableCell>
                    <TableCell align="right">Amount</TableCell>
                    <TableCell align="right">Total price ($)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.customerId}</TableCell>
                      <TableCell align="right">{historyRow.amount}</TableCell>
                      <TableCell align="right">
                        {(historyRow.amount * row.price).toFixed(2)}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    price: PropTypes.number.isRequired,
    stock: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      }),
    ).isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

const rows = [
  createData(
    'Sneakers Model 1',
    79.99,
    120,
    'Footwear',
    4.5,
    [
      { date: '2023-07-15', customerId: 'C1001', amount: 2 },
      { date: '2023-07-10', customerId: 'C1005', amount: 1 },
    ],
    '/s1.jpg' // عکس‌ها داخل فولدر public/images باید باشن
  ),
  createData(
    'Running Shoes 2',
    89.99,
    80,
    'Footwear',
    4.2,
    [
      { date: '2023-07-20', customerId: 'C1002', amount: 3 },
      { date: '2023-07-18', customerId: 'C1006', amount: 2 },
    ],
    '/s2.jpg'
  ),
  createData(
    'Casual Sneakers 3',
    69.99,
    150,
    'Footwear',
    4.0,
    [
      { date: '2023-07-19', customerId: 'C1003', amount: 1 },
      { date: '2023-07-14', customerId: 'C1007', amount: 4 },
    ],
    '/s3.jpg'
  ),
  createData(
    'Sport Shoes 4',
    99.99,
    60,
    'Footwear',
    4.7,
    [
      { date: '2023-07-22', customerId: 'C1004', amount: 2 },
      { date: '2023-07-21', customerId: 'C1008', amount: 1 },
    ],
    '/s4.jpg'
  ),
  createData(
    'Walking Sneakers 5',
    59.99,
    200,
    'Footwear',
    3.9,
    [
      { date: '2023-07-25', customerId: 'C1009', amount: 5 },
      { date: '2023-07-26', customerId: 'C1010', amount: 3 },
    ],
    '/s5.jpg'
  ),
  createData(
    'Trail Running 6',
    109.99,
    50,
    'Footwear',
    4.8,
    [
      { date: '2023-07-28', customerId: 'C1011', amount: 1 },
      { date: '2023-07-29', customerId: 'C1012', amount: 2 },
    ],
    '/s6.jpg'
  ),
];

export default function CollapsibleProductTable() {
  return (
    <TableContainer component={Paper} sx={{ borderRadius: '10px',
              boxShadow: '0 0 8px rgba(0, 0, 0, 0.2)', // سطح پایین سایه (مقدار بین 1 تا 24)
              bgcolor: 'background.default', }}>
      <Table aria-label="collapsible product table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Product</TableCell>
            <TableCell align="right">Price ($)</TableCell>
            <TableCell align="right">Stock</TableCell>
            <TableCell align="right">Category</TableCell>
            <TableCell align="right">Rating</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
