export default function Container({children}) {
  return (
    <main className="mx-auto sm:max-w-2xl md:max-w-4xl lg:max-w-6xl">
      {children}
    </main>
  )
}