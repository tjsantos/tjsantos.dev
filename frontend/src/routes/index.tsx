import { Link, createFileRoute } from '@tanstack/react-router'
import Header from '../components/Header'

export const Route = createFileRoute('/')({
  component: App,
})

const projects = [
  { name: 'Testimonial Card', path: '/testimonial-card' },
  { name: 'Blog Card', path: '/blog-card' },
  { name: 'Profile Card', path: '/profile-card' },
  { name: 'Button Component', path: '/button-component' },
]

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="grow bg-neutral-100 text-center text-2xl">
        <h1 className="my-8 text-4xl font-bold text-neutral-900">Projects</h1>
        <ul className="flex flex-col gap-2">
          {projects.map((project) => {
            return (
              <li key={project.name}>
                <Link
                  to={project.path}
                  className="text-sky-600 hover:underline"
                >
                  {project.name}
                </Link>
              </li>
            )
          })}
        </ul>
      </main>
    </div>
  )
}
