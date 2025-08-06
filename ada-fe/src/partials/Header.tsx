import coursImg from './../assets/cours.png';
import top from './../assets/top.png';
import ideas from './../assets/ideas.png';
import chat from './../assets/chat.png';
import user from './../assets/user.png';

export const Header = () => {
  return (
    <>
      {/* Topbar */}
      <div className="flex items-center fixed top-0 w-full h-auto p-1 border-b border-gray-600">
        <img src="/logo.png" alt="ADA logo" className="logo left-0" />
        <a className="ml-auto mr-3">⚙️</a>
      </div>

      {/* Sidebar */}
      <aside className="icon fixed top-auto right-0 w-14 flex flex-col items-center justify-center space-y-6 border-l border-gray-600 h-full">
        <a href="#"><img src={coursImg} alt="online" /></a>
        <a href="#"><img src={top} alt="top" /></a>
        <a href="#"><img src={ideas} alt="ideas" /></a>
        <a href="#"><img src={chat} alt="chat" /></a>
        <a href="#"><img src={user} alt="online" /></a>
      </aside>

    </>
  );
};
