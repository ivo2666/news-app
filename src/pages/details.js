import React, { useEffect } from 'react';
import { Card, CardContent, CardHeader, CardMedia, Grid, CircularProgress } from '@mui/material';
import { actionTypes } from '../redux/actions';
// import { NewsCard } from '../components'
import { useSelector, useDispatch } from "react-redux";
import { useParams } from 'react-router-dom';

export const Details = () => {
    const { title } = useParams();
    const news = useSelector(state => state.item)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: actionTypes.LOAD_ONE_NEWS, action: title });
    }, [dispatch, title])

    if (Object.keys(news).length < 1) {
        return <Grid pt={10} container justifyContent="center"><CircularProgress size={100} /></Grid>
    }

    return (
        <div>
            {/* <Typography align='center' p={2} variant='h4'>{news?.title}</Typography> */}
            <Card>
                <CardHeader title={news?.title} subheader={
                    news?.publishedAt?.replace("T", "  ").replace("Z", "")
                } />
                <CardMedia
                    component="img"
                    //height="194"
                    sx={{ width: '75%' }}
                    image={news?.urlToImage}
                    alt={news?.title}
                />
                <CardContent>
                    {news?.content}
                </CardContent>
            </Card>
        </div>
    )
}