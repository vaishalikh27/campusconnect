import { Sparkles } from 'lucide-react'
import PostCard from './PostCard'
import EmptyState from './EmptyState'

export default function ForYouSection({ posts, registeredIds, onSelectPost }) {
  return (
    <section className="animate-fade-up">
      <div className="mb-4 flex items-center gap-2">
        <Sparkles size={18} className="animate-spider-pulse rounded-full text-accent" />
        <div>
          <h2 className="text-lg font-semibold text-text">For You</h2>
          <p className="text-xs text-muted">Picked based on your interests</p>
        </div>
      </div>

      {posts.length === 0 ? (
        <EmptyState variant="forYou" />
      ) : (
        <div className="no-scrollbar scrollbar-thin -mx-4 flex gap-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:px-0">
          {posts.map((post) => (
            <PostCard
              key={post.id}
              post={post}
              isPersonalized
              isRegistered={registeredIds.has(post.id)}
              compact
              onSelect={onSelectPost}
            />
          ))}
        </div>
      )}
    </section>
  )
}
