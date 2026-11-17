/* =========================================================
   DỮ LIỆU TRANG WEB — anh chỉ cần sửa tệp này.
   Sửa xong, tải tệp lên GitHub là trang tự cập nhật.
   Lưu ý: giữ nguyên dấu nháy ` ' và dấu phẩy giữa các mục.
   ========================================================= */

/* 1. THÔNG TIN PHÒNG KHÁM (hiện ở trang chủ và trên phiếu thu) */
window.SITE = {
     logo: "anh/profile.jpeg",
  cover: "anh/cover.jpeg",
  name: "BS. Hà Hiếu",
  sub: "Phẫu thuật tạo hình thẩm mỹ",
  doctor: "BS. Hà Hiếu",
  spec: "Bác sĩ Chuyên khoa · Tư vấn chuyên môn tạo hình thẩm mỹ",
  phone: "0336 891 053",        // ví dụ: "0336 891 053"
  zalo: "",         // ví dụ: "0336891053"
  address: "Thành phố Hồ Chí Minh",      // ví dụ: "Thành phố Hồ Chí Minh"
  hours: "9:00 – 21:00, Thứ 2 – Chủ nhật",        // ví dụ: "9:00 – 21:00, Thứ 2 – Chủ nhật"
  headline: "Thẩm mỹ an toàn, theo dõi từng buổi",
  intro: "Tư vấn và điều trị bởi bác sĩ Chuyên khoa. Mỗi khách hàng được thăm khám kỹ, giải thích rõ phác đồ và được hẹn tái khám đúng lịch."
};

/* 2. BẢNG GIÁ CÔNG KHAI (khách xem được — KHÔNG ghi giá vốn ở đây)
   Cách nhanh nhất: vào trang Tính tiền → Dịch vụ → bấm "Xuất bảng giá công khai",
   rồi dán đoạn mã nhận được vào thay cho phần bên dưới. */
window.PRICES = [
  {"group":"Da liễu","name":"Kem dưỡng HA Usolab","price":990000,"unit":"Hộp","note":""},
  {"group":"Laser","name":"Laser điều trị sắc tố","price":3500000,"unit":"Buổi","note":"Bao gồm: Nám, tàn nhang, thâm sạm da, bớt sắc tố,..."}
];

/* 3. BÀI VIẾT KIẾN THỨC
   Mỗi bài: id (viết liền, không dấu), title, topic, date (năm-tháng-ngày), summary, body.
   Trong body: "## " là tiêu đề mục, "- " là gạch đầu dòng, **chữ** là in đậm. */
window.ARTICLES = [
{
  id: "cham-soc-sau-tiem-filler",
  title: "Chăm sóc sau tiêm filler: những điều cần biết",
  topic: "Filler",
  date: "2026-11-17",
  summary: "Sưng nhẹ vài ngày là bình thường; dấu hiệu nào cần báo bác sĩ ngay.",
  body: `
Tiêm filler (chất làm đầy, thường là axit hyaluronic) là thủ thuật nhanh, nhưng chăm sóc đúng trong vài ngày đầu giúp kết quả đẹp và an toàn hơn.

## Trong 24–48 giờ đầu
- Sưng nhẹ, hơi đỏ hoặc bầm nhỏ tại chỗ tiêm là bình thường, thường giảm sau 2–5 ngày.
- Có thể chườm mát nhẹ 10–15 phút mỗi lần, bọc khăn sạch, không chườm đá trực tiếp lên da.
- Không xoa, nắn, ấn mạnh vùng tiêm trừ khi bác sĩ hướng dẫn.
- Hạn chế trang điểm vùng tiêm trong ngày đầu.

## Trong 1–2 tuần đầu
- Tránh xông hơi, tắm nước quá nóng, tập thể dục cường độ cao trong 2–3 ngày.
- Tránh rượu bia vì làm tăng sưng và bầm.
- Nằm ngửa, kê gối hơi cao vài đêm đầu nếu tiêm vùng mặt.
- Không làm thêm thủ thuật khác ở vùng tiêm (laser, massage mặt) khi chưa hỏi bác sĩ.

## Khi nào cần liên hệ bác sĩ ngay
- Đau tăng dần, không giảm mà nặng hơn theo giờ.
- Da vùng tiêm **trắng bệch, tím tái, lốm đốm** hoặc lạnh.
- Nhìn mờ, đau mắt, đau đầu dữ dội sau tiêm vùng mặt.
- Nổi mụn mủ, sưng nóng đỏ lan rộng hoặc sốt.

Đây là các dấu hiệu cần xử trí sớm. Hãy gọi cho phòng khám ngay, không chờ đến lịch tái khám.

## Tái khám
Bác sĩ thường hẹn kiểm tra sau khoảng 2 tuần để đánh giá độ cân đối và chỉnh sửa nếu cần.
`
},
{
  id: "cham-soc-sau-tiem-botox",
  title: "Sau tiêm botox cần lưu ý gì?",
  topic: "Botox",
  date: "2026-11-16",
  summary: "Bao lâu thì có tác dụng, nên tránh gì trong 24 giờ đầu và khi nào cần quay lại.",
  body: `
Botox (độc tố botulinum loại A) làm giãn tạm thời các cơ gây nếp nhăn động, hoặc thu gọn cơ như cơ cắn vùng hàm.

## Trong 4–6 giờ đầu
- Giữ tư thế đầu thẳng, **không nằm, không cúi đầu lâu**.
- Không xoa, day, massage vùng vừa tiêm.
- Không đội mũ, đeo băng đô ép chặt lên vùng tiêm.

## Trong 24 giờ đầu
- Tránh vận động mạnh, xông hơi, tắm nước nóng.
- Hạn chế rượu bia.
- Có thể rửa mặt nhẹ nhàng, trang điểm nhẹ sau vài giờ.

## Khi nào thấy hiệu quả
- Hiệu quả bắt đầu sau khoảng 3–7 ngày và rõ nhất sau khoảng 2 tuần.
- Thời gian duy trì thường 3–6 tháng, tùy cơ địa và vùng tiêm.
- Không nên tự tiêm bổ sung sớm. Hãy chờ tái khám sau 2 tuần để bác sĩ đánh giá.

## Khi nào cần liên hệ bác sĩ
- Sụp mí, lệch chân mày, nụ cười không đều kéo dài.
- Hiếm gặp nhưng cần đi khám ngay: **khó nuốt, khó nói, khó thở**, yếu cơ toàn thân.

## Ai không nên tiêm
Phụ nữ mang thai hoặc cho con bú, người có bệnh lý thần kinh cơ, người đang nhiễm trùng vùng tiêm. Hãy báo bác sĩ các thuốc đang dùng trước khi tiêm.
`
},
{
  id: "cham-soc-da-sau-laser",
  title: "Chăm sóc da sau laser điều trị nám, tàn nhang",
  topic: "Laser",
  date: "2026-11-15",
  summary: "Chống nắng và dưỡng ẩm đúng cách quyết định phần lớn hiệu quả của liệu trình laser.",
  body: `
Laser điều trị sắc tố cần nhiều buổi. Cách chăm sóc da giữa các buổi ảnh hưởng lớn đến kết quả và nguy cơ tăng sắc tố trở lại.

## Ngay sau buổi laser
- Da có thể đỏ, châm chích, hơi nóng trong vài giờ đến 1–2 ngày.
- Một số đốm sắc tố có thể sẫm màu hơn rồi bong vảy nhỏ sau vài ngày. **Không tự cạy, gãi.**
- Rửa mặt bằng nước mát và sữa rửa mặt dịu nhẹ.
- Dưỡng ẩm, phục hồi theo sản phẩm bác sĩ chỉ định.

## Chống nắng là bắt buộc
- Dùng kem chống nắng phổ rộng SPF 30–50 trở lên mỗi ngày, thoa lại sau 2–3 giờ khi ra ngoài.
- Kết hợp che chắn: mũ rộng vành, khẩu trang, kính.
- Hạn chế ra nắng gắt từ 10 giờ đến 15 giờ.

## Những điều nên tránh trong 5–7 ngày
- Sản phẩm lột tẩy mạnh: AHA/BHA nồng độ cao, retinoid, tẩy da chết hạt.
- Xông hơi, đắp mặt nạ nóng, massage mạnh.
- Tự ý dùng kem trộn hoặc sản phẩm không rõ nguồn gốc.

## Khi nào cần liên hệ bác sĩ
- Phồng rộp, chảy dịch, đau rát kéo dài.
- Vùng da sẫm màu lan rộng sau 2–3 tuần.

## Vì sao cần đủ liệu trình
Sắc tố thường giảm dần qua từng buổi. Đi đúng lịch hẹn và chống nắng đều đặn giúp kết quả ổn định lâu hơn.
`
},
{
  id: "cham-soc-sau-cat-mi",
  title: "Chăm sóc sau phẫu thuật cắt mí",
  topic: "Phẫu thuật mí",
  date: "2026-11-14",
  summary: "Sưng bầm bao lâu thì hết, chườm lạnh thế nào và dấu hiệu cần quay lại ngay.",
  body: `
Sau cắt mí, mí mắt sưng và bầm là phản ứng bình thường. Chăm sóc đúng giúp giảm sưng nhanh, sẹo đẹp và hạn chế biến chứng.

## 48 giờ đầu
- **Chườm lạnh** quanh mắt 10–15 phút mỗi lần, nhiều lần trong ngày. Bọc túi lạnh bằng khăn sạch, không để ướt vết mổ.
- Nằm kê cao đầu bằng 2 gối, kể cả khi ngủ.
- Không dụi mắt, không cúi đầu lâu, không mang vác nặng.

## Vệ sinh vết mổ
- Lau nhẹ đường mổ bằng nước muối sinh lý và bông sạch theo hướng dẫn.
- Dùng thuốc và thuốc mỡ đúng đơn bác sĩ kê.
- Không trang điểm mắt, không đeo kính áp tròng cho đến khi bác sĩ cho phép.

## Mốc hồi phục thường gặp
- Cắt chỉ sau khoảng 5–7 ngày.
- Sưng bầm giảm rõ sau 1–2 tuần.
- Nếp mí mềm và tự nhiên dần trong 1–3 tháng.

## Nên tránh
- Rượu bia, thuốc lá trong ít nhất 2 tuần, vì làm vết thương lâu lành.
- Xông hơi, bơi lội, tập nặng trong 2–3 tuần.
- Phơi nắng trực tiếp lên đường mổ. Đeo kính râm khi ra ngoài.

## Khi nào cần liên hệ bác sĩ ngay
- Đau tăng nhiều, mí sưng căng cứng đột ngột, nhất là một bên.
- **Giảm thị lực**, nhìn mờ, đau nhức trong mắt.
- Chảy máu không cầm, vết mổ sưng nóng đỏ, chảy mủ hoặc sốt.
`
},
{
  id: "cham-soc-sau-nang-mui",
  title: "Chăm sóc sau nâng mũi",
  topic: "Nâng mũi",
  date: "2026-11-13",
  summary: "Những việc nên làm và cần tránh trong 1–6 tuần đầu để dáng mũi ổn định.",
  body: `
Giai đoạn đầu sau nâng mũi, mô còn mềm và dễ tổn thương. Chăm sóc đúng giúp dáng mũi ổn định và giảm nguy cơ biến chứng.

## Tuần đầu tiên
- Nằm ngửa, kê cao đầu. Không nằm nghiêng đè lên mũi.
- Chườm lạnh nhẹ quanh vùng mắt, má trong 48 giờ đầu nếu bác sĩ hướng dẫn.
- Vệ sinh vết mổ và lỗ mũi bằng nước muối sinh lý, dùng thuốc đúng đơn.
- **Không xì mũi mạnh**, hắt hơi nên há miệng.
- Cắt chỉ thường sau khoảng 5–7 ngày.

## 4–6 tuần đầu
- Tránh va chạm vào mũi, không chơi thể thao đối kháng.
- Không đeo kính gọng đè lên sống mũi.
- Không tự nắn, bóp hay chỉnh dáng mũi.
- Hạn chế xông hơi, bơi lội.

## Ăn uống
- Không cần kiêng khem quá mức. Ăn đủ chất, nhiều đạm và rau quả giúp vết thương lành tốt.
- Quan trọng nhất: **không hút thuốc lá** và hạn chế rượu bia, vì làm giảm tưới máu nuôi da mũi.

## Khi nào cần liên hệ bác sĩ ngay
- Sốt, mũi sưng nóng đỏ tăng dần, chảy dịch hoặc mủ.
- Da đầu mũi đỏ, mỏng, đau hoặc lộ bóng sáng.
- Mũi lệch rõ hoặc bị va chạm mạnh.

## Tái khám
Đi tái khám đúng hẹn giúp bác sĩ phát hiện sớm bất thường. Dáng mũi thường ổn định sau khoảng 3–6 tháng.
`
},
{
  id: "chong-nang-dung-cach",
  title: "Chống nắng đúng cách: bước quan trọng nhất của mọi liệu trình da",
  topic: "Chăm sóc da",
  date: "2026-11-12",
  summary: "Thoa bao nhiêu là đủ, chọn loại nào và vì sao người bị nám nên dùng kem có màu.",
  body: `
Tia UV và cả ánh sáng nhìn thấy đều làm nám, tàn nhang đậm hơn và làm da lão hóa sớm. Chống nắng đúng cách giúp các liệu trình điều trị đạt hiệu quả và giữ kết quả lâu.

## Chọn kem chống nắng
- Ghi **phổ rộng** (broad spectrum), chống được cả UVA và UVB.
- SPF 30 trở lên. Ở ngoài trời nhiều thì chọn SPF 50.
- Người bị nám nên ưu tiên kem **có màu** (chứa oxit sắt), giúp chắn thêm ánh sáng nhìn thấy.

## Thoa bao nhiêu là đủ
- Cho mặt và cổ: khoảng lượng kem dài bằng 2 đốt ngón tay.
- Thoa trước khi ra ngoài khoảng 15 phút.
- Thoa lại sau mỗi 2–3 giờ, sau khi ra mồ hôi nhiều hoặc đi bơi.

## Không chỉ có kem
- Mũ rộng vành, khẩu trang, kính râm, áo chống nắng.
- Tránh nắng gắt từ 10 giờ đến 15 giờ.
- Ở trong nhà gần cửa kính vẫn nên dùng kem chống nắng.

## Sai lầm thường gặp
- Thoa quá mỏng, chỉ thoa một lần buổi sáng.
- Chỉ chống nắng khi trời nắng to. Trời râm vẫn có tia UV.
- Nghĩ rằng kem nền có SPF là đủ.
`
}
];
