export default function Breadcrumbs({ currentPage }) {
  return (
    <div className="container mx-auto mb-6 px-6 text-gray-500">
      <span>Dashboard</span> &gt; <span>{currentPage}</span>
    </div>
  );
}
