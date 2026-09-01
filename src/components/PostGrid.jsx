import PostCard from './PostCard'
import EmptyState from './EmptyState'

export default function PostGrid({ posts, personalizedIds }) {
  if (posts.length === 0) {
    return <EmptyState variant="search" />
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} isPersonalized={personalizedIds.has(post.id)} />
      ))}
    </div>
  )
}
