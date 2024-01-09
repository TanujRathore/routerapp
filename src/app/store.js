// import axios from 'axios';

// export const options = {
//   method: 'GET',
//   url: 'https://yummly2.p.rapidapi.com/categories/list',
//   headers: {
//     'X-RapidAPI-Key': '42530cc22amsh33b542416a35b5bp14412bjsnadf6086534a5',
//     'X-RapidAPI-Host': 'yummly2.p.rapidapi.com'
//   }
// };
import { configureStore } from '@reduxjs/toolkit';
import { cryptoApi } from '../services/cryptoApi';
import { cryptoNewsApi } from '../services/cryptoNewsApi';

export default configureStore({
    reducer: {
        [cryptoApi.reducerPath]: cryptoApi.reducer,
        [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
        cryptoApi.middleware,
        cryptoNewsApi.middleware
    )
});

