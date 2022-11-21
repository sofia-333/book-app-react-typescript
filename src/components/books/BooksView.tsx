import React, {useState} from "react";
import {ISBN_REGEX, openNotificationWithIcon} from '../../utils/helpers'
import {Book} from '../../utils/types'
import {getBookByISBN} from '../../services/bookService'
import BookComponent from "./Book";
import {Input} from "antd";
import IsbnCollapse from "./IsbnCollapse";
import DefaultBookView from "./DefaultBookView";

const {Search} = Input;


const BooksView = () => {
    const [book, setBook] = useState<Book | null>(null);
    const [isbn, setIsbn] = useState("");
    const [loading, setLoading] = useState(false);


    const getBookData = () => {
        if (!isbn) return

        if (ISBN_REGEX.test(isbn)) {
            setLoading(true);
            getBookByISBN(isbn).then((newBook) => {
                if (newBook) {
                    setBook(newBook);
                    setIsbn("");
                }
                setLoading(false);
            });
        } else {
            openNotificationWithIcon("Wrong ISBN number provided.");
        }

    }

    const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsbn(event.target.value);
    }

    return (
        <>
            <div className="text-orange-900">
                <div className="w-full h-16 bg-orange-200 flex justify-end p-3 items-center">
                    <div className="w-50">
                        <Search
                            placeholder="ISBN"
                            name="ISBN"
                            value={isbn}
                            onSearch={() => getBookData()}
                            onChange={(e) => onSearchChange(e)}
                        />
                    </div>
                </div>
                <IsbnCollapse/>
                {!book ?
                    <DefaultBookView/>
                    :
                    <div>
                        <BookComponent book={book} loading={loading}/>
                    </div>
                }
            </div>
        </>);
}

export default BooksView;