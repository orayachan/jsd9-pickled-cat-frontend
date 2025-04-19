export function OrderCard({ product }) {
  if (!product) return null;

  return (
    <div className="flex border rounded-lg p-4 shadow-sm mb-4 bg-white">
      <img
        src={product.images?.[0]}
        alt={product.name}
        className="w-32 h-32 object-cover rounded-md mr-4"
      />
      <div className="flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-semibold">{product.name}</h3>
          <p className="text-gray-600 text-sm">{product.description}</p>
        </div>
        <div className="text-purple-600 font-bold mt-2">
          ฿ {product.price}
        </div>
      </div>
    </div>
  );
}
