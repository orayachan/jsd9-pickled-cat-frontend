import { Button } from "@/components/ui/button";
import StarRatings from 'react-star-ratings';
export function MyReviews() {

  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold mt-6 ">รีวิวของฉัน</h2>

      <div className="flex flex-col gap-4 bg-neutral-50 shadow-sm p-2 rounded-lg">
        <div className="flex flex-col rounded-lg bg-neutral-100">
          <div className="flex flex-row border rounded-lg p-4 shadow-sm bg-white">
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
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 px-4">
          <div className="flex flex-row gap-4">
            <StarRatings
              rating={5}
              starRatedColor="#facc15"
              starEmptyColor="#e5e7eb"
              numberOfStars={5}
              starDimension="24px"
              starSpacing="3px"
              name="rating"
            />
            <p className="my-auto">พึงพอใจ</p>
          </div>

          <p>อร่อยมากครับ เผลอแย่งแมวกินจนหมด ต้องสั่งเพิ่มแล้ว อิอิ</p>

          <div className="flex flex-row pt-4 justify-between">
            <p className="text-sm my-auto">15 เมษายน 2568 21:23</p>
            <Button className="bg-white text-black border hover:bg-secondary-100 px-8">แก้ไขรีวิว</Button>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 bg-neutral-50 shadow-sm p-2 rounded-lg">
        <div className="flex flex-col rounded-lg bg-neutral-100">
          <div className="flex flex-row border rounded-lg p-4 shadow-sm bg-white">
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
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 px-4">
          <div className="flex flex-row gap-4">
            <StarRatings
              rating={3.5}
              starRatedColor="#facc15"
              starEmptyColor="#e5e7eb"
              numberOfStars={5}
              starDimension="24px"
              starSpacing="3px"
              name="rating"
            />
            <p className="my-auto">พึงพอใจ</p>
          </div>

          <p>อร่อยมากครับ เผลอแย่งแมวกินจนหมด ต้องสั่งเพิ่มแล้ว อิอิ</p>

          <div className="flex flex-row pt-4 justify-between">
            <p className="text-sm my-auto">15 เมษายน 2568 21:23</p>
            <Button className="bg-white text-black border hover:bg-secondary-100 px-8">แก้ไขรีวิว</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
