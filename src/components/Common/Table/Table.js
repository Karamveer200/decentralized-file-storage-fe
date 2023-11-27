/* eslint-disable no-unused-vars */
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Scrollbar } from 'react-scrollbars-custom';
import classes from './Table.module.css';
import { ARRAY_KEYS, HEDERA_API_KEYS, ZERO } from '../../../utils/constants';
import Spinner from '../Spinner/Spinner';
import { isArray, isArrayReady } from '../../../utils/helperFunctions';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#4f46e5',
    color: theme.palette.common.white,
    fontFamily: 'Montserrat',
    fontWeight: 700
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    fontFamily: 'Montserrat',
    color: theme.palette.common.white,
    fontWeight: 500
  }
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(even)': {
    backgroundColor: '#181f2e'
  },
  '&:nth-of-type(odd)': {
    backgroundColor: '#111827'
  },

  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0
  }
}));

const TableData = ({
  headers = [],
  bodyData = [],
  isFetching = false,
  insideSidebar,
  userAccountId,
  setLocalUserAccountId = () => {}
}) => {
  const isDataFound = isArray(bodyData);

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = e.target[ZERO].value;

    setLocalUserAccountId(value);
  };

  const InputSearch = () => (
    <form onSubmit={handleSubmit}>
      <input
        className="h-8 text-base pl-5 w-full border-1 rounded-sm mb-5 MontserratFamily font-semibold"
        placeholder="Enter User account id"
        defaultValue={userAccountId}
      />
    </form>
  );

  if (isFetching) return <Spinner center />;

  const Wrapper = ({ children }) => {
    if (insideSidebar) {
      return (
        <Scrollbar className={`${classes.removeInset} h-full w-full`}>
          <>
            <InputSearch />
            {isDataFound && (
              <div className="text-sm text-white px-2 pb-1 MontserratFamily font-bold">
                Showing last 50 transactions -{' '}
              </div>
            )}
            {children}
          </>
        </Scrollbar>
      );
    }

    return <>{children}</>;
  };

  return (
    <Wrapper>
      <TableContainer component={Paper}>
        <Table sx={{ width: '100%' }} aria-label="customized table" className="">
          <TableHead>
            <TableRow>
              {isArrayReady(headers)?.map((item, index) => {
                const minWidth = item[ARRAY_KEYS.MIN_WIDTH];

                return (
                  <StyledTableCell
                    align="center"
                    key={index}
                    style={minWidth ? { minWidth: minWidth } : {}}
                    className={`${classes.borders} ${classes.fontSize16}`}>
                    {item[ARRAY_KEYS.HEADER]}
                  </StyledTableCell>
                );
              })}
            </TableRow>
          </TableHead>
          {isDataFound && (
            <TableBody>
              {bodyData.map((row, index) => {
                const rowsArray = Object.keys(row);

                return (
                  <StyledTableRow key={index}>
                    {isArrayReady(rowsArray)?.map((item, rowIndex) => {
                      if (item === ARRAY_KEYS.DISPLAY_FN) {
                        const displayFn = row[ARRAY_KEYS.DISPLAY_FN];

                        return (
                          <StyledTableCell align="center" key={rowIndex}>
                            {displayFn}
                          </StyledTableCell>
                        );
                      }

                      const dataText = row[headers?.[rowIndex]?.[ARRAY_KEYS.VALUE]];
                      return (
                        <StyledTableCell
                          align="center"
                          key={rowIndex}
                          className={`${
                            dataText === HEDERA_API_KEYS.FAILED && 'bg-red-700 text-white'
                          } ${
                            dataText === HEDERA_API_KEYS.SUCCESS &&
                            'bg-green-700 text-white font-bold'
                          }  ${classes.borders} ${classes.fontSize14}`}>
                          {dataText}
                        </StyledTableCell>
                      );
                    })}
                  </StyledTableRow>
                );
              })}
            </TableBody>
          )}
        </Table>
      </TableContainer>
      {!isDataFound && <div className="w-full bg-transparent text-white m-7">No data found...</div>}
    </Wrapper>
  );
};

export default TableData;
