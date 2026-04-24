import BlogList from "../blog/list";
import React from 'react';

function RecentBlogs({posts}) {
    return (
        <div className="flex flex-col md:flex-row w-full md:w-[80%] mx-auto">
            {posts?.posts.map((post, id) => (
                <div className="w-full md:w-1/3 lg:w-1/4 px-2" key={id}>
                    <BlogList post={post}/>
                </div>
            ))}
        </div>
    );
}

export default RecentBlogs;