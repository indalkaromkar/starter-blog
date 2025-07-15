// Import utilities for content processing and generated blog data
import { sortPosts, allCoreContent } from 'pliny/utils/contentlayer' // Content processing utilities
import { allBlogs } from 'contentlayer/generated' // Generated blog posts from Contentlayer
import Main from './Main' // Homepage component

// Homepage server component - processes and displays blog posts
export default async function Page() {
  // Sort all blog posts by date (newest first)
  const sortedPosts = sortPosts(allBlogs)
  // Extract core content (remove body and other heavy fields for performance)
  const posts = allCoreContent(sortedPosts)
  // Render homepage with processed posts
  return <Main posts={posts} />
}
