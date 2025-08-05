
export const Header = () => {
  return (
    <>
      {/* Topbar */}
      <div className="flex items-center fixed top-0 w-full h-auto p-1 border-b border-gray-600">
        <img src="/logo.png" alt="ADA logo" className="logo left-0" />
        <a className="ml-auto mr-3">⚙️</a>
      </div>

      {/* Sidebar */}
      <aside className=" fixed top-auto right-0 w-14 flex flex-col items-center justify-center space-y-6 border-l border-gray-600 h-full">
        <a>📄</a>
        <a>📅</a>
        <a>💬</a>
        <a>👤</a>
      </aside>

    </>
  );
};
