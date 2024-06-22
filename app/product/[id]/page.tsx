import Link from "next/link";

const request = async (url: string) => {
  const req = await fetch(url);
  const data = await req.json();

  return data;
};
const request2 = async () => {
  const req = await fetch("https://dummyjson.com/products");
  const data = await req.json();
  return data;
};

interface Paramsl {
  params: {
    id: number,
  };
}

interface Data {
  id: number
  thumbnail: string
  title: string
  description: string
}

async function productid(params: Paramsl) {
  const data = await request(
    `https://dummyjson.com/products/${params.params.id}`
  );
  const ramdomdata = await request2()


  console.log(data);
  return (
    <>
      <div className="py-20 items-senter">
        <div className="flex text-left items-center gap-24 justify-center flex-wrap w-full">
          <img
            src={data.thumbnail}
            alt={data.title}
            width={540}
            height={560}
          />
          <div className="text-left flex flex-col gap-5 text-start">
            <h2 className="text-4xl">{data.title}</h2>
            <p className="w-96">{data.description}</p>
            <p className="w-96 text-lg ">category: <span className="text-slate-500">
              {data.category}
            </span>
            </p>
            <p className="w-96 text-lg text-slate-600">prise: <span className="text-slate-400">
              {data.price}
            </span>
            </p>
            <Link href="/">
              <button className="btn btn-primary w-32">
                go to Home
              </button>
            </Link>
          </div>
        </div>
      </div>
      <ul className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 flex max-w-6xl mx-auto px-2 my-20">
        {ramdomdata.products.slice(0, 6).map((product: Data) => {
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
  );
}

export default productid