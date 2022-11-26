import http from './axios-instance';
import TVShow from '../Models/TVShow';
import { db } from './firebase-config';
import { ref, set } from 'firebase/database';

class TVShowListDataService
{
    // create
    public create(data: TVShow, id: string)
    {
        let dataPath = ref(db, "TVShows/" + id);
        return set(dataPath, data);
    }

    // read
    public read()
    {
        return http.get<Array<TVShow>>("TVShows.json");
    }

    // update

    // delete
}

export default new TVShowListDataService();