import React from 'react';
import uuid from 'react-uuid';
import {ListItem} from "../../utils/types"


interface IListItems {
    items: ListItem[];
    displayAttribute?: string;
    isLink: boolean;
}

const ListItems = ({items, isLink, displayAttribute}: IListItems) => {

    const getUniqueKey = (field?: string) => {
        return field + "-" + uuid();
    }

    return (
        <div className="text-orange-900">
            {items.map((item) => (
                <div key={getUniqueKey(item[displayAttribute as keyof typeof item])} className="mb-1">
                    {isLink ?
                        <a href={item.url}>
                            <p>{item[displayAttribute as keyof typeof item]}</p>
                        </a>
                        :
                        <div>
                            {item[displayAttribute as keyof typeof item]}
                        </div>
                    }
                </div>
            ))}
        </div>
    );
}

export default ListItems;