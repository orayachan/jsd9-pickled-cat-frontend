import { CiSearch } from 'react-icons/ci';

export function SearchProduct({ searchTerm, setSearchTerm }) {
  return (
    <div className='relative w-full max-w-sm'>
      <input
        type='text'
        placeholder='ค้นหาผลิตภัณฑ์...'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className='w-full rounded-full border border-gray-300 bg-white py-2 pr-10 pl-4 text-sm shadow-sm focus:border-blue-400 focus:ring-1 focus:ring-blue-400 focus:outline-none'
      />
      <CiSearch
        className='absolute top-1/2 right-3 -translate-y-1/2 text-gray-400'
        size={20}
      />
    </div>
  );
}
