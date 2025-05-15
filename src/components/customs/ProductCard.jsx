import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import api from '@/services/api';
import { useState } from 'react';

export const ProductCard = ({ product, onProductUpdated }) => {
  const { _id, name, description, price, discount, stock, category, images } =
    product;
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    name,
    description,
    price,
    discount,
    stock,
    category,
    images: images || [],
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e, idx) => {
    const newImages = [...form.images];
    newImages[idx] = e.target.value;
    setForm((prev) => ({ ...prev, images: newImages }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await api.put(`/api/products/${_id}`, {
        ...form,
        price: Number(form.price),
        discount: Number(form.discount),
        stock: Number(form.stock),
        images: form.images,
      });
      setOpen(false);
      if (onProductUpdated) onProductUpdated();
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!window.confirm('คุณต้องการลบสินค้านี้จริงหรือไม่?')) return;
    setLoading(true);
    setError(null);
    try {
      await api.delete(`/api/products/${_id}`);
      setOpen(false);
      if (onProductUpdated) onProductUpdated();
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='flex w-full flex-col justify-between rounded-2xl bg-white p-4 shadow-md'>
      <img
        src={images[0]}
        alt={name}
        className='mx-auto mb-4 h-40 w-40 rounded-xl'
      />
      <h2 className='text-lg font-bold'>{name}</h2>
      <p className='text-sm text-gray-600'>{description}</p>
      <p className='mt-2 text-sm'>
        หมวดหมู่: <span className='font-medium text-gray-800'>{category}</span>
      </p>
      <p className='text-sm'>
        ราคา:{' '}
        <span className='font-semibold text-green-600'>
          {price - discount} บาท
        </span>
        {discount > 0 && (
          <span className='ml-2 text-xs text-red-500 line-through'>
            {price} บาท
          </span>
        )}
      </p>
      <p className='text-sm text-gray-600'>คงเหลือ: {stock} ชิ้น</p>
      <div className='flex flex-col pt-4 text-center'>
        <AlertDialog open={open} onOpenChange={setOpen}>
          <AlertDialogTrigger asChild>
            <Button className='hover:bg-secondary border-2 border-black bg-white text-black hover:cursor-pointer'>
              แก้ไข ข้อมูล
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>แก้ไขข้อมูลสินค้า</AlertDialogTitle>
            </AlertDialogHeader>
            <form onSubmit={handleSubmit} className='space-y-3'>
              <div>
                <label className='block text-sm font-medium'>ชื่อสินค้า</label>
                <input
                  name='name'
                  value={form.name}
                  onChange={handleChange}
                  className='w-full rounded border p-2'
                  required
                />
              </div>
              <div>
                <label className='block text-sm font-medium'>รายละเอียด</label>
                <textarea
                  name='description'
                  value={form.description}
                  onChange={handleChange}
                  className='w-full rounded border p-2'
                  required
                />
              </div>
              <div className='flex gap-2'>
                <div className='flex-1'>
                  <label className='block text-sm font-medium'>ราคา</label>
                  <input
                    name='price'
                    type='number'
                    value={form.price}
                    onChange={handleChange}
                    className='w-full rounded border p-2'
                    required
                  />
                </div>
                <div className='flex-1'>
                  <label className='block text-sm font-medium'>ส่วนลด</label>
                  <input
                    name='discount'
                    type='number'
                    value={form.discount}
                    onChange={handleChange}
                    className='w-full rounded border p-2'
                    required
                  />
                </div>
                <div className='flex-1'>
                  <label className='block text-sm font-medium'>คงเหลือ</label>
                  <input
                    name='stock'
                    type='number'
                    value={form.stock}
                    onChange={handleChange}
                    className='w-full rounded border p-2'
                    required
                  />
                </div>
              </div>
              <div>
                <label className='block text-sm font-medium'>หมวดหมู่</label>
                <input
                  name='category'
                  value={form.category}
                  onChange={handleChange}
                  className='w-full rounded border p-2'
                  required
                />
              </div>
              <div>
                <label className='block text-sm font-medium'>
                  รูปภาพ (URL)
                </label>
                {form.images.map((img, idx) => (
                  <input
                    key={idx}
                    value={img}
                    onChange={(e) => handleImageChange(e, idx)}
                    className='mb-1 w-full rounded border p-2'
                  />
                ))}
              </div>
              {error && <div className='text-sm text-red-500'>{error}</div>}
              <AlertDialogFooter className='flex flex-row items-center justify-between gap-2'>
                <AlertDialogCancel
                  type='button'
                  disabled={loading}
                  onClick={handleDelete}
                  className='rounded bg-red-600 px-4 py-2 text-white transition-colors hover:bg-red-700'
                >
                  {loading ? 'กำลังลบ...' : 'ลบสินค้า'}
                </AlertDialogCancel>
                <div className='flex flex-row gap-2'>
                  <AlertDialogCancel
                    disabled={loading}
                    className='rounded border border-gray-300 bg-white px-4 py-2 text-gray-700 transition-colors hover:bg-gray-100'
                  >
                    ยกเลิก
                  </AlertDialogCancel>
                  <AlertDialogAction asChild>
                    <button
                      type='submit'
                      disabled={loading}
                      className='bg-primary hover:bg-primary/90 rounded px-4 py-2 text-white transition-colors'
                    >
                      {loading ? 'กำลังบันทึก...' : 'บันทึก'}
                    </button>
                  </AlertDialogAction>
                </div>
              </AlertDialogFooter>
            </form>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
};
