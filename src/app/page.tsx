

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {/* AI Prompt Section */}
        <section className="w-full p-4 bg-gray-100 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-2">AI Prompt</h2>
          <p className="text-gray-700">What would you like to ask the AI today?</p>
        </section>
        {/* End of AI Prompt Section */}
      </main>
    </div>
  );
}
