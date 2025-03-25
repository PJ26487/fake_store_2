import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>EverShop Store</title>
        <meta name="description" content="Modern e-commerce store" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center my-8">
          Welcome to EverShop Store
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Product cards will go here */}
          <div className="border rounded-lg p-4 shadow">
            <h2 className="text-xl font-semibold">Sample Product</h2>
            <p className="text-gray-600">$99.99</p>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
              Add to Cart
            </button>
          </div>
        </div>
      </main>

      <footer className="mt-8 py-4 border-t">
        <p className="text-center text-gray-600">
          © 2024 EverShop Store. All rights reserved.
        </p>
      </footer>
    </div>
  )
} 