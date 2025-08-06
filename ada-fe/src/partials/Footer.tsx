export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <>
    <footer className="fixed bg-[#101010] bottom-0 left-0 w-full flex flex-col text-center bottom-0">
      <p className="text-sm text-color">
        © {year} Atos Digital Academy - Tous droits réservés
      </p>
      <a href="#" className="text-sm text-color">Contributors.top</a>
    </footer>
    </>
  );
};
