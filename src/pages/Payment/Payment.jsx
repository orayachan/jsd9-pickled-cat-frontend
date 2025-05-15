import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { BcrumbPayment } from './Components/BcrumbPayment';
import { PaymentMethod } from './Components/PaymentMethod';
import { PaymentSummary } from './Components/PaymentSummary';
import { ShippingForm } from './Components/ShippingForm';

export function Payment() {
  const navigate = useNavigate();

  const initialFormData = {
    firstName: '',
    lastName: '',
    phone: '',
    address: '',
    district: '',
    subDistrict: '',
    province: '',
    postalCode: '',
  };
  const [formData, setFormData] = useState(initialFormData);
  const [paymentMethod, setPaymentMethod] = useState('bankTransfer');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.removeItem('cart');

    setFormData(initialFormData);
    setPaymentMethod('banktransfer');

    alert('คำสั่งซื้อของคุณได้รับการยืนยันแล้ว!');
    navigate('/');
  };

  return (
    <div className='w-full min-w-screen px-4 pb-16 sm:px-16'>
      <main className='mx-auto max-w-screen-2xl'>
        <BcrumbPayment />
        <form
          onSubmit={handleSubmit}
          className='mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3'
        >
          {/* Left Side */}
          <div className='space-y-8 lg:col-span-2'>
            <ShippingForm formData={formData} handleChange={handleChange} />
            <PaymentMethod
              formData={paymentMethod}
              handleChange={handlePaymentMethodChange}
            />
            <Button
              type='submit'
              className='bg-primary-600 hover:bg-primary-700 w-full rounded-full py-3 transition'
            >
              ยืนยันการสั่งซื้อ
            </Button>
          </div>

          {/* Right Side */}
          <aside className='sticky top-24'>
            <PaymentSummary />
          </aside>
        </form>
      </main>
    </div>
  );
}
