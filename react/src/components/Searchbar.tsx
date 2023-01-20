export default function SearchBar() {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  return (
    <>
      <div className="flex justify-center">
        <div>
          <input
            className="w-full border-2 border-gray-300 p-4 rounded-lg outline-none text-black"
            type="text"
            placeholder="Search"
            onChange={handleChange}
          />
        </div>
      </div>
    </>
  );
}
