export default function ProfileHeader({ name, title }) {
  return (
    <header className="text-center mb-5">
      <h1 className="text-xl font-medium text-white">
        {name}
      </h1>
      <p className="text-sm font-normal text-gray-400 mt-1.5">
        {title}
      </p>
    </header>
  )
}
