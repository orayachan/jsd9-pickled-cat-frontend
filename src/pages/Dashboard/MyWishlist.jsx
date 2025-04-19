import { Button } from "@/components/ui/button";

export function MyWishlist() {

  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold mt-6 ">รายการสินค้าที่สนใจ</h2>
      <div className="flex flex-col rounded-lg bg-white">
        <div className="flex flex-row border rounded-lg p-4 shadow-sm mb-4">
          <img
            src='https://img2.pic.in.th/pic/Chicken.jpeg'
            alt='Pickled Chicken Bites'
            className="w-32 h-32 object-cover rounded-md mr-4"
          />
          <div className="flex flex-col w-145 gap-1">
            <div className="">
              <h3 className="text-xl font-semibold">Pickled Chicken Bites</h3>
              <p className="text-gray-600 text-lg">ขนมขบเคี้ยวเนื้อไก่หมักสูตรพิเศษ อ่อนโยนต่อระบบย่อยของแมว</p>
            </div>
            <div className="flex flex-row justify-between">
              <p className="text-purple-600 font-bold">฿ 250</p>
            </div>
            <div className="flex flex-row pt-1 gap-2 justify-between">
              <div className="flex flex-row gap-2">
                <Button className="p-4 bg-white border text-black text-lg hover:bg-secondary-100">ซื้อสินค้า</Button>
                <Button className="p-4 bg-white border text-black text-lg hover:bg-secondary-100">ลงตะกร้า</Button>
              </div>
              <Button className="p-4 bg-white border border-red-500 text-black text-lg hover:bg-red-100">นำออกจากรายการ</Button>
            </div>
          </div>
        </div>

        <div className="flex flex-row border rounded-lg p-4 shadow-sm mb-4">
          <img
            src='https://img2.pic.in.th/pic/Chicken.jpeg'
            alt='Pickled Chicken Bites'
            className="w-32 h-32 object-cover rounded-md mr-4"
          />
          <div className="flex flex-col w-145 gap-1">
            <div className="">
              <h3 className="text-xl font-semibold">Pickled Chicken Bites</h3>
              <p className="text-gray-600 text-lg">ขนมขบเคี้ยวเนื้อไก่หมักสูตรพิเศษ อ่อนโยนต่อระบบย่อยของแมว</p>
            </div>
            <div className="flex flex-row justify-between">
              <p className="text-purple-600 font-bold">฿ 250</p>
            </div>
            <div className="flex flex-row pt-1 gap-2 justify-between">
              <div className="flex flex-row gap-2">
                <Button className="p-4 bg-white border text-black text-lg hover:bg-secondary-100">ซื้อสินค้า</Button>
                <Button className="p-4 bg-white border text-black text-lg hover:bg-secondary-100">ลงตะกร้า</Button>
              </div>
              <Button className="p-4 bg-white border border-red-500 text-black text-lg hover:bg-red-100">นำออกจากรายการ</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
