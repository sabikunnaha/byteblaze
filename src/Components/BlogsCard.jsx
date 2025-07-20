import React from 'react';
import { Link } from 'react-router-dom';

const BlogsCard = ({blog}) => {

    return (
       <Link to={`/blog/${blog.id}`} rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group transition hover:scale-105 border-2 border-opacity-30  border-primary hover:border-secondary  hover:no-underline focus:no-underline dark:bg-gray-50 dark:bg-gray-50">
				<img role="presentation" className="object-cover w-full rounded-none rounded h-44 dark:bg-gray-500 dark:bg-gray-500" src={blog.social_image} />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{blog.title}</h3>
					<span className="text-xs dark:text-gray-600 dark:text-gray-600">{new Date(blog.created_at).toLocaleDateString()}</span>
					<p>{blog.description}</p>
				</div>
			</Link>
    );
};

export default BlogsCard;