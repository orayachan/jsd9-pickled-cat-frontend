export function ShippingForm(formData, handleChange) {
  return (
    <div>
      <h2 className='mb-4 text-xl font-semibold'>ข้อมูลสำหรับจัดส่งสินค้า</h2>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
        <input
          type='text'
          name='firstName'
          placeholder='ชื่อ'
          value={formData.firstName}
          onChange={handleChange}
          className='w-full rounded border p-2'
          required
        />
        <input
          type='text'
          name='lastName'
          placeholder='นามสกุล'
          value={formData.lastName}
          onChange={handleChange}
          className='w-full rounded border p-2'
          required
        />
        <input
          type='tel'
          name='phone'
          placeholder='เบอร์โทรศัพท์'
          value={formData.phone}
          onChange={handleChange}
          className='w-full rounded border p-2'
          required
        />
        <input
          type='text'
          name='postalCode'
          placeholder='รหัสไปรษณีย์'
          value={formData.postalCode}
          onChange={handleChange}
          className='w-full rounded border p-2'
          required
        />
        <input
          type='text'
          name='subDistrict'
          placeholder='ตำบล/แขวง'
          value={formData.subDistrict}
          onChange={handleChange}
          className='w-full rounded border p-2'
          required
        />
        <input
          type='text'
          name='district'
          placeholder='อำเภอ/เขต'
          value={formData.district}
          onChange={handleChange}
          className='w-full rounded border p-2'
          required
        />
        <input
          type='text'
          name='province'
          placeholder='จังหวัด'
          value={formData.province}
          onChange={handleChange}
          className='w-full rounded border p-2'
          required
        />
        <input
          type='text'
          name='address'
          placeholder='บ้านเลขที่/ถนน'
          value={formData.address}
          onChange={handleChange}
          className='w-full rounded border p-2 md:col-span-2'
          required
        />
      </div>
    </div>
  );
}
