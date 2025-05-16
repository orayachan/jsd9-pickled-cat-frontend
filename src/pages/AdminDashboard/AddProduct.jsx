import api from '@/services/api';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { uploadToCloudinary } from '../../utils/cloudinary';

export function AddProduct() {
  const navigate = useNavigate();
  const [images, setImages] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: '',
    stock: '',
    price: '',
    discount: '',
    color: '',
    size: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length + images.length > 3) {
      alert('สามารถอัปโหลดรูปได้สูงสุด 3 รูป');
      return;
    }
    const previews = files.map((file) => ({
      id: URL.createObjectURL(file),
      url: URL.createObjectURL(file),
      file: file,
    }));
    setImages((prev) => [...prev, ...previews]);
  };

  const handleRemoveImage = (id) => {
    URL.revokeObjectURL(id);
    setImages((prev) => prev.filter((img) => img.id !== id));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    if (formData.name.length < 5 || formData.name.length > 50) {
      alert('ชื่อสินค้าต้องมีความยาว 5-50 ตัวอักษร');
      return false;
    }
    if (formData.description.length < 20 || formData.description.length > 300) {
      alert('รายละเอียดสินค้าต้องมีความยาว 20-300 ตัวอักษร');
      return false;
    }
    if (images.length === 0 || images.length > 3) {
      alert('กรุณาเลือกรูปภาพ 1-3 รูป');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      setIsSubmitting(true);

      // อัพโหลดรูปภาพทั้งหมดไปยัง Cloudinary
      const uploadPromises = images.map((img) => uploadToCloudinary(img.file));
      const uploadResults = await Promise.all(uploadPromises);

      // สร้างข้อมูลสินค้าพร้อมด้วย URL รูปภาพจาก Cloudinary
      const productData = {
        name: formData.name,
        description: formData.description,
        category: formData.category,
        stock: Number(formData.stock),
        price: Number(formData.price),
        discount: Number(formData.discount),
        option: [formData.color], // ส่ง option เป็น array
        sizes: [formData.size], // ส่ง sizes เป็น array
        images: uploadResults.map((result) => result.url),
      };

      console.log('Product data to submit:', productData);

      const response = await api.post('/api/products', productData);

      console.log('API Response:', response.data);

      if (response.status === 201 || response.status === 200) {
        alert('เพิ่มสินค้าสำเร็จ');

        setFormData({
          name: '',
          description: '',
          category: '',
          stock: '',
          price: '',
          discount: '',
          color: '',
          size: '',
        });

        images.forEach((img) => URL.revokeObjectURL(img.id));
        setImages([]);

        navigate('/admin/dashboard');
      }
    } catch (error) {
      console.error('Error adding product:', error);
      const errorMessage =
        error.response?.data?.details ||
        error.message ||
        'ไม่สามารถเพิ่มสินค้าได้';
      alert(`เกิดข้อผิดพลาด: ${errorMessage}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className='space-y-4'>
      <h1 className='mt-5 text-3xl font-bold'>เพิ่มสินค้าคงคลัง</h1>

      <form className='grid grid-cols-2 gap-6' onSubmit={handleSubmit}>
        {/* อัปโหลดรูปภาพ */}
        <div className='col-span-2 flex flex-wrap gap-4'>
          {images.length === 0 ?
            <label className='hover:bg-secondary-50 flex h-40 w-40 cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-gray-300'>
              <span className='text-gray-400'>เลือกรูปภาพ (1-3 รูป)</span>
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

              {images.length < 3 && (
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
              )}
            </>
          }
        </div>

        {/* ชื่อสินค้า */}
        <div className='flex flex-col space-y-2'>
          <label className='font-semibold'>ชื่อสินค้า (5-50 ตัวอักษร)</label>
          <input
            type='text'
            name='name'
            value={formData.name}
            onChange={handleInputChange}
            className='rounded-lg border border-gray-300 p-2'
            placeholder='กรอกชื่อสินค้า'
            required
            minLength={5}
            maxLength={50}
          />
        </div>

        {/* รายละเอียดสินค้า */}
        <div className='flex flex-col space-y-2'>
          <label className='font-semibold'>
            รายละเอียดสินค้า (20-300 ตัวอักษร)
          </label>
          <textarea
            name='description'
            value={formData.description}
            onChange={handleInputChange}
            className='h-24 rounded-lg border border-gray-300 p-2'
            placeholder='กรอกรายละเอียดสินค้า'
            required
            minLength={20}
            maxLength={300}
          />
        </div>

        {/* หมวดหมู่ */}
        <div className='flex flex-col space-y-2'>
          <label className='font-semibold'>หมวดหมู่</label>
          <select
            name='category'
            value={formData.category}
            onChange={handleInputChange}
            className='rounded-lg border border-gray-300 p-2'
            required
          >
            <option value=''>เลือกหมวดหมู่</option>
            <option value='อาหารแมวพรีเมียม'>อาหารแมวพรีเมียม</option>
            <option value='ของเล่นแมว'>ของเล่นแมว</option>
            <option value='ที่นอนแมว'>ที่นอนแมว</option>
            <option value='เสื้อแมว'>เสื้อแมว</option>
            <option value='ของตกแต่งบ้าน'>ของตกแต่งบ้าน</option>
            <option value='ของขวัญแมวดองเกลือ'>ของขวัญแมวดองเกลือ</option>
          </select>
        </div>

        {/* สินค้าในคลัง */}
        <div className='flex flex-col space-y-2'>
          <label className='font-semibold'>สินค้าในคลัง</label>
          <input
            type='number'
            name='stock'
            value={formData.stock}
            onChange={handleInputChange}
            className='rounded-lg border border-gray-300 p-2'
            placeholder='จำนวนในสต็อก'
            required
            min='0'
          />
        </div>

        {/* ราคา */}
        <div className='flex flex-col space-y-2'>
          <label className='font-semibold'>ราคา</label>
          <input
            type='number'
            name='price'
            value={formData.price}
            onChange={handleInputChange}
            className='rounded-lg border border-gray-300 p-2'
            placeholder='ราคาปกติ'
            required
            min='0'
          />
        </div>

        {/* ส่วนลด */}
        <div className='flex flex-col space-y-2'>
          <label className='font-semibold'>ส่วนลด (%)</label>
          <input
            type='number'
            name='discount'
            value={formData.discount}
            onChange={handleInputChange}
            className='rounded-lg border border-gray-300 p-2'
            placeholder='ใส่ 0 ถ้าไม่มี'
            required
            min='0'
            max='100'
          />
        </div>

        {/* สีสินค้า */}
        <div className='flex flex-col space-y-2'>
          <label className='font-semibold'>สีสินค้า</label>
          <select
            name='color'
            value={formData.color}
            onChange={handleInputChange}
            className='rounded-lg border border-gray-300 p-2'
            required
          >
            <option value=''>เลือกสี</option>
            <option value='white'>ขาว</option>
            <option value='black'>ดำ</option>
            <option value='red'>แดง</option>
            <option value='blue'>น้ำเงิน</option>
          </select>
        </div>

        {/* ไซส์ */}
        <div className='flex flex-col space-y-2'>
          <label className='font-semibold'>ไซส์</label>
          <select
            name='size'
            value={formData.size}
            onChange={handleInputChange}
            className='rounded-lg border border-gray-300 p-2'
            required
          >
            <option value=''>เลือกไซส์</option>
            <option value='S'>S</option>
            <option value='M'>M</option>
            <option value='L'>L</option>
            <option value='XL'>XL</option>
          </select>
        </div>

        {/* ปุ่มเพิ่มสินค้า */}
        <div className='col-span-2'>
          <button
            type='submit'
            disabled={isSubmitting}
            className='bg-primary rounded-lg px-4 py-2 font-bold text-white hover:cursor-pointer hover:text-green-500 disabled:cursor-not-allowed disabled:opacity-50'
          >
            {isSubmitting ? 'กำลังเพิ่มสินค้า...' : 'เพิ่มสินค้าในระบบ'}
          </button>
        </div>
      </form>
    </div>
  );
}
