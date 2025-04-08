import { Home } from '@/pages/Home';

export function App() {
  return (
    <main className='grid min-h-svh min-w-xl place-content-center-safe gap-4'>
      <p className='text-center'>
        This is <code>App.jsx</code> main layout.
      </p>
      <Home />
    </main>
  );
}
