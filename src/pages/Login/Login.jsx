import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useForm } from '@/hooks';
import { cn } from '@/lib/utils';
import { handleBlur } from '@/utils';
import { Check, LoaderCircle } from 'lucide-react';
import { Link } from 'react-router';

export function Login() {
  const { errors, handleSubmit, loading, setData, setErrors, success } =
    useForm('login');

  /** @param {'email' | 'password'} field */
  function validationError(field) {
    switch (field) {
      case 'email':
        return errors.type === 'validation' && errors.errors['email'];
      case 'password':
        return errors.type === 'validation' && errors.errors['password'];
    }
  }

  return (
    <section className='bg-secondary-50 min-h-[calc(100dvh_-_8rem)] content-center pt-16 max-xl:px-4 max-sm:px-0 lg:pt-24 lg:pb-4'>
      <div className='bg-secondary-50 mx-auto grid max-w-screen-sm -translate-y-8 place-items-center gap-8 rounded-xl p-4 lg:max-w-screen-xl lg:grid-cols-2 lg:bg-white lg:p-8 lg:shadow-md'>
        <form
          className='mx-auto size-full content-center space-y-12 lg:px-4'
          method='POST'
          onReset={() =>
            setErrors({ type: null, errors: {}, emailConflict: false })
          }
          onSubmit={(event) => handleSubmit(event)}
        >
          <div className='content-center space-y-8'>
            <h1 className='text-primary text-center text-3xl font-semibold'>
              เข้าสู่ระบบ
            </h1>
            <div className='space-y-4'>
              <div className='grid gap-2'>
                <Label className='text-lg font-bold' htmlFor='email'>
                  อีเมล์
                </Label>
                <Input
                  className={cn(
                    validationError('email') ? 'border-destructive border' : '',
                    'bg-white',
                  )}
                  type='email'
                  id='email'
                  placeholder='example@email.com'
                  aria-describedby='email-error'
                  aria-invalid={validationError('email') ? true : false}
                  onBlur={(event) =>
                    handleBlur(setData, event.target.value, 'email')
                  }
                />
                <p
                  className={cn(
                    validationError('email') ? 'grid' : 'hidden',
                    'text-destructive text-sm',
                  )}
                  id='email-error'
                >
                  {errors.errors.email}
                </p>
              </div>
              <div className='grid gap-2'>
                <Label className='text-lg font-bold' htmlFor='password'>
                  รหัสผ่าน
                </Label>
                <Input
                  className={cn(
                    validationError('password') ?
                      'border-destructive border'
                    : '',
                    'bg-white',
                  )}
                  type='password'
                  id='password'
                  placeholder='อย่างน้อย 8 ตัวอักษร'
                  aria-describedby='password-error'
                  aria-invalid={validationError('password') ? true : false}
                  onBlur={(event) =>
                    handleBlur(setData, event.target.value, 'password')
                  }
                />
                <p
                  className={cn(
                    validationError('password') ? 'grid' : 'hidden',
                    'text-destructive text-sm',
                  )}
                  id='password-error'
                >
                  {errors.errors.password}
                </p>
              </div>

              <div>
                <Link
                  to={{ pathname: '/login' }}
                  className='text-primary font-semibold'
                >
                  ลืมรหัสผ่าน?
                </Link>
              </div>
              <div className='flex gap-2'>
                <Checkbox className='bg-white' id='remember-me' />
                <Label className='text-primary' htmlFor='remember-me'>
                  จดจำการเข้าสู่ระบบ
                </Label>
              </div>
              <p
                className={cn(
                  (
                    errors.type === 'fetching' &&
                      !errors.emailConflict &&
                      errors.errors['fetch']
                  ) ?
                    'grid'
                  : 'hidden',
                  'text-destructive',
                )}
              >
                อีเมลหรือรหัสผ่านไม่ถูกต้อง กรุณาลองอีกครั้ง
              </p>
            </div>
            <p
              className={cn(
                success ? 'grid' : 'hidden',
                'text-primary text-lg font-semibold',
              )}
            >
              เข้าสู่ระบบสำเร็จ กำลังไปที่หน้า Dashboard...
            </p>
          </div>

          <div className='mx-auto grid w-3/4 grid-flow-row gap-4 sm:grid-flow-col'>
            <Button
              className='rounded-full'
              variant='outline'
              size='lg'
              type='reset'
            >
              รีเซ็ต
            </Button>
            <Button className='rounded-full' size='lg' type='submit'>
              {loading && <LoaderCircle className='animate-spin' />}
              {success && <Check className='size-6' />}
              เข้าสู่ระบบ
            </Button>
          </div>

          <div className='text-center'>
            {'ยังไม่มีบัญชี?' + ' '}
            <Link
              to={{ pathname: '/register' }}
              className='text-primary font-semibold'
            >
              สร้างบัญชี
            </Link>
          </div>
        </form>

        <div className='size-[30rem] overflow-clip rounded-xl border-2 border-zinc-50 max-lg:hidden'>
          <img className='object-cover' src='/greycat.png' alt='' />
        </div>
      </div>
    </section>
  );
}
