import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Button } from "../ui/button";
import { ArrowRight, Calendar, User } from "lucide-react";
import { Link } from "react-router-dom";

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  slug: string;
  coverImage: string;
}

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <Card className="h-full flex flex-col overflow-hidden bg-white hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48 overflow-hidden">
        <img
          src={post.coverImage}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded">
          {post.category}
        </div>
      </div>

      <CardHeader className="pb-2">
        <h3 className="text-xl font-bold text-blue-900 line-clamp-2 hover:text-blue-700 transition-colors">
          <Link to={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>
      </CardHeader>

      <CardContent className="flex-grow">
        <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>

        <div className="flex items-center text-sm text-gray-500 space-x-4">
          <div className="flex items-center">
            <User className="h-4 w-4 mr-1" />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{post.date}</span>
          </div>
          <div>{post.readTime}</div>
        </div>
      </CardContent>

      <CardFooter className="pt-2">
        <Button
          variant="ghost"
          className="text-blue-600 p-0 hover:text-blue-800 hover:bg-transparent"
        >
          <Link to={`/blog/${post.slug}`} className="flex items-center">
            Read More <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BlogCard;
