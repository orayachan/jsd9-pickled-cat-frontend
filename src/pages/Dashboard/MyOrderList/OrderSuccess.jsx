import { Button } from "@/components/ui/button";

export function OrderSuccess() {
  return (
    <section className="flex flex-col gap-4">
      <div className="flex flex-col border rounded-lg p-4 shadow-sm bg-white">
        <div className="flex flex-row mb-2 mx-2 justify-between">
          <p className="text-lg">15 เมษายน 2568 21:23</p>
          <p className="text-lg font-bold text-green-500">สำเร็จ</p>
        </div>

        <div className="flex flex-row border rounded-lg p-4 shadow-sm mb-4">
          <img
            src='https://img2.pic.in.th/pic/Chicken.jpeg'
            alt='Pickled Chicken Bites'
            className="w-32 h-32 object-cover rounded-md mr-4"
          />
          <div className="flex flex-col justify-between w-135">
            <div>
              <h3 className="text-xl font-semibold">Pickled Chicken Bites</h3>
            </div>
            <div className="flex flex-row justify-between">
              <p className="text-purple-600 font-bold">฿ 250</p>
              <p className="">จำนวน <strong>3</strong> ชิ้น</p>
            </div>
          </div>
        </div>

        {/* Product 2 */}
        <div className="flex flex-row border rounded-lg p-4 shadow-sm mb-4">
          <img
            src='https://img5.pic.in.th/file/secure-sv1/Chicken2.jpeg'
            alt='Pickled Chicken Bites'
            className="w-32 h-32 object-cover rounded-md mr-4"
          />
          <div className="flex flex-col justify-between w-135">
            <div>
              <h3 className="text-xl font-semibold">Pickled Chicken Bites 2</h3>
            </div>
            <div className="flex flex-row justify-between">
              <p className="text-purple-600 font-bold">฿ 250</p>
              <p className="">จำนวน <strong>3</strong> ชิ้น</p>
            </div>
          </div>
        </div>

        <div className="flex flex-row mb-2 mx-2 justify-between">
          <div className="flex flex-row gap-4">
            <Button className="p-4 bg-white border text-black text-lg hover:bg-secondary-100">ซื้ออีกครั้ง</Button>
            <Button className="p-4 bg-white border text-black text-lg hover:bg-secondary-100">รีวิวสินค้า</Button>
          </div>
          <p className="text-lg mt-auto">รวมทั้งสิ้น ( 6 สินค้า ) : <strong>฿ 1,500</strong></p>
        </div>
      </div>
    </section>
  );
}
