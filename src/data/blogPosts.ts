import { BlogPost } from "../components/blog/BlogCard";

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title:
      "10 Essential Software Development Practices for Enterprise Applications",
    excerpt:
      "Discover the key practices that successful development teams implement to build robust, scalable enterprise applications that stand the test of time.",
    author: "Sarah Johnson",
    date: "June 15, 2023",
    readTime: "8 min read",
    category: "Development",
    slug: "essential-software-development-practices",
    coverImage:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80",
  },
  {
    id: "2",
    title: "The Complete Guide to Automated Testing for Modern Applications",
    excerpt:
      "Learn how to implement comprehensive automated testing strategies that catch bugs early and ensure your applications remain stable through continuous updates.",
    author: "Michael Chen",
    date: "July 3, 2023",
    readTime: "12 min read",
    category: "Testing",
    slug: "complete-guide-automated-testing",
    coverImage:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80",
  },
  {
    id: "3",
    title: "How AI is Transforming Business Process Automation in 2023",
    excerpt:
      "Explore the latest AI-driven automation technologies that are helping businesses streamline operations, reduce costs, and deliver better customer experiences.",
    author: "Emily Rodriguez",
    date: "August 12, 2023",
    readTime: "10 min read",
    category: "AI & Automation",
    slug: "ai-transforming-business-automation",
    coverImage:
      "https://images.unsplash.com/photo-1677442135136-760c813dce9a?w=800&q=80",
  },
  {
    id: "4",
    title: "Building Secure Applications: Best Practices for Developers",
    excerpt:
      "Security should never be an afterthought. Learn the essential security practices every development team should implement from day one.",
    author: "David Wilson",
    date: "September 5, 2023",
    readTime: "9 min read",
    category: "Security",
    slug: "building-secure-applications",
    coverImage:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
  },
  {
    id: "5",
    title: "The Future of DevOps: Trends to Watch in 2024",
    excerpt:
      "Stay ahead of the curve with these emerging DevOps practices and tools that are set to reshape how teams build, deploy, and maintain software.",
    author: "Alex Thompson",
    date: "October 18, 2023",
    readTime: "7 min read",
    category: "DevOps",
    slug: "future-of-devops-trends",
    coverImage:
      "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=800&q=80",
  },
  {
    id: "6",
    title: "Microservices vs. Monoliths: Choosing the Right Architecture",
    excerpt:
      "Understand the pros and cons of different architectural approaches and learn how to make the right choice for your specific business requirements.",
    author: "Sarah Johnson",
    date: "November 7, 2023",
    readTime: "11 min read",
    category: "Architecture",
    slug: "microservices-vs-monoliths",
    coverImage:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
  },
  {
    id: "7",
    title: "Implementing Effective QA Processes in Agile Teams",
    excerpt:
      "Quality assurance in agile environments requires a different approach. Discover strategies for integrating QA seamlessly into your agile workflow.",
    author: "Michael Chen",
    date: "December 12, 2023",
    readTime: "8 min read",
    category: "Testing",
    slug: "qa-processes-agile-teams",
    coverImage:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
  },
  {
    id: "8",
    title: "How to Build AI-Powered Chatbots for Customer Service",
    excerpt:
      "Learn how to develop intelligent chatbots that can handle customer inquiries, reduce support costs, and improve overall customer satisfaction.",
    author: "Emily Rodriguez",
    date: "January 23, 2024",
    readTime: "10 min read",
    category: "AI & Automation",
    slug: "ai-powered-chatbots-customer-service",
    coverImage:
      "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80",
  },
  {
    id: "9",
    title: "The Complete Guide to Cloud Migration for Enterprise Applications",
    excerpt:
      "Planning a move to the cloud? This comprehensive guide covers everything from assessment to execution for a successful cloud migration.",
    author: "David Wilson",
    date: "February 8, 2024",
    readTime: "14 min read",
    category: "Cloud",
    slug: "cloud-migration-enterprise-applications",
    coverImage:
      "https://images.unsplash.com/photo-1535191042502-e6a9a3d407e7?w=800&q=80",
  },
  {
    id: "10",
    title: "Performance Optimization Techniques for Modern Web Applications",
    excerpt:
      "Slow applications frustrate users and hurt business. Discover proven techniques to optimize your web application's performance and user experience.",
    author: "Alex Thompson",
    date: "March 17, 2024",
    readTime: "9 min read",
    category: "Development",
    slug: "performance-optimization-web-applications",
    coverImage:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  },
  {
    id: "11",
    title: "Building Accessible Applications: A Developer's Guide",
    excerpt:
      "Learn how to create applications that are accessible to all users, including those with disabilities, and why it's essential for your business.",
    author: "Sarah Johnson",
    date: "April 5, 2024",
    readTime: "8 min read",
    category: "Development",
    slug: "building-accessible-applications",
    coverImage:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
  },
  {
    id: "12",
    title: "The Rise of Low-Code Development Platforms",
    excerpt:
      "Explore how low-code platforms are changing the development landscape and enabling faster delivery of business applications.",
    author: "Michael Chen",
    date: "May 12, 2024",
    readTime: "7 min read",
    category: "Development",
    slug: "rise-of-low-code-platforms",
    coverImage:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  },
];

export const getCategories = (): string[] => {
  const categories = blogPosts.map((post) => post.category);
  return [...new Set(categories)];
};

export const getFeaturedPost = (): BlogPost => {
  return blogPosts[2]; // Return the AI post as featured
};

export const getRecentPosts = (count: number): BlogPost[] => {
  return blogPosts.slice(0, count);
};

export const getPostsByCategory = (category: string): BlogPost[] => {
  return blogPosts.filter((post) => post.category === category);
};

export const searchPosts = (query: string): BlogPost[] => {
  const lowercaseQuery = query.toLowerCase();
  return blogPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(lowercaseQuery) ||
      post.excerpt.toLowerCase().includes(lowercaseQuery) ||
      post.category.toLowerCase().includes(lowercaseQuery),
  );
};

export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find((post) => post.slug === slug);
};

export const getRelatedPosts = (
  currentPost: BlogPost,
  count: number = 3,
): BlogPost[] => {
  // Get posts in the same category, excluding the current post
  const sameCategoryPosts = blogPosts.filter(
    (post) =>
      post.category === currentPost.category && post.id !== currentPost.id,
  );

  // If we have enough posts in the same category, return those
  if (sameCategoryPosts.length >= count) {
    return sameCategoryPosts.slice(0, count);
  }

  // Otherwise, add posts from other categories to reach the desired count
  const otherPosts = blogPosts.filter(
    (post) =>
      post.category !== currentPost.category && post.id !== currentPost.id,
  );

  return [...sameCategoryPosts, ...otherPosts].slice(0, count);
};
