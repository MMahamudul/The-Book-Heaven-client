import { FaBookOpen, FaUser, FaTags } from "react-icons/fa";

const posts = [
  {
    id: 1,
    title: "How to Choose the Right Book for You",
    excerpt:
      "Choosing a book doesn’t have to be difficult. Learn how to find books that truly match your interests.",
    category: "Reading Tips",
    author: "Andrew",
    image:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794",
  },
  {
    id: 2,
    title: "Physical Books vs E-Books",
    excerpt:
      "Both formats have benefits. We explore which one suits different reading habits best.",
    category: "Guides",
    author: "Flip",
    image:
      "https://images.unsplash.com/photo-1516979187457-637abb4f9353",
  },
  {
    id: 3,
    title: "Top 10 Books You Should Read This Year",
    excerpt:
      "A carefully curated list of books loved by readers and critics alike.",
    category: "Nature",
    author: "Drik",
    image:
      "https://i.ibb.co/zWKkGtYq/header-1.jpg",
  },
  {
    id: 4,
    title: "Top 10 Books You Should Read This Year",
    excerpt:
      "A carefully curated list of books loved by readers and critics alike.",
    category: "Recommendations",
    author: "Charles",
    image:
      "https://i.ibb.co/s9K1n35j/header-3.webp",
  },
 
  {
    id: 5,
    title: "Top 10 Books You Should Read This Year",
    excerpt:
      "A carefully curated list of books loved by readers and critics alike.",
    category: "Calamity",
    author: "Binsky",
    image:
      "https://i.ibb.co/8LPKSvWc/header-111.avif",
  },
 
];
const BlogPage = () => {
  return (
    <section className="py-4 min-h-screen">
      <div className="container mx-auto">

        {/* Page Header */}
        <div className="max-w-8xl mb-16">
          <h1 className="text-3xl md:text-5xl font-bold text-accent text-center">
            Book Blog & Articles
          </h1>
          <p className="mt-4 text-blue-400 text-center">
            Discover reading tips, book guides, and recommendations to help you
            choose your next favorite book.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition"
            >
              {/* Image */}
              <img
                src={post.image}
                alt={post.title}
                className="h-56 w-full object-cover"
              />

              {/* Content */}
              <div className="p-6 space-y-4">
                <span className="inline-flex items-center gap-2 text-sm font-medium text-blue-900">
                  <FaTags className="text-xs" />
                  {post.category}
                </span>

                <h2 className="text-xl font-semibold text-blue-900 leading-snug">
                  {post.title}
                </h2>


                <div className="flex items-center justify-between pt-4">
                  <span className="inline-flex items-center gap-2 text-sm text-blue-900 ">
                    <FaUser />
                    {post.author}
                  </span>

                  <button className="inline-flex items-center gap-2 text-sm font-semibold text-blue-900 hover:text-blue-950">
                    Read More <FaBookOpen />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default  BlogPage;