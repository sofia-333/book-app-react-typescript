import axios from 'axios'
import {BASE_URL, openNotificationWithIcon} from '../utils/helpers'
import {Book} from '../utils/types'

export const getBookByISBN = (isbn: string) => {
    return axios.get(BASE_URL + `book/${isbn}`)
        .then((response) => {
            return response.data as Book;
        })
        .catch((error) => {
            if (error.response?.data?.non_field_errors && error.response.data.non_field_errors[0]) {
                openNotificationWithIcon(error.response.data.non_field_errors[0]);
            } else {
                openNotificationWithIcon(error.message);
            }
            return null;
        });
}