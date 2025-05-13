import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { useEffect, useState } from 'react';
import { ItemCard } from './ItemCard';

export function Cart({ onSelectionChange }) {
  const [cartItems, setCartItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('cart')) || [];
    const filtered = stored.filter((item) => item && item.id);
    setCartItems(filtered);
    setSelectedItems(filtered); // default: select all
  }, []);

  const updateStorage = (items) => {
    setCartItems(items);
    localStorage.setItem('cart', JSON.stringify(items));
  };

  const handleQuantityChange = (id, option, size, newQty) => {
    const updatedCart = cartItems.map((item) =>
      (
        item.id === id &&
        item.selectedOption === option &&
        item.selectedSize === size
      ) ?
        { ...item, quantity: newQty }
      : item,
    );
    updateStorage(updatedCart);

    const updatedSelected = selectedItems.map((item) =>
      (
        item.id === id &&
        item.selectedOption === option &&
        item.selectedSize === size
      ) ?
        { ...item, quantity: newQty }
      : item,
    );
    setSelectedItems(updatedSelected);
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
    updateStorage(updated);
    setSelectedItems((prev) =>
      prev.filter(
        (item) =>
          !(
            item.id === id &&
            item.selectedOption === option &&
            item.selectedSize === size
          ),
      ),
    );
  };

  const handleSelect = (item, checked) => {
    if (checked) {
      setSelectedItems((prev) => [...prev, item]);
    } else {
      setSelectedItems((prev) =>
        prev.filter(
          (i) =>
            !(
              i.id === item.id &&
              i.selectedOption === item.selectedOption &&
              i.selectedSize === item.selectedSize
            ),
        ),
      );
    }
  };

  useEffect(() => {
    onSelectionChange?.(selectedItems);
  }, [selectedItems, onSelectionChange]);

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
          onSelect={handleSelect}
          isChecked={selectedItems.some(
            (i) =>
              i.id === item.id &&
              i.selectedOption === item.selectedOption &&
              i.selectedSize === item.selectedSize,
          )}
        />
      ))}
    </Card>
  );
}
