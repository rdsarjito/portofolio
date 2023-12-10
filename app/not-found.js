import Link from "next/link";

export default function NotFound() {
  return (
    <div className="grid h-[80vh] place-items-center">
      <h2 className="text-xl font-medium text-slate-300">
        Hmmm... There seems to be nothing here, maybe return{" "}
        <Link
          className="text-2xl font-bold text-slate-100 hover:text-teal-400"
          href="/"
        >
          Home
        </Link>
      </h2>
    </div>
  );
}
