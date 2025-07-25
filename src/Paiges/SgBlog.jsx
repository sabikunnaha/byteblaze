import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SgBlog = () => {
    const snblog = useLoaderData();
    console.log(snblog)
    return (
        <div className="max-w-2xl px-6 py-16 mx-auto space-y-12">
            <article className="space-y-8 dark:bg-gray-100 dark:text-gray-900">
                <div className="space-y-6">
                    <h1 className="text-4xl font-bold md:tracking-tight md:text-5xl"> {snblog.title}</h1>
                    <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center dark:text-gray-600">
                     <p className="text-sm">{snblog.reading_time_minutes} • { new Date(snblog.created_at).toLocaleDateString()}</p>
                     <p className="flex-shrink-0 mt-3 text-sm md:mt-0">{snblog.reading_time_minutes}min read •  {snblog.public_reactions_count} views</p>
                    </div>
                </div>
                <div className="dark:text-gray-800">
                    <p>Insert the actual text content here...</p>
                </div>
            </article>
            <div>
                <div className="flex flex-wrap py-6 gap-2 border-t border-dashed dark:border-gray-600">
                    <a rel="noopener noreferrer" href="#" className="px-3 py-1 rounded-sm hover:underline dark:bg-violet-600 dark:text-gray-50">#MambaUI</a>
                    <a rel="noopener noreferrer" href="#" className="px-3 py-1 rounded-sm hover:underline dark:bg-violet-600 dark:text-gray-50">#TailwindCSS</a>
                    <a rel="noopener noreferrer" href="#" className="px-3 py-1 rounded-sm hover:underline dark:bg-violet-600 dark:text-gray-50">#Angular</a>
                </div>
                <div className="space-y-2">
                    <h4 className="text-lg font-semibold">Related posts</h4>
                    <ul className="ml-4 space-y-1 list-disc">
                        <li>
                            <a rel="noopener noreferrer" href="#" className="hover:underline">Nunc id magna mollis</a>
                        </li>
                        <li>
                            <a rel="noopener noreferrer" href="#" className="hover:underline">Duis molestie, neque eget pretium lobortis</a>
                        </li>
                        <li>
                            <a rel="noopener noreferrer" href="#" className="hover:underline">Mauris nec urna volutpat, aliquam lectus sit amet</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SgBlog;