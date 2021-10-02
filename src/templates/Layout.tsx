import React from 'react'

const Layout: React.FC = ({ children }) => {
  return (
    <div className="flex justify-center items-center flex-col min-h-screen text-white font-mono bg-gray-800">
      <main className="flex flex-1 justify-center items-center w-screen flex-col">
        {children}
      </main>
    </div>
  )
}

export default Layout
