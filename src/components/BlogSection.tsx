import React, { useState } from 'react';
import { BLOG_POSTS } from '../data/content';
import { BlogPost, NavigationTab } from '../types';
import { ArrowRight, BookOpen, Clock, Tag } from 'lucide-react';

interface BlogSectionProps {
  onNavigate?: (tab: NavigationTab) => void;
}

export const BlogSection: React.FC<BlogSectionProps> = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <section className="py-24 bg-white border-b border-slate-200 technical-grid relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="h-[2px] w-8 bg-radsys-blue"></div>
              <span className="text-xs font-mono tracking-widest text-radsys-blue uppercase">TECHNICAL INSIGHTS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-radsys-black tracking-tight uppercase font-display">
              ENGINEERING JOURNAL & BLOG.
            </h2>
          </div>
          <p className="text-slate-600 max-w-md text-sm leading-relaxed font-sans">
            Technical papers, computational analysis case studies, and engineering breakdowns published by the RADSYS research team.
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.id}
              onClick={() => setSelectedPost(post)}
              className="bg-white border border-slate-200 group overflow-hidden transition-all duration-300 hover:border-radsys-blue hover:shadow-xl cursor-pointer flex flex-col justify-between"
            >
              {/* Image */}
              <div className="relative h-52 w-full overflow-hidden bg-slate-900">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-radsys-black/90 text-white text-[10px] font-mono tracking-widest px-2.5 py-1 border border-slate-700">
                  {post.category.toUpperCase()}
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 text-[10px] font-mono text-slate-500 mb-3">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-radsys-blue" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold font-display text-radsys-black group-hover:text-radsys-blue transition-colors leading-snug mb-3">
                    {post.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-4 font-sans">
                    {post.excerpt}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.map((t, idx) => (
                      <span key={idx} className="px-2 py-0.5 bg-slate-100 text-[9px] font-mono text-slate-600">
                        #{t}
                      </span>
                    ))}
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-mono font-bold text-slate-800 group-hover:text-radsys-blue">
                    <span>READ TECHNICAL PAPER</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>

            </article>
          ))}
        </div>

        {/* Modal Reader */}
        {selectedPost && (
          <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white border-2 border-radsys-black max-w-3xl w-full p-8 relative shadow-2xl animate-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto">
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-4 right-4 text-slate-400 hover:text-radsys-black font-mono text-xs px-3 py-1 border border-slate-200"
              >
                [CLOSE X]
              </button>

              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-mono text-radsys-blue uppercase tracking-widest">{selectedPost.category}</span>
                <span className="text-xs text-slate-400">•</span>
                <span className="text-xs font-mono text-slate-500">{selectedPost.readTime}</span>
              </div>

              <h2 className="text-2xl font-bold font-display text-radsys-black uppercase mb-4 leading-tight">
                {selectedPost.title}
              </h2>

              <div className="h-64 w-full mb-6 overflow-hidden border border-slate-200">
                <img src={selectedPost.image} alt={selectedPost.title} className="w-full h-full object-cover" />
              </div>

              <div className="prose prose-slate max-w-none text-sm text-slate-700 leading-relaxed font-sans space-y-4 mb-6">
                <p className="font-semibold text-radsys-black border-l-2 border-radsys-blue pl-4 py-1 bg-slate-50">
                  {selectedPost.excerpt}
                </p>
                <div className="whitespace-pre-line">
                  {selectedPost.content}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 flex justify-between items-center text-xs font-mono">
                <span className="text-slate-500">AUTHOR: {selectedPost.author}</span>
                <button
                  onClick={() => setSelectedPost(null)}
                  className="px-4 py-2 bg-radsys-black text-white hover:bg-radsys-blue transition-colors"
                >
                  DONE READING
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
