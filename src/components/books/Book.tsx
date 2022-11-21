import React from "react";
import {Card, Skeleton} from "antd";
import NoCoverImage from "../../assets/coverNotAvailable.png";
import ListInfo from "../common/ListInfo";
import {Book} from "../../utils/types";

interface IBook {
    book: Book;
    loading: boolean;
}

const BookComponent = ({book, loading}: IBook) => {
    return (
        <div className="w-[1000px] mx-auto mt-16">
            <Card title={!loading && book.title ? book.title : ""}>
                {loading ?
                    <Skeleton loading active/>
                    :
                    <div className="flex mb-4 flex-col">
                        <div className="flex flex-row">
                            {book.cover_url ?
                                <img src={book.cover_url} alt="Book Cover" className="image"/>
                                :
                                <img src={NoCoverImage} alt="Book Cover" className="image"/>
                            }
                            <div className="mx-3 text-orange-900">
                                {book.isbn_10 && <p>ISBN 10: {book.isbn_10}</p>}
                                {book.isbn_13 && <p>ISBN 13: {book.isbn_13}</p>}
                                {book.publish_date && <p>Publish Date: {book.publish_date}</p>}
                                {book.number_of_pages && <p>Number of Pages: {book.number_of_pages}</p>}
                                {book.notes && <p>Notes: {book.notes}</p>}
                            </div>
                        </div>
                        <div className="mt-2">
                            <ListInfo items={book.authors} title="Authors" isLink={true}/>
                            <ListInfo items={book.publishers} title="Publishers"/>
                            <ListInfo items={book.publish_places} title="Publish Places"/>
                            <ListInfo items={book.subject_people} title="Subject People"/>
                            <ListInfo items={book.subject_places} title="Subject Places"/>
                            <ListInfo items={book.subjects} title="Subjects"/>
                            <ListInfo items={book.links} title="Links" isLink={true} displayAttribute="title"/>
                        </div>
                    </div>
                }
            </Card>

        </div>
    );
}

export default BookComponent;