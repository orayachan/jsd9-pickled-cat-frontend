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
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.secure_url) {
          resolve({
            url: data.secure_url,
            public_id: data.public_id,
          });
        } else {
          reject(new Error('อัพโหลดไม่สำเร็จ'));
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};
