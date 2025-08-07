import coursImg from './../assets/cours.png';
import top from './../assets/top.png';
import ideas from './../assets/ideas.png';
import chat from './../assets/chat.png';
import user from './../assets/user.png';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <>
    <div className='fixed flex z-50 top-0 bg-[#101010] w-full'>
      {/* Topbar */}
      <div className="flex items-center absolute top-0 w-full h-auto p-1 border-b border-gray-600 bg-[#101010]">
        <Link to="/"><img src="/logo.png" alt="ADA logo" className="logo" /></Link>
        <Link to="/" className="ml-auto mr-3">⚙️</Link>
      </div>

      {/* Sidebar */}
      <aside className="fixed top-12 right-0 w-14 flex flex-col items-center justify-center space-y-6 border-l border-gray-600 h-[calc(100%-3.5rem)] bg-[#101010] icon">
        <Link to="/courses"> <img src={coursImg} alt="Courses" /></Link>
        <Link to="/"> <img src={top} alt="Top" /></Link>
        <Link to="/"> <img src={ideas} alt="Ideas" /></Link>
        <Link to="/"> <img src={chat} alt="Chat" /></Link>
        <Link to="/"> <img src={user} alt="User" /></Link>
      </aside>
    </div>
    </>
  );
};
