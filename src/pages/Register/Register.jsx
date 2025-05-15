import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useForm } from '@/hooks';
import { cn } from '@/lib/utils';
import { handleBlur } from '@/utils';
import { Check, LoaderCircle } from 'lucide-react';
import { Link } from 'react-router';

export function Register() {
  const { errors, handleSubmit, loading, setData, setErrors, success } =
    useForm('register');

  /** @param {'email' | 'firstname' | 'lastname' | 'password' | 'confirm-password'} field */
  function validationError(field) {
    switch (field) {
      case 'email':
        return errors.type === 'validation' && errors.errors['email'];
      case 'firstname':
        return errors.type === 'validation' && errors.errors['firstname'];
      case 'lastname':
        return errors.type === 'validation' && errors.errors['lastname'];
      case 'password':
        return errors.type === 'validation' && errors.errors['password'];
      case 'confirm-password':
        return errors.type === 'validation' && errors.errors['confirmPassword'];
    }
  }

  /** @param {'email' | 'global'} field */
  function fetchingError(field) {
    if (field === 'email')
      return (
        errors.type === 'fetching' &&
        errors.emailConflict &&
        errors.errors['fetch']
      );
    else
      return (
        errors.type === 'fetching' &&
        !errors.emailConflict &&
        errors.errors['fetch']
      );
  }

  return (
    <section className='bg-secondary-50 min-h-[calc(100dvh_-_10rem)] content-center py-4 max-xl:px-4 max-sm:px-0'>
      <div className='bg-secondary-50 mx-auto grid max-w-screen-sm place-items-center gap-8 rounded-xl p-4 lg:max-w-screen-xl lg:grid-cols-2 lg:bg-white lg:p-8 lg:shadow-md'>
        <div className='size-[30rem] overflow-clip rounded-xl border-2 border-zinc-50 max-lg:hidden'>
          <img className='object-cover' src='/greycat.png' alt='' />
        </div>

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
              สมัครสมาชิก
            </h1>
            <div className='space-y-4'>
              <div className='grid gap-2'>
                <Label className='text-lg font-bold' htmlFor='email'>
                  อีเมล์
                </Label>
                <Input
                  className={cn(
                    validationError('email') || fetchingError() ?
                      'border-destructive border'
                    : '',
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
                    validationError('email') || fetchingError('email') ?
                      'grid'
                    : 'hidden',
                    'text-destructive text-sm',
                  )}
                  id='email-error'
                >
                  {errors.errors['email'] || errors.errors['fetch']}
                </p>
              </div>

              <div className='grid gap-2'>
                <Label className='text-lg font-bold' htmlFor='firstname'>
                  ชื่อจริง
                </Label>
                <Input
                  className={cn(
                    validationError('firstname') ?
                      'border-destructive border'
                    : '',
                    'bg-white',
                  )}
                  type='text'
                  id='firstname'
                  placeholder='ชื่อจริง'
                  aria-describedby='firstname-error'
                  aria-invalid={validationError('firstname') ? true : false}
                  onBlur={(event) =>
                    handleBlur(setData, event.target.value, 'firstname')
                  }
                />
                <p
                  className={cn(
                    validationError('firstname') ? 'grid' : 'hidden',
                    'text-destructive text-sm',
                  )}
                  id='firstname-error'
                >
                  {errors.errors.firstname}
                </p>
              </div>
              <div className='grid gap-2'>
                <Label className='text-lg font-bold' htmlFor='lastname'>
                  นามสกุล
                </Label>
                <Input
                  className={cn(
                    validationError('lastname') ?
                      'border-destructive border'
                    : '',
                    'bg-white',
                  )}
                  type='text'
                  id='lastname'
                  placeholder='นามสกุล'
                  aria-describedby='lastname-error'
                  aria-invalid={validationError('lastname') ? true : false}
                  onBlur={(event) =>
                    handleBlur(setData, event.target.value, 'lastname')
                  }
                />
                <p
                  className={cn(
                    validationError('lastname') ? 'grid' : 'hidden',
                    'text-destructive text-sm',
                  )}
                  id='lastname-error'
                >
                  {errors.errors.lastname}
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
              <div className='grid gap-2'>
                <Label className='text-lg font-bold' htmlFor='confirm-password'>
                  ยืนยันรหัสผ่าน
                </Label>
                <Input
                  className={cn(
                    validationError('confirm-password') ?
                      'border-destructive border'
                    : '',
                    'bg-white',
                  )}
                  type='password'
                  id='confirm-password'
                  placeholder='อย่างน้อย 8 ตัวอักษร'
                  aria-describedby='confirm-password-error'
                  aria-invalid={
                    validationError('confirm-password') ? true : false
                  }
                  onBlur={(event) =>
                    handleBlur(setData, event.target.value, 'confirm-password')
                  }
                />
                <p
                  className={cn(
                    validationError('confirm-password') ? 'grid' : 'hidden',
                    'text-destructive text-sm',
                  )}
                  id='confirm-password-error'
                >
                  {errors.errors.confirmPassword}
                </p>
              </div>
              <div>
                <Link
                  to={{ pathname: '/register' }}
                  className='text-primary font-semibold'
                >
                  ลืมรหัสผ่าน?
                </Link>
              </div>
            </div>
            <p
              className={cn(
                fetchingError('global') ? 'grid' : 'hidden',
                'text-destructive text-lg font-semibold',
              )}
            >
              {errors.errors['fetch']}
            </p>
            <p
              className={cn(
                success ? 'grid' : 'hidden',
                'text-primary text-lg font-semibold',
              )}
            >
              ลงทะเบียนสำเร็จ กรุณาล็อคอิน...
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
              สมัครสมาชิก
            </Button>
          </div>

          <div className='text-center'>
            {'เป็นสมาชิกแล้ว' + ' '}
            <Link
              to={{ pathname: '/login' }}
              className='text-primary font-semibold'
            >
              เข้าสู่ระบบ
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
}
