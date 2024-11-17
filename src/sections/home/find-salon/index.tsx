'use client'
export default function FindSalon() {
  return (
    <div className="text-center py-20">
      <div className="text-4xl font-bold mb-4">
        Find the best Thai massage salon
      </div>
      <p className="text-gray-700 mb-8">
        Find the best Thai massage salon at the right price here on Sweden's
        largest Thai massage guide.
      </p>
      <div className="flex justify-center">
        <input
          type="text"
          placeholder="Value"
          className="border border-gray-300 rounded-l-md px-4 py-2 focus:outline-none"
        />
        <button className="ml-4 bg-pink-400 text-white px-4 py-2 rounded-md">
          near me
        </button>
      </div>
    </div>
  );
}
