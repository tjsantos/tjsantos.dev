type TestimonialCardProps = {
  name: string
  username: string
  imageUrl: string
  text: string
}
export const TestimonialCard = ({
  name,
  username,
  imageUrl,
  text,
}: TestimonialCardProps) => {
  return (
    <div className="mx-auto w-[340px] max-w-full rounded-lg bg-white p-6 text-neutral-600 shadow-sm">
      <header className="flex gap-4">
        <img
          src={imageUrl}
          alt={name}
          className="size-12 rounded-full object-cover"
          width="48"
          height="48"
        />
        <div>
          <h2 className="text-lg font-semibold text-neutral-900">{name}</h2>
          <p className="mt-[1px] text-sm">{username}</p>
        </div>
      </header>
      <p className="mt-4">{text}</p>
    </div>
  )
}
