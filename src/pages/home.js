import React, { useEffect, useState } from 'react';
import { NewsCard } from '../components';
import { useSelector, useDispatch } from "react-redux";
import { actionTypes } from '../redux/actions';
import { Box, CircularProgress, Grid, Pagination } from '@mui/material';


export const Home = () => {
    const [page, setPage] = useState(1);
    const data = useSelector(state => state.data);
    const error = useSelector(state => state.error);
    const [pagData, setPagData] = useState([]);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch({ type: actionTypes.LOAD_ALL_NEWS });
    }, [dispatch]);

    useEffect(() => {
        setPagData(data?.slice(0, 9));
    }, [data]);

    if (error) {
        throw new Error(error);
    };

    const handleChange = (e, p) => {
        const curentPag = Number(p + "0");
        setPage(p);
        setPagData(data?.slice(curentPag - 10, curentPag - 1));
    };

    if (data?.length < 1) {
        return <Grid pt={10} container justifyContent="center"><CircularProgress size={100} /></Grid>
    };

    return (
        <Box positon="relative">
            <Grid container justifyContent="space-around" height="calc(100vh - 130px)" overflow="auto" p={3} m={0}  rowSpacing={3}>
                {pagData?.map(item => {
                    return (<Grid item key={item.url} ><NewsCard data={item} /></Grid>)
                })}
               
            </Grid>
            <Box width="100%" position="absolute" bottom="20px" >
                <Pagination
                    count={data?.length > 10 ? Math.floor(data.length / 10) : 1}
                    sx={{margin:"auto", width: "fit-content"}}
                    size="large"
                    page={page}
                    variant="outlined"
                    shape="rounded"
                    onChange={handleChange}
                />
            </Box>
        </Box>
    )
}