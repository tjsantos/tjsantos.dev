import { createFileRoute } from '@tanstack/react-router'
import { BlogCard, BlogCardPage } from './-components/BlogCard.tsx'
import { Default } from './-components/BlogCard.stories.tsx'

export const Route = createFileRoute('/_gfe/blog-card/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <BlogCardPage>
      <BlogCard {...Default.args} />
    </BlogCardPage>
  )
}
