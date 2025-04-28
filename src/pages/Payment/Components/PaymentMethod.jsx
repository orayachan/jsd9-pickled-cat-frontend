export function PaymentMethod( formData, handleChange) {
  return (
    <div>
      <h2 className='mb-4 text-xl font-semibold'>วิธีการชำระเงิน</h2>
      <div className='space-y-3'>
        <div className='flex items-center'>
          <input
            type='radio'
            name='paymentMethod'
            value='bankTransfer'
            onChange={handleChange}
            checked={formData.paymentMethod === 'bankTransfer'}
            className='mr-2'
            required
          />
          <label>โอนเงินผ่านธนาคาร</label>
        </div>
        <div className='flex items-center'>
          <input
            type='radio'
            name='paymentMethod'
            value='creditCard'
            onChange={handleChange}
            checked={formData.paymentMethod === 'creditCard'}
            className='mr-2'
          />
          <label>บัตรเครดิต/เดบิต</label>
        </div>
        <div className='flex items-center'>
          <input
            type='radio'
            name='paymentMethod'
            value='wallet'
            onChange={handleChange}
            checked={formData.paymentMethod === 'wallet'}
            className='mr-2'
          />
          <label>วอลเล็ต (PromptPay, TrueMoney)</label>
        </div>
        <div className='flex items-center'>
          <input
            type='radio'
            name='paymentMethod'
            value='cod'
            onChange={handleChange}
            checked={formData.paymentMethod === 'cod'}
            className='mr-2'
          />
          <label>เก็บเงินปลายทาง (COD)</label>
        </div>
      </div>
    </div>
  );
}
