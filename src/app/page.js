import DimSumCard from "../components/DimSumCard";
import dimsumData from "../data/dimsum.json";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Dim Sum Dict</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {dimsumData.map((item, idx) => (
          <DimSumCard key={idx} dimsum={item} />
        ))}
      </div>
    </main>
  );
}
