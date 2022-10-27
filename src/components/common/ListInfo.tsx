import {Button} from "antd";
import React, {useState} from "react";
import ListItems from "./ListItems";
import "./ListInfo.css"
import {ListItem} from "../../utils/types"


interface IListInfo {
    items?: ListItem[];
    displayAttribute?: string;
    itemsShowNum?: number;
    isLink?: boolean;
    title: string;
}

const ListInfo = ({items, displayAttribute = 'name', isLink = false, itemsShowNum = 5, title}: IListInfo) => {
    const [showMore, setShowMore] = useState(false);

    return (
        <div>
            {items && items.length > 0 &&
                <div className="mb-2 title text-orange-900">
                    <p className="title text-lg border-slate-200 border-t border-b font-semibold">{title}</p>
                    {/* display items without "show more" if items length is less or equal than num of items we want to show by default */}
                    {items.length <= itemsShowNum ?
                        <div>
                            <ListItems isLink={isLink} items={items} displayAttribute={displayAttribute}/>
                        </div>
                        :
                        <div>
                            {/* display items with "show more" clickable link */}
                            <ListItems isLink={isLink} items={items.slice(0, itemsShowNum)}
                                       displayAttribute={displayAttribute}/>
                            {showMore &&
                                <div>
                                    <ListItems isLink={isLink} items={items.slice(itemsShowNum - items.length)}
                                               displayAttribute={displayAttribute}/>
                                </div>
                            }
                            {showMore ?
                                <Button type="link" size="small" onClick={() => setShowMore(false)}
                                        className="px-0 btn-padding">Show Less</Button>
                                :
                                <Button type="link" size="small" onClick={() => setShowMore(true)}
                                        className="px-0 btn-padding">Show More</Button>
                            }
                        </div>
                    }
                </div>
            }
        </div>

    )
}

export default ListInfo;