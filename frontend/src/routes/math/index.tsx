import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { twJoin, twMerge } from 'tailwind-merge'

export const Route = createFileRoute('/math/')({
  component: RouteComponent,
})

const randInt = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
const getRandomParams = () => {
  const maxNumber = 20
  const a = randInt(0, maxNumber)
  const b = randInt(0, maxNumber)
  const answer = a + b
  const choices = Array.from({ length: 4 }, () => randInt(0, 2 * maxNumber))
  for (let i = 0; i < choices.length; i++) {
    while (choices.indexOf(choices[i]) !== i) {
      choices[i] = randInt(0, 2 * maxNumber)
    }
  }
  if (!choices.includes(answer)) {
    choices[randInt(0, 3)] = answer
  }
  return { a, b, answer, choices }
}

const initialParams = getRandomParams()

type ChoiceProps = {
  children: React.ReactNode
  onClick: React.MouseEventHandler<HTMLButtonElement>
  selected?: boolean
}
const Choice = ({ children, onClick, selected }: ChoiceProps) => {
  return (
    <button
      onClick={onClick}
      className={twJoin(
        'rounded bg-neutral-200 px-4 py-2 text-lg font-semibold text-neutral-900 hover:bg-neutral-300',
        selected && 'bg-neutral-400 text-white outline-neutral-950',
      )}
    >
      {children}
    </button>
  )
}

type ContainerProps = {
  children: React.ReactNode
}
const Grid2x2 = ({ children }: ContainerProps) => {
  return <div className="grid grid-cols-2 gap-4">{children}</div>
}
type ButtonProps = {
  children: React.ReactNode
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  className?: string
}
const Button = ({ children, onClick, className }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={twMerge(
        'rounded bg-neutral-200 px-4 py-2 text-lg font-semibold text-neutral-900 hover:bg-neutral-300',
        className,
      )}
    >
      {children}
    </button>
  )
}

function RouteComponent() {
  const [{ a, b, answer, choices }, setParams] = useState(initialParams)
  const [choice, setChoice] = useState<number | null>(null)
  const isCorrect = choice === answer

  return (
    <main className="grid min-h-screen place-items-center bg-neutral-100">
      <div>
        <div className="mb-10 text-7xl">
          {a} + {b} = ____
        </div>
        <Grid2x2>
          {choices.map((choiceValue) => {
            return (
              <Choice
                key={choiceValue}
                onClick={() => {
                  setChoice(choiceValue)
                }}
                selected={choice === choiceValue}
              >
                {choiceValue}
              </Choice>
            )
          })}
        </Grid2x2>
        {choice === null ? (
          <div className="invisible mt-10 text-7xl">&nbsp;</div>
        ) : isCorrect ? (
          <div className="mt-10 text-7xl text-green-700">Correct!</div>
        ) : (
          <div className="mt-10 text-7xl text-red-700">
            Incorrect, try again!
          </div>
        )}

        <Button
          className={`mt-10 text-7xl ${isCorrect ? `visible` : `invisible`}`}
          onClick={() => {
            setParams(getRandomParams())
            setChoice(null)
          }}
        >
          Next Question ➡️
        </Button>
      </div>
    </main>
  )
}
