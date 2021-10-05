import React from 'react'

const Layout: React.FC = ({ children }) => {
  return (
    <div className="min-h-screen text-white font-mono bg-gray-800">
      <header className="py-4 bg-indigo-900 mb-10">
        <div className="mx-auto max-w-4xl px-5">
          <h1 className="text-2xl">Task is Done!!</h1>
        </div>
      </header>
      <div className="mx-auto max-w-4xl px-5">
        <main className="flex flex-col items-center">{children}</main>
      </div>
    </div>
  )
}

export default Layout
