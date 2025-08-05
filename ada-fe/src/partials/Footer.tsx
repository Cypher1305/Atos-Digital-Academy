export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <>
    <footer className="flex flex-col text-center">
      <p className="text-sm text-color">
        © {year} - Tous droits réservés
      </p>
      <a href="#" className="text-sm text-color">Top Contributors</a>
    </footer>
    </>
  );
};
