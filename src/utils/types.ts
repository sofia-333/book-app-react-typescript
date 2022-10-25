export interface ListItem {
    name?: string;
    title?: string;
    url?: string;
}

export interface Book {
    isbn_10?: string;
    isbn_13?: string;
    title?: string;
    authors?: ListItem[];
    number_of_pages?: string;
    publishers?: ListItem[];
    publish_places?: ListItem[];
    publish_date?: string;
    subjects?: ListItem[];
    subject_places?: ListItem[];
    subject_people?: ListItem[];
    notes?: string;
    links?: ListItem[];
    cover_url?: string;
}
