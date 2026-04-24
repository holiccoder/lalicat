import React, {useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import TreeMenu, { ItemComponent } from 'react-simple-tree-menu';
import '../../node_modules/react-simple-tree-menu/dist/main.css';

const Sidebar = ({sidebar}) => {
    return (
        <div className="ml-0 flex flex-col md:ml-10">
            <TreeMenu data={sidebar}>
                {({ search, items,  }) => (
                    <>
                        <input onChange={e => search(e.target.value)} placeholder="search" className="border border-gray-300 rounded p-3 h-10 w-full" />
                    <ul>
                        {items.map(({key, label, onClick, toggleNode, ...props}) => (
                            <ItemComponent key={key} label={label} onClick={() => {
                               if(key === 'menu4748'){window.location.href="https://docs.lalicat.com/web/#/5";};
                               if(props.hasNodes){toggleNode()}else{ window.location.href=props.slug}}} {...props} />
                        ))}
                    </ul>
                    </>
                )}
            </TreeMenu>
        </div>
    );
};

export default Sidebar;
