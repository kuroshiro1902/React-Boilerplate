export function formatDate(date: Date | number) {
  if (typeof date === 'number') {
    date = new Date(date);
  }

  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Tháng bắt đầu từ 0
  const year = date.getFullYear();

  // Trả về chuỗi đã được định dạng
  return `${day}/${month}/${year}`;
}

export function formatDateTime(date: Date | number) {
  if (typeof date === 'number') {
    date = new Date(date);
  }
  // Lấy thông tin về giờ, phút, giây, ngày, tháng, năm từ đối tượng Date
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const seconds = date.getSeconds().toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Tháng bắt đầu từ 0
  const year = date.getFullYear();

  // Trả về chuỗi đã được định dạng
  return `${hours}:${minutes}:${seconds} ${day}/${month}/${year}`;
}
