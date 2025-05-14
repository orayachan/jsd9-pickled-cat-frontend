import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { BcrumbPayment } from './Components/BcrumbPayment';
import { PaymentMethod } from './Components/PaymentMethod';
import { PaymentSummary } from './Components/PaymentSummary';
import { ShippingForm } from './Components/ShippingForm';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Backend (TBC)

    const orderId = uuidv4(); // Generate a unique order ID
    const paymentId = uuidv4(); // Generate a unique payment ID

    let paidAt = new Date().toISOString(); // Get the current date and time in ISO format
    let updateAt = new Date().toISOString(); // Get the current date and time in ISO format

    let status = 'Pending'; // Set the initial status to 'Pending'

    if (formData.paymentMethod === 'เก็บเงินปลายทาง') {
      // Handle cash on delivery
      status = 'Paid'; // Set the status to 'Paid'
      paidAt = new Date().toISOString(); // Set the paidAt date to now
      updateAt = new Date().toISOString(); // Set the updateAt date to now
    }

    try {
      const response = await axios.post(
        'http://localhost:3000/api/payments', // Replace with your backend URL
        {
          order_id: orderId, // Replace with the actual order ID
          payment_id: paymentId, // Replace with the actual payment ID
          payment_method: formData.paymentMethod,
          amount: 100, // Replace with the actual amount
          payment_status: status,
          payment_date: paidAt,
          update_at: updateAt,
        }
      );
      console.log('Payment successful:', response.data);
    } catch (error) {
      console.error('Error processing payment:', error);
    }
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
