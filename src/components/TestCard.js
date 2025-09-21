// This is a React component
// Components are like functions that return HTML (called JSX in React)

export default function TestCard() {
  return (
    <div className="p-6 max-w-sm mx-auto bg-yellow-200 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-center text-blue-800">
        Tailwind is Working!
      </h1>
      <p className="mt-4 text-center text-gray-700">
        If you see this styled box, Tailwind is properly set up.
      </p>
    </div>
  );
}
