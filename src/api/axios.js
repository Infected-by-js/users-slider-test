import axios from 'axios';
import {BASE_URL} from '../helpers/constants';

export default new axios.create({baseURL: BASE_URL});
