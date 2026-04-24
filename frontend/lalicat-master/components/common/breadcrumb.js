import React from 'react';
import {useRouter} from "next/router";
import Link from "next/link";
import parse from "html-react-parser";

const Breadcrumb = ({article}) => {
    const router = useRouter()
    const {slug} = router.query

    return (
        <div className="max-w-full">
          <ul className={'flex p-3 my-5 text-lg'}>
              <li>
                  <Link href={'/'}>
                      <a className={'px-2 py-2'}>home</a>
                  </Link>
              </li>
                  >
              <li>
                  <Link href={article.slug}>
                     <a className="px-2 py-2">{parse(article.title)}</a>
                  </Link>
              </li>
          </ul>
        </div>
    );
};

export default Breadcrumb;
