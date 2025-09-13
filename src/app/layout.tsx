import './globals.css'

export const metadata = {
  title: 'patient-health-healthcare-patient-portal-1757743133058 - Healthcare Portal',
  description: 'Sim',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body>
        <header className="bg-white shadow-sm">
          <div className="container mx-auto p-4 flex justify-between items-center">
            <h1 className="font-bold text-xl text-blue-600">patient-health-healthcare-patient-portal-1757743133058</h1>
            <nav>
              <ul className="flex space-x-4">
                <li>Home</li>
                <li>Services</li>
                <li>Contact</li>
                <li>Login</li>
              </ul>
            </nav>
          </div>
        </header>
        {children}
        <footer className="bg-gray-100 p-6 mt-12">
          <div className="container mx-auto text-center">
            <p>© 2025 patient-health-healthcare-patient-portal-1757743133058 - All rights reserved</p>
          </div>
        </footer>
      </body>
    </html>
  )
}