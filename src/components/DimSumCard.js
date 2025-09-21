export default function DimSumCard({ dimsum }) {
  // dimsum is a "prop" — data passed into this component
  return (
    <div className="border rounded-lg p-4 shadow-md max-w-sm bg-white">
      <img
        src={dimsum.image_url}
        alt={dimsum.name.english}
        className="w-full h-50 object-cover rounded"
      />
      <h2 className="text-xl font-bold mt-2">
        {dimsum.name.english} ({dimsum.name.chinese})
      </h2>
      <p className="italic text-gray-600">{dimsum.category}</p>
      <p className="mt-2">{dimsum.description}</p>
      <p className="mt-2 font-semibold">Ingredients:</p>
      <ul className="list-disc list-inside">
        {dimsum.ingredients.map((ingredient, idx) => (
          <li key={idx}>{ingredient}</li>
        ))}
      </ul>
      <p className="mt-2">Preparation: {dimsum.preparation}</p>
      <p className="mt-2 text-sm text-gray-500">{dimsum.notes}</p>
    </div>
  );
}
