import React, { useEffect } from 'react';
import { NewsCard } from '../components';
import { useSelector, useDispatch } from "react-redux";
import { actionTypes } from '../redux/actions';
import { Grid } from '@mui/material';

export const Home = () => {
    const data = useSelector(state => state.data)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: actionTypes.LOAD_ALL_NEWS });
    }, [dispatch])

    return (
        <Grid container justifyContent="space-around" p={4} rowSpacing={3}>
            {data.map(item => {
                return (<Grid item key={item.url} ><NewsCard data={item} /></Grid>)
            })}
        </Grid>
    )
}