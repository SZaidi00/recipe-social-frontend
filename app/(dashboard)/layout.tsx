import Navbar from "@/components/layout/navbar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="w-full min-h-screen bg-[#FAF9EE]">
      <nav className="max-w-full bg-[#A2AF9B] shadow-md border-b border-emerald-700">
        <Navbar />
      </nav>
      
      <main className=" w-full">
        {children}
      </main>
    </div>
  )
}