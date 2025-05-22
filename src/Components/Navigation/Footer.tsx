const Footer = () => {
  return (
    <footer>
        <div className="h-14 bg-purple-900 text-center flex items-center justify-center flex-col">
            <p className="text-gray-50 font-semibold text-sm">Todo App v01.3 TS</p>
            <p className="text-gray-200 text-xs font-semibold">Developed by : Kavinda Liyanaarachchi @{new Date().getFullYear()}</p>
        </div>
    </footer>
  )
}

export default Footer