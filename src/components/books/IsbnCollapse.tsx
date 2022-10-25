import React from "react";
import { Collapse } from "antd";


const { Panel } = Collapse;

const text = (
    <div className="pl-1 text-orange-900">
        <p>
            An ISBN is an International Standard Book Number. ISBNs were 10 digits in length up to the end of December
            2006,
            but since 1 January 2007 they now always consist of 13 digits. ISBNs are calculated using a specific
            mathematical formula and include a check digit to validate the number.
            Each ISBN consists of 5 elements with each section being separated by spaces or hyphens. Three of the five
            elements may be of varying length:
        </p>
        <div>
            <p> Prefix element – currently this can only be either 978 or 979. It is always 3 digits in length</p>
            <p>Registration group element – this identifies the particular country, geographical region, or language
                area
                participating in the ISBN system. This element may be between 1 and 5 digits in length
            </p>
            <p>Registrant element - this identifies the particular publisher or imprint. This may be up to 7 digits in
                length
            </p>
            <p>Publication element – this identifies the particular edition and format of a specific title. This may be
                up to 6
                digits in length
            </p>
            <p>Check digit – this is always the final single digit that mathematically validates the rest of the
                number.
                It is
                calculated using a Modulus 10 system with alternate weights of 1 and 3.
            </p>
        </div>
        <a href="https://www.isbn-international.org/content/what-isbn">Read more about ISBN</a>
    </div>
);

const IsbnCollapse = () => {
    return (
        <Collapse bordered={false}>
            <Panel header="What is ISBN" key='1'>
                {text}
            </Panel>
        </Collapse>
    )
}

export default IsbnCollapse;