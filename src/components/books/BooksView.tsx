import React, { useState } from "react";
import { ISBN_REGEX, openNotificationWithIcon } from '../../utils/helpers'
import { Book } from '../../utils/types'
import { getBookByISBN } from '../../services/bookService'
import BookComponent from "./Book";
import { Input } from "antd";
import BooksImage from '../../assets/books.png'
import IsbnCollapse from "./IsbnCollapse";

const { Search } = Input;


const BooksView = () => {
    const [book, setBook] = useState<Book | null>(null);
    const [isbn, setIsbn] = useState("");
    const [loading, setLoading] = useState(false);


    const getBookData = () => {
        if (!isbn) return

        setLoading(true);

        if (ISBN_REGEX.test(isbn)) {
            getBookByISBN(isbn).then((newBook) => {
                if (newBook) {
                    setBook(newBook);
                    setIsbn("");
                }
            });
        } else {
            openNotificationWithIcon("Wrong ISBN number provided.");
        }

        setLoading(false);
    }

    const onSearchChange = (event: any) => {
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
                </div >
                <IsbnCollapse />
                {!book ?
                    <div className="flex text-center flex-col">
                        <div className="p-2 pl-5">
                            <p className="text-orange-900 text-xl mt-4">Search for your book easily using ISBN 10 or 13!</p>
                        </div>
                        <div className="rounded-2xl border-grey-700 border mx-auto">
                            <img alt="Books" src={BooksImage} className="w-[550px] rounded-3xl" />
                        </div>
                    </div>
                    :
                    <div>
                        <BookComponent book={book} loading={loading} />
                    </div>
                }
            </div>
        </>);
}

export default BooksView;