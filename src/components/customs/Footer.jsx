/** @param {{variation: 'default', 'minimal'}} */
export function Footer({ variation: variant = 'default' }) {
  return variant === 'default' ?
      <footer className='bg-secondary-100 h-32 content-center-safe text-center'>
        Footer นะจ๊ะ
      </footer>
    : <footer className='h-16 content-center-safe bg-white text-center'>
        Copyright © 2025 PICKLED-CAT • All rights Reserved
      </footer>;
}
