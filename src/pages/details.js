import React, { useEffect } from 'react';
import { Card, CardContent, CardHeader, CardMedia, Grid, CircularProgress } from '@mui/material';
import { actionTypes } from '../redux/actions';
import { useSelector, useDispatch } from "react-redux";
import { useParams } from 'react-router-dom';

export const Details = () => {
    const { title } = useParams();
    const error = useSelector(state => state.error);
    const news = useSelector(state => state.item);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: actionTypes.LOAD_ONE_NEWS, action: title });
    }, [dispatch, title]);

    if (error) {
        throw new Error(error);
    };

    if (!news ) {
        return <Grid pt={10} container justifyContent="center"><CircularProgress size={100} /></Grid>
    };

    return (
        <div>
            <Card>
                <CardHeader title={news?.title} subheader={
                    news?.publishedAt?.replace("T", "  ").replace("Z", "")
                } />
                <CardMedia
                    component="img"
                    sx={{width: {xs:"100%", sm: "600px", lg:"900px"} }}
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