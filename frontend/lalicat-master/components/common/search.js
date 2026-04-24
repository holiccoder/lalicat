import React, {useEffect, useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {SearchReq} from "../../lib/api";

const Search = () => {

    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const delayBounceFn = setTimeout(() => {
            // console(searchReq(searchTerm))
            // redirect to search to show the result
        }, 3000)
        return () => clearTimeout(delayBounceFn)
    }, [searchTerm])

    return (
        <div className="h-12 h-fit w-fit relative my-10">
            <input className="border border-gray-300 bg-gray-200 h-12 w-96 rounded p-3" autoFocus="autofocus" type="text" placeholder="What is your question?" onChange={(e) => setSearchTerm(e.target.value)} />
            <FontAwesomeIcon icon={faSearch} size={'xl'} className="absolute top-[30%] right-[3%]"></FontAwesomeIcon>
        </div>
    );
};

export default Search;
