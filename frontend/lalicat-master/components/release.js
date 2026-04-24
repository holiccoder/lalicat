import React from 'react';
import parse from "html-react-parser";

function Release({release}) {
    return (
        <div className="flex flex-col pb-4">
            <div className="text-4xl font-bold pb-8">{release.title} ({release.release_date})</div>
            <div className="pb-5">
                {parse(release.content)}
            </div>
            <hr/>
        </div>
    );
}

export default Release;