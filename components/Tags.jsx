const Tags = ({ tags }) => {
  return (
    <div className="mt-6 flex gap-3 text-xs font-medium text-teal-400">
      {tags.map((tag) => (
        <span key={tag} className="rounded-full bg-teal-400/10 px-3 py-1 ">
          {tag}
        </span>
      ))}
    </div>
  );
};

export default Tags;
