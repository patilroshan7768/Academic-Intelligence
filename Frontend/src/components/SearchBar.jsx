export default function SearchBar({ value, onChange }) {
  return (
    <input
      type="number"
      placeholder="Enter Student ID"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full md:w-1/2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
    />
  );
}
