const Navigation = () => {
  return (
    <nav className="h-14 bg-purple-900 flex items-center justify-center shadow-sm">
      <div className="bg-purple-400 w-fit p-2 rounded-md">
        <h3 className="text-white font-bold text-lg">
          Todo App{" "}
          <span className="p-1 bg-purple-600 rounded-sm text-sm">v01.3</span>
        </h3>
      </div>
    </nav>
  );
};
export default Navigation;
