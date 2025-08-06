import coursImg from './../assets/cours.png';
import top from './../assets/top.png';
import ideas from './../assets/ideas.png';
import chat from './../assets/chat.png';
import user from './../assets/user.png';

export const Header = () => {
  return (
    <>
    <div className='fixed flex z-50 top-0 bg-[#101010] w-full'>
      {/* Topbar */}
      <div className="flex items-center absolute top-0 w-full h-auto p-1 border-b border-gray-600 bg-[#101010]">
        <img src="/logo.png" alt="ADA logo" className="logo" />
        <a className="ml-auto mr-3">⚙️</a>
      </div>

      {/* Sidebar */}
      <aside className="fixed top-12 right-0 w-14 flex flex-col items-center justify-center space-y-6 border-l border-gray-600 h-[calc(100%-3.5rem)] bg-[#101010] icon">
        <a href="#"><img src={coursImg} alt="Courses" /></a>
        <a href="#"><img src={top} alt="Top" /></a>
        <a href="#"><img src={ideas} alt="Ideas" /></a>
        <a href="#"><img src={chat} alt="Chat" /></a>
        <a href="#"><img src={user} alt="User" /></a>
      </aside>
    </div>
    </>
  );
};
