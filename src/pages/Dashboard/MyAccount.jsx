import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { useEffect, useState } from 'react';

export function MyAccount() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [form, setForm] = useState({ firstname: '', lastname: '' });
  const [saving, setSaving] = useState(false);
  const [success, setSuccess] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      setLoading(true);
      setError(null);
      try {
        const token = localStorage.getItem('authToken');
        const res = await fetch(`https://jsd9-pickled-cat-backend.onrender.com/api/users/profile`, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          credentials: 'include',
        });
        const data = await res.json();
        if (!res.ok || !data.success) throw new Error(data.message || 'เกิดข้อผิดพลาด');
        setUser(data.data);
        setForm({ firstname: data.data.firstname, lastname: data.data.lastname });
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);

  const handleEdit = () => {
    setEditMode(true);
    setSuccess(null);
  };

  const handleCancel = () => {
    setEditMode(false);
    setForm({ firstname: user.firstname, lastname: user.lastname });
    setSuccess(null);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setSaving(true);
    setError(null);
    setSuccess(null);
    try {
      const token = localStorage.getItem('authToken');
      const patchBody = {
        firstname: form.firstname,
        lastname: form.lastname,
        email: user.email,
        phone: user.phone,
        address: user.address || {
          province: '',
          sub_district: '',
          district: '',
          postal_code: '',
          additional_address: '',
        },
      };
      const res = await fetch(`${import.meta.env.VITE_API_URL || ''}/api/users/profile`, {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(patchBody),
      });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.message || 'เกิดข้อผิดพลาด');
      setUser((prev) => ({ ...prev, firstname: form.firstname, lastname: form.lastname }));
      setEditMode(false);
      setSuccess('บันทึกสำเร็จ');
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <div className="p-8 text-center">กำลังโหลดข้อมูล...</div>;
  if (error) return <div className="p-8 text-center text-red-500">{error}</div>;
  if (!user) return null;

  return (
    <div className="pt-6">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-2xl font-bold">ข้อมูลส่วนตัว</h2>
        {/* {!editMode ? (
          <a href="#" className="text-xl font-bold hover:underline" onClick={handleEdit}>
            แก้ไขข้อมูล
          </a>
        ) : (
          <div className="flex gap-2">
            <button
              className="text-lg font-bold text-green-600 hover:underline"
              onClick={handleSave}
              disabled={saving}
            >
              บันทึก
            </button>
            <button
              className="text-lg font-bold text-gray-500 hover:underline"
              onClick={handleCancel}
              disabled={saving}
            >
              ยกเลิก
            </button>
          </div>
        )} */}
      </div>
      {success && <div className="mb-2 text-green-600">{success}</div>}
      <div className="flex flex-row gap-24">
        {/* label */}
        <div className="mt-2 flex flex-col gap-4 text-xl text-primary font-bold">
          <p>ชื่อ-นามสกุล</p>
          <p>อีเมล</p>
          <p>รหัสผ่าน</p>
          <p>เบอร์โทรศัพท์</p>
        </div>
        {/* user info */}
        <div className="mt-2 flex flex-col gap-4 text-xl">
          {!editMode ? (
            <p>{user.firstname} {user.lastname}</p>
          ) : (
            <form className="flex gap-2" onSubmit={handleSave}>
              <input
                type="text"
                name="firstname"
                value={form.firstname}
                onChange={handleChange}
                className="border rounded px-2 py-1 w-28"
                required
                placeholder="ชื่อ"
              />
              <input
                type="text"
                name="lastname"
                value={form.lastname}
                onChange={handleChange}
                className="border rounded px-2 py-1 w-32"
                required
                placeholder="นามสกุล"
              />
            </form>
          )}
          <p>{user.email}</p>
          <p>••••••••</p>
          <p>{user.phone}</p>
        </div>
      </div>
      <div className="mt-6 flex flex-col gap-8 text-xl">
        <div className="flex flex-row gap-20">
          <div>
            <p className="text-primary font-bold">ที่อยู่จัดส่งสินค้า</p>
          </div>
          <div className="flex flex-col gap-2">
            {user.address ? (
              <>
                {user.address.street && <p>{user.address.street}</p>}
                {user.address.additional_address && <p>{user.address.additional_address}</p>}
                <p>
                  {[user.address.sub_district, user.address.district, user.address.province, user.address.postal_code, user.address.country]
                    .filter(Boolean)
                    .join(' ')}
                </p>
              </>
            ) : (
              <p>-</p>
            )}
          </div>
        </div>
        <div className="flex flex-row gap-20">
          <div>
            <p className="text-primary font-bold">เชื่อมต่อบัญชี</p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-4 items-center">
              <FcGoogle className="my-auto" />
              <p>Google <span className="text-gray-400 text-base">(ยังไม่เชื่อมต่อ)</span></p>
            </div>
            <div className="flex flex-row gap-4 items-center">
              <FaFacebook className="my-auto text-blue-500" />
              <p>Facebook <span className="text-gray-400 text-base">(ยังไม่เชื่อมต่อ)</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
