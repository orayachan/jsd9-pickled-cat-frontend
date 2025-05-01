import { Button } from '@/components/ui/button';

/** @param {{id: number; description: string}}
 * @return {React.ReactElement} description
 */
export function Card({ id, description }) {
  return (
    <Button className='grid h-fit place-content-center-safe'>
      <p className='text-center'>This is a card, or button?</p>
      <p className='text-center'>{`id: ${id}, description: ${description}`}</p>
    </Button>
  );
}
