const Header = ({ title }) => {
  return (
    <div className="sticky top-0 z-20 w-full bg-slate-900 py-5 lg:relative lg:bg-transparent">
      <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200">
        {title}
      </h2>
    </div>
  );
};

export default Header;
