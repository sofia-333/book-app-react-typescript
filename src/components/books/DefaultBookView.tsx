import BooksImage from "../../assets/books.png";
import React from "react";

const DefaultBookView = () => {
    return (
        <div className="flex text-center flex-col">
            <div className="p-2 pl-5">
                <p className="text-orange-900 text-xl mt-4">Search for your book easily using ISBN 10 or
                    13!</p>
            </div>
            <div className="rounded-2xl border-grey-700 border mx-auto">
                <img alt="Books" src={BooksImage} className="w-[550px] rounded-3xl"/>
            </div>
        </div>
    )
}

export default DefaultBookView;