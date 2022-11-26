import axios from 'axios';
import { db } from './firebase-config';

export default axios.create({
    baseURL: db.app.options.databaseURL,
    headers: {
        "Content-type": "application/json"
    }
});