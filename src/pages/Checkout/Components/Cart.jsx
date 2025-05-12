import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { useEffect, useState } from 'react';
import { ItemCard } from './ItemCard';

export function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(stored.filter(item => item && item.id));
  }, []);

  const handleQuantityChange = (id, option, size, newQty) => {
    const updated = cartItems.map((item) =>
      (
        item.id === id &&
        item.selectedOption === option &&
        item.selectedSize === size
      ) ?
        { ...item, quantity: newQty }
      : item,
    );
    setCartItems(updated);
    localStorage.setItem('cart', JSON.stringify(updated));
  };

  const handleRemove = (id, option, size) => {
    const updated = cartItems.filter(
      (item) =>
        !(
          item.id === id &&
          item.selectedOption === option &&
          item.selectedSize === size
        ),
    );
    setCartItems(updated);
    localStorage.setItem('cart', JSON.stringify(updated));
  };
  return (
    <Card className='max-w-full'>
      <CardHeader>
        <CardTitle className='pt-2'>รายการคำสั่งซื้อ</CardTitle>
      </CardHeader>
      {cartItems.map((item) => (
          <ItemCard
            key={`${item.id}-${item.selectedOption}-${item.selectedSize}`}
            item={item}
            onQuantityChange={handleQuantityChange}
            onRemove={handleRemove}
          />
        ))}
    </Card>
  );
}
