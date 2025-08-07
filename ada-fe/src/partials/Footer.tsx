export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <>
    <footer className="fixed bg-[#101010] bottom-0 left-0 w-full flex flex-col text-center items-center justify-center bottom-0">
      <p className="text-xs text-gray-500 w-[90%] mr-12">
        © {year} Atos Digital Academy - Tous droits réservés
      </p>
      <a href="#" className="text-xs text-gray-400 mr-12">Contributors.top</a>
    </footer>
    </>
  );
};
