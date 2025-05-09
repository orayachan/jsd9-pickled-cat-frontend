import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { BcrumbPayment } from './Components/BcrumbPayment';
import { PaymentMethod } from './Components/PaymentMethod';
import { PaymentSummary } from './Components/PaymentSummary';
import { ShippingForm } from './Components/ShippingForm';

export function Payment() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    address: '',
    district: '',
    subDistrict: '',
    province: '',
    postalCode: '',
    paymentMethod: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Backend (TBC)
  };

  return (
    <div className='w-full min-w-screen px-4 pb-16 sm:px-16'>
      <main className='mx-auto max-w-screen-2xl'>
        <BcrumbPayment />
        <form
          onSubmit={handleSubmit}
          className='mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3'
        >
          {/* PART: Left */}
          <div className='space-y-8 lg:col-span-2'>
            <ShippingForm formData={formData} handleChange={handleChange} />
            <PaymentMethod formData={formData} handleChange={handleChange} />
            <Button
              type='submit'
              className='bg-primary-600 hover:bg-primary-700 w-full rounded-full py-3 transition'
            >
              ยืนยันการสังซื้อ
            </Button>
          </div>
          {/* PART: Right */}
          <aside className='sticky top-24'>
            <PaymentSummary />
          </aside>
        </form>
      </main>
    </div>
  );
}
