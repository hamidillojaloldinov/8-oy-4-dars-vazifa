import Link from "next/link"

const request = async (url: string) => {
  const req = await fetch(url)
  const data = await req.json()

  return data
}

interface Data {
  id: number
  thumbnail: string
  title: string
  description: string
}

async function Home() {
  const data = await request("https://dummyjson.com/products")

  return (
    <>
      <ul className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 flex max-w-6xl mx-auto px-2 my-20">
        {data.products.map((product: Data) => {
          return (
            <Link href={`/product/${product.id}`} key={product.id} className="hover:scale-105 shadow-xl shadow mb-3 max-w-sm flex justify-center items-center text-center">
              <div>
                <img
                  className=" max-h-80 max-w-80 rounded-lg flex justify-items-center justify-center"
                  src={product.thumbnail}
                />
                <div className="card-body">
                  <h1>

                    {product.title}
                  </h1>
                  <p className="text-justify">{product.description}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </ul>

    </>
  )
}

export default Home
