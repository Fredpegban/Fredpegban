import React from "react";
import { BlogPost } from "./BlogCard";
import { Button } from "../ui/button";
import { ArrowRight, Calendar, User } from "lucide-react";
import { Link } from "react-router-dom";

interface FeaturedPostProps {
  post: BlogPost;
}

const FeaturedPost = ({ post }: FeaturedPostProps) => {
  return (
    <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-blue-900 to-blue-700 text-white">
      <div className="absolute inset-0 z-0 opacity-30">
        <img
          src={post.coverImage}
          alt={post.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 p-8 md:p-12 flex flex-col h-full">
        <div className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full w-fit mb-4">
          {post.category}
        </div>

        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
          {post.title}
        </h2>

        <p className="text-blue-100 mb-6 max-w-2xl text-lg">{post.excerpt}</p>

        <div className="flex items-center text-sm text-blue-100 space-x-4 mb-6">
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

        <div className="mt-auto">
          <Button asChild className="bg-white text-blue-900 hover:bg-blue-50">
            <Link to={`/blog/${post.slug}`} className="flex items-center">
              Read Article <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPost;
