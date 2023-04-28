import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../NewCard/NewsCard';

const Category = () => {
    const {id} = useParams()
    const categoryNews = useLoaderData();
    // console.log(categoryNews);
    return (
        <div>
            {id && <h2>This is a category: {categoryNews.length}</h2>}
            {
                categoryNews.map((news, index) => <NewsCard
                key={index}
                news={news}
                ></NewsCard>)
            }
        </div>
    );
};

export default Category;