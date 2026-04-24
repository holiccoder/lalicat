import React from 'react';
import {NextSeo} from "next-seo";
import Release from "../../components/release";
import {getReleases} from "../../lib/api";


export const getStaticProps = async () => {
    let releases = await getReleases()
    return {
        props:{
            releases
        },
        revalidate:10
    }
}

function ReleaseNotes({releases}) {
    return (
        <div className="w-full flex flex-col justify-center mt-10 md:mt-44">
            <div className="text-center text-4xl font-extrabold py-10">Lalicat Release Notes</div>
            <NextSeo title="lalicat release notes, what's new in lalicat" description="lalicat update and release notes, you can check it out here"/>
            <div className="flex p-10 flex-col justify-center shadow-lg rounded-lg md:w-1/3 mx-auto" id="release">
                {
                    releases && releases.posts.map((item,index) => (
                        <Release release={item} key={index}/>
                    ))
                }
            </div>
        </div>
    );
}

export default ReleaseNotes;