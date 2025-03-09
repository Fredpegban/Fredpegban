import React, { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import BlogCard from "../components/blog/BlogCard";
import Newsletter from "../components/blog/Newsletter";
import { Button } from "../components/ui/button";
import { ArrowLeft, Calendar, Share2, User } from "lucide-react";
import { getPostBySlug, getRelatedPosts } from "../data/blogPosts";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const post = getPostBySlug(slug || "");
  const relatedPosts = post ? getRelatedPosts(post, 3) : [];

  // Handle consultation button click
  const handleConsultationClick = () => {
    window.location.href = "/#contact";
  };

  // If post not found, redirect to blog page
  useEffect(() => {
    if (!post && slug) {
      navigate("/blog", { replace: true });
    }
  }, [post, slug, navigate]);

  if (!post) {
    return null; // Will redirect in useEffect
  }

  // Share functionality
  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: post.title,
          text: post.excerpt,
          url: window.location.href,
        })
        .catch((err) => {
          console.error("Error sharing:", err);
        });
    } else {
      // Fallback - copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>{post.title} | SellapyTech Blog</title>
        <meta name="description" content={post.excerpt} />
        <meta
          name="keywords"
          content={`${post.category}, software development, tech blog, sellapytech`}
        />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.coverImage} />
        <meta property="og:type" content="article" />
        <link
          rel="canonical"
          href={`https://sellapytech.com/blog/${post.slug}`}
        />
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
        {/* Article Header */}
        <div className="relative w-full h-[400px] overflow-hidden">
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `url(${post.coverImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-blue-900/70" />
          </div>

          <div className="relative z-10 h-full w-full max-w-4xl mx-auto px-4 flex flex-col justify-center">
            <div className="bg-blue-600 text-white text-sm font-semibold px-3 py-1 rounded-full w-fit mb-4">
              {post.category}
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center text-blue-100 gap-4 mt-2">
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                <span>{post.date}</span>
              </div>
              <div>{post.readTime}</div>

              <Button
                variant="ghost"
                size="sm"
                className="text-blue-100 hover:text-white hover:bg-blue-800/50"
                onClick={handleShare}
              >
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="bg-white rounded-lg shadow-sm p-6 md:p-10">
            {/* Back to blog link */}
            <Link
              to="/blog"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to all articles
            </Link>

            {/* Article body - this would be your actual blog content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 mb-6">{post.excerpt}</p>

              <h2>Introduction</h2>
              <p>
                In today's rapidly evolving technological landscape, businesses
                are constantly seeking ways to stay competitive and innovative.{" "}
                {post.category === "AI & Automation"
                  ? "Artificial intelligence and automation technologies"
                  : "Modern software development practices"}{" "}
                offer unprecedented opportunities for organizations to transform
                their operations and deliver exceptional value to their
                customers.
              </p>

              <p>
                This article explores the key considerations, best practices,
                and emerging trends in {post.category.toLowerCase()} that
                forward-thinking businesses should be aware of in 2024 and
                beyond.
              </p>

              <h2>Why {post.category} Matters for Modern Businesses</h2>
              <p>
                The digital transformation journey has accelerated dramatically
                in recent years, making effective {post.category.toLowerCase()}{" "}
                strategies more critical than ever. Organizations that excel in
                this area gain significant competitive advantages through
                improved efficiency, reduced costs, enhanced customer
                experiences, and the ability to rapidly adapt to changing market
                conditions.
              </p>

              <p>
                According to recent industry research, companies that prioritize
                excellence in {post.category.toLowerCase()} consistently
                outperform their peers across key business metrics, including
                revenue growth, customer satisfaction, and time-to-market for
                new offerings.
              </p>

              <h2>Key Challenges and Solutions</h2>
              <p>
                Despite the clear benefits, many organizations struggle with
                implementing effective {post.category.toLowerCase()} strategies.
                Common challenges include technical debt, skills gaps,
                organizational resistance to change, and difficulty measuring
                ROI.
              </p>

              <p>
                Successful companies address these challenges through a
                combination of strategic planning, investment in talent
                development, adoption of modern methodologies, and careful
                selection of technology partners who understand their specific
                business context.
              </p>

              <h2>Best Practices for Implementation</h2>
              <p>
                Based on our experience working with diverse clients across
                industries, we've identified several best practices that
                significantly increase the likelihood of success:
              </p>

              <ul>
                <li>
                  Start with a clear business case and well-defined objectives
                </li>
                <li>Adopt an iterative approach with regular feedback loops</li>
                <li>
                  Invest in building cross-functional teams with diverse skills
                </li>
                <li>Prioritize security and compliance from the beginning</li>
                <li>
                  Establish meaningful metrics to measure progress and impact
                </li>
              </ul>

              <h2>Looking Ahead: Emerging Trends</h2>
              <p>
                As we look to the future, several emerging trends are likely to
                shape the evolution of {post.category.toLowerCase()}:
              </p>

              <p>
                The integration of AI capabilities, increased focus on
                sustainability, growing importance of edge computing, and the
                continued rise of low-code/no-code platforms are all
                transforming how organizations approach their technology
                strategies.
              </p>

              <h2>Conclusion</h2>
              <p>
                Excellence in {post.category.toLowerCase()} has become a
                critical differentiator for businesses across all sectors. By
                understanding the key challenges, implementing proven best
                practices, and staying attuned to emerging trends, organizations
                can position themselves for sustained success in an increasingly
                digital world.
              </p>

              <p>
                At SellapyTech, we partner with forward-thinking organizations
                to navigate these complexities and unlock the full potential of
                technology to drive business value. Contact us today to learn
                how we can support your journey.
              </p>
            </div>

            {/* Author bio */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-semibold mb-2">About the Author</h3>
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                  <User className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-medium">{post.author}</h4>
                  <p className="text-gray-600">
                    {post.author === "Sarah Johnson" &&
                      "Senior Software Architect with over 15 years of experience in enterprise applications."}
                    {post.author === "Michael Chen" &&
                      "Lead QA Engineer specializing in automated testing frameworks and continuous integration."}
                    {post.author === "Emily Rodriguez" &&
                      "AI Solutions Specialist with expertise in machine learning and natural language processing."}
                    {post.author === "David Wilson" &&
                      "Security Expert and DevOps consultant with a focus on secure application development."}
                    {post.author === "Alex Thompson" &&
                      "Full-stack developer and performance optimization specialist."}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Related Articles */}
          <section className="mt-16">
            <h2 className="text-2xl font-bold text-blue-900 mb-8">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <BlogCard key={relatedPost.id} post={relatedPost} />
              ))}
            </div>
          </section>

          {/* Newsletter */}
          <section className="mt-16">
            <Newsletter />
          </section>

          {/* CTA */}
          <section className="mt-16 bg-blue-900 text-white rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">
              Need Expert Software Solutions?
            </h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Our team of experienced developers, testers, and AI specialists is
              ready to help you build innovative solutions for your business
              challenges.
            </p>
            <Button
              onClick={handleConsultationClick}
              size="lg"
              className="bg-white text-blue-900 hover:bg-blue-50"
            >
              Schedule a Free Consultation
            </Button>
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

export default BlogPost;
