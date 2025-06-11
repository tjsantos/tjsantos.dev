import { Link, createFileRoute } from '@tanstack/react-router'
import Header from '../components/Header'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="grow bg-neutral-900 text-center text-2xl">
        <h1 className="my-8 text-4xl font-bold text-neutral-50">Projects</h1>
        <ul>
          <li>
            <Link
              to="/testimonial-card"
              className="text-cyan-300 hover:underline"
            >
              Testimonial Card
            </Link>
          </li>
        </ul>
      </main>
    </div>
  )
}
