import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import FeaturedPost from "../components/blog/FeaturedPost";
import BlogCard, { BlogPost } from "../components/blog/BlogCard";
import BlogSearch from "../components/blog/BlogSearch";
import CategoryFilter from "../components/blog/CategoryFilter";
import Pagination from "../components/blog/Pagination";
import Newsletter from "../components/blog/Newsletter";
import {
  blogPosts,
  getCategories,
  getFeaturedPost,
  searchPosts,
} from "../data/blogPosts";

const Blog = () => {
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>(blogPosts);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const postsPerPage = 6;
  const categories = getCategories();
  const featuredPost = getFeaturedPost();

  // Filter posts based on category and search query
  useEffect(() => {
    let result = blogPosts;

    // Apply search filter if there's a query
    if (searchQuery) {
      result = searchPosts(searchQuery);
    }

    // Apply category filter if a category is selected
    if (selectedCategory) {
      result = result.filter((post) => post.category === selectedCategory);
    }

    setFilteredPosts(result);
    setCurrentPage(1); // Reset to first page when filters change
  }, [selectedCategory, searchQuery]);

  // Calculate pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  // Handle page change
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Handle search
  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  // Handle category selection
  const handleCategorySelect = (category: string | null) => {
    setSelectedCategory(category);
  };

  // Handle consultation button click
  const handleConsultationClick = () => {
    // Scroll to contact section or navigate to contact page
    window.location.href = "/#contact";
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Blog - SellapyTech | Software Development Insights</title>
        <meta
          name="description"
          content="Explore the latest insights, trends, and best practices in software development, testing, and AI automation from SellapyTech's expert team."
        />
        <meta
          name="keywords"
          content="software development blog, testing automation, AI solutions, tech insights, software engineering best practices"
        />
        <meta
          property="og:title"
          content="SellapyTech Blog - Software Development Insights"
        />
        <meta
          property="og:description"
          content="Expert insights on software development, testing, and AI automation to help your business succeed in the digital landscape."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://sellapytech.com/blog" />
      </Helmet>

      {/* Navigation */}
      <Navbar
        onConsultationClick={handleConsultationClick}
        navLinks={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/#services" },
          { label: "Why Choose Us", href: "/#why-choose-us" },
          { label: "Blog", href: "/blog" },
          { label: "Contact", href: "/#contact" },
        ]}
      />

      {/* Main content */}
      <main className="pt-20">
        {/* Blog Header */}
        <div className="bg-blue-900 text-white py-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              SellapyTech Blog
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Insights, trends, and best practices in software development,
              testing, and AI automation
            </p>
          </div>
        </div>

        {/* Blog Content */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          {/* Featured Post */}
          <section className="mb-16">
            <FeaturedPost post={featuredPost} />
          </section>

          {/* Search and Filters */}
          <section className="mb-12">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
              <h2 className="text-2xl font-bold text-blue-900">
                Latest Articles
              </h2>
              <BlogSearch onSearch={handleSearch} />
            </div>

            <CategoryFilter
              categories={categories}
              selectedCategory={selectedCategory}
              onSelectCategory={handleCategorySelect}
            />
          </section>

          {/* Blog Posts Grid */}
          <section className="mb-12">
            {currentPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {currentPosts.map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  No articles found
                </h3>
                <p className="text-gray-500">
                  Try adjusting your search or filter criteria
                </p>
              </div>
            )}
          </section>

          {/* Pagination */}
          {filteredPosts.length > postsPerPage && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          )}

          {/* Newsletter */}
          <section className="mt-16">
            <Newsletter />
          </section>
        </div>
      </main>

      {/* Footer */}
      <Footer
        companyName="SellapyTech"
        address="Birmingham Innovation Centre, Holt Street, Birmingham, B7 4BP, UK"
        phone="+44 121 123 4567"
        email="info@sellapytech.com"
      />
    </div>
  );
};

export default Blog;
