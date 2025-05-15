// ใช้ Cloudinary โดยตรงผ่าน API แทนการใช้ SDK

// ข้อมูลการตั้งค่า Cloudinary
const CLOUD_NAME = 'dvaarfswp';
const UPLOAD_PRESET = 'pickled_cat';

/**
 * อัพโหลดไฟล์ไปยัง Cloudinary
 * @param {File} file - ไฟล์ที่ต้องการอัพโหลด
 * @returns {Promise} - คืนค่า promise ที่มีข้อมูลการอัพโหลด
 */
export const uploadToCloudinary = (file) => {
  return new Promise((resolve, reject) => {
    // สร้าง FormData
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', UPLOAD_PRESET);

    // ใช้ Cloudinary Upload API
    fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`, {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      if (data.secure_url) {
        resolve({
          url: data.secure_url,
          public_id: data.public_id
        });
      } else {
        reject(new Error('อัพโหลดไม่สำเร็จ'));
      }
    })
    .catch(error => {
      reject(error);
    });
  });
};

/**
 * ลบไฟล์จาก Cloudinary (ต้องทำผ่าน backend ด้วย API key และ secret)
 * หมายเหตุ: ฟังก์ชันนี้จะไม่ทำงานในฝั่ง client โดยตรง ควรสร้าง API endpoint ในฝั่ง server
 * @param {string} publicId - public_id ของไฟล์ที่ต้องการลบ
 * @returns {Promise} - คืนค่า promise ที่มีข้อมูลการลบ
 */
export const deleteFromCloudinary = (/* publicId */) => {
  console.warn('deleteFromCloudinary ไม่สามารถเรียกใช้โดยตรงในฝั่ง client ได้ ต้องทำผ่าน API endpoint ในฝั่ง server');
  
  // ตัวอย่างวิธีเรียกใช้ API ผ่าน backend
  return new Promise((resolve, reject) => {
    // ให้สร้าง API endpoint สำหรับลบไฟล์ แล้วเรียกใช้ endpoint นั้นแทน
    // เช่น fetch('/api/cloudinary/delete', { method: 'POST', body: JSON.stringify({ publicId }) })
    reject(new Error('ฟังก์ชันนี้ไม่สามารถใช้ได้โดยตรงในฝั่ง client'));
  });
}; 