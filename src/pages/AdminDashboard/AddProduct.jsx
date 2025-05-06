import { useState } from 'react';

export function AddProduct() {
  const [images, setImages] = useState([]);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const previews = files.map((file) => ({
      id: URL.createObjectURL(file),
      url: URL.createObjectURL(file),
    }));
    setImages((prev) => [...prev, ...previews]);
  };

  const handleRemoveImage = (id) => {
    setImages((prev) => prev.filter((img) => img.id !== id));
  };

  return (
    <div className='space-y-4'>
      <h1 className='mt-5 text-3xl font-bold'>เพิ่มสินค้าคงคลัง</h1>

      <form className='grid grid-cols-2 gap-6'>
        {/* อัปโหลดรูปภาพ */}
        <div className='col-span-2 flex flex-wrap gap-4'>
          {images.length === 0 ?
            <label className='hover:bg-secondary-50 flex h-40 w-40 cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-gray-300'>
              <span className='text-gray-400'>เลือกรูปภาพ</span>
              <input
                type='file'
                multiple
                accept='image/*'
                className='hidden'
                onChange={handleImageChange}
              />
            </label>
          : <>
              {images.map((img, idx) => (
                <div
                  key={img.id}
                  className='group relative h-40 w-40 overflow-hidden rounded-lg border'
                >
                  <img
                    src={img.url}
                    alt={`preview-${idx}`}
                    className='h-full w-full object-cover'
                  />

                  {/* ปุ่มลบรูป */}
                  <button
                    type='button'
                    onClick={() => handleRemoveImage(img.id)}
                    className='bg-opacity-50 absolute top-1 right-1 hidden h-6 w-6 items-center justify-center rounded-full bg-black text-sm text-white group-hover:flex hover:cursor-pointer'
                    title='ลบรูป'
                  >
                    ×
                  </button>
                </div>
              ))}

              {/* ปุ่มเพิ่มภาพเพิ่ม */}
              <label className='flex h-40 w-40 cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 hover:bg-gray-50'>
                <span className='text-gray-400'>เพิ่มรูป</span>
                <input
                  type='file'
                  multiple
                  accept='image/*'
                  className='hidden'
                  onChange={handleImageChange}
                />
              </label>
            </>
          }
        </div>

        {/* ชื่อสินค้า */}
        <div className='flex flex-col space-y-2'>
          <label className='font-semibold'>ชื่อสินค้า</label>
          <input
            type='text'
            className='rounded-lg border border-gray-300 p-2'
            placeholder='กรอกชื่อสินค้า'
          />
        </div>

        {/* รายละเอียดสินค้า */}
        <div className='flex flex-col space-y-2'>
          <label className='font-semibold'>รายละเอียดสินค้า</label>
          <textarea
            className='h-24 rounded-lg border border-gray-300 p-2'
            placeholder='กรอกรายละเอียดสินค้า'
          />
        </div>

        {/* หมวดหมู่ */}
        <div className='flex flex-col space-y-2'>
          <label className='font-semibold'>หมวดหมู่</label>
          <select className='rounded-lg border border-gray-300 p-2'>
            <option>เลือกหมวดหมู่</option>
          </select>
        </div>

        {/* สินค้าในคลัง */}
        <div className='flex flex-col space-y-2'>
          <label className='font-semibold'>สินค้าในคลัง</label>
          <input
            type='number'
            className='rounded-lg border border-gray-300 p-2'
            placeholder='จำนวนในสต็อก'
          />
        </div>

        {/* ราคา */}
        <div className='flex flex-col space-y-2'>
          <label className='font-semibold'>ราคา</label>
          <input
            type='number'
            className='rounded-lg border border-gray-300 p-2'
            placeholder='ราคาปกติ'
          />
        </div>

        {/* ส่วนลด */}
        <div className='flex flex-col space-y-2'>
          <label className='font-semibold'>ส่วนลด (บาท)</label>
          <input
            type='number'
            className='rounded-lg border border-gray-300 p-2'
            placeholder='ใส่ 0 ถ้าไม่มี'
          />
        </div>

        {/* สีสินค้า */}
        <div className='flex flex-col space-y-2'>
          <label className='font-semibold'>สีสินค้า</label>
          <select className='rounded-lg border border-gray-300 p-2'>
            <option>เลือกสี</option>
            <option>ขาว</option>
            <option>ดำ</option>
          </select>
        </div>

        {/* ไซส์ */}
        <div className='flex flex-col space-y-2'>
          <label className='font-semibold'>ไซส์</label>
          <select className='rounded-lg border border-gray-300 p-2'>
            <option>เลือกไซส์</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
          </select>
        </div>

        {/* ปุ่มเพิ่มสินค้า */}
        <div className='col-span-2'>
          <button
            type='submit'
            className='bg-primary rounded-lg px-4 py-2 font-bold text-white hover:cursor-pointer hover:text-green-500'
          >
            เพิ่มสินค้าในระบบ
          </button>
        </div>
      </form>
    </div>
  );
}
