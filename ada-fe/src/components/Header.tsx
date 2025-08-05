
export const Header = () => {
  return (
    <>
      <div className="flex fixed top-0 left-0 w-full h-auto p-1 border-b border-gray-800">
        <img src="/logo.png" alt="ADA logo" className="logo" />
      </div>
      {/* Sidebar */}
      <aside className=" fixed top-auto right-0 w-14 flex flex-col items-center justify-center space-y-6 border-l border-gray-800 h-full">
        <button>✂</button>
        <button>📄</button>
        <button>📅</button>
        <button>⚙️</button>
        <button>💬</button>
        <button>👤</button>
      </aside>
    </>
  );
};
