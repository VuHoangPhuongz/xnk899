// Định nghĩa kiểu dữ liệu cho một sản phẩm
export type Product = {
  id: string;
  name: string;
  price: number | null; // Cho phép giá là null nếu chỉ có "Liên hệ"
  category: string;
  categorySlug: 'rem' | 'mgo' | 'panel' | 'keo' | 'ron';
  sku: string;
  images: string[];
  short_desc: string;
  description: string;
  specs: Record<string, string>;
};

// Mảng chứa tất cả sản phẩm
export const products: Product[] = [
  // --- Rèm/Màn ngăn cháy ---
  {
    id: 'rem-1-lop',
    name: 'Rèm/ màn ngăn cháy 1 lớp',
    price: 4500000,
    category: 'Rèm/Màn cuốn ngăn cháy',
    categorySlug: 'rem',
    sku: 'RNC-01',
    images: ['/anh/man-ngan-chay-1-lop-68a481b6e3c76.webp'],
    short_desc: 'Giải pháp PCCC hiệu quả, gọn nhẹ và thẩm mỹ cho các công trình hiện đại. Sản phẩm được làm từ vật liệu composite chống cháy cao cấp, có khả năng tự động sập xuống khi có tín hiệu báo cháy.',
    description: `<p>Rèm ngăn cháy 1 lớp được thiết kế để thay thế cho các giải pháp cửa chống cháy truyền thống ở những khu vực cần không gian mở và tính thẩm mỹ cao như sảnh trung tâm thương mại, lối thoát hiểm, khu vực sản xuất...</p><h4>Ưu điểm nổi bật:</h4><ul><li>Thiết kế gọn nhẹ, hiện đại, tiết kiệm diện tích.</li><li>Tự động hoạt động khi có hỏa hoạn, đảm bảo an toàn tối đa.</li><li>Vật liệu cao cấp, đã được kiểm định PCCC theo tiêu chuẩn Việt Nam.</li><li>Dễ dàng lắp đặt, bảo trì và bảo dưỡng.</li></ul>`,
    specs: {'Giới hạn chịu lửa': 'E 120 (chỉ ngăn lửa, không ngăn nhiệt)', 'Vật liệu': 'Vải thủy tinh phủ silicone/PU', 'Độ dày': '0.8mm - 2.0mm', 'Cơ chế hoạt động': 'Tự động, điều khiển bằng Motor và Hộp điều khiển trung tâm', 'Tiêu chuẩn': 'TCVN 9383:2012'}
  },
  {
    id: 'rem-ei-90',
    name: 'Rèm/ màn ngăn cháy EI 90 phút',
    price: 6650000,
    category: 'Rèm/Màn cuốn ngăn cháy',
    categorySlug: 'rem',
    sku: 'RNC-02',
    images: ['/anh/ie-90-68a481af219a7.webp'],
    short_desc: 'Sản phẩm rèm ngăn cháy cao cấp với giới hạn chịu lửa và cách nhiệt lên đến 90 phút, đáp ứng các tiêu chuẩn PCCC khắt khe nhất cho các công trình trọng điểm.',
    description: `<p>Rèm ngăn cháy EI 90 là giải pháp an toàn tối ưu cho các khu vực có nguy cơ cháy nổ cao. Với cấu tạo nhiều lớp vật liệu chống cháy và cách nhiệt, sản phẩm đảm bảo ngăn chặn lửa và nhiệt độ hiệu quả trong 90 phút, tạo thời gian vàng cho công tác sơ tán và chữa cháy.</p><h4>Ứng dụng:</h4><ul><li>Nhà xưởng sản xuất, kho chứa hàng hóa có giá trị cao.</li><li>Tầng hầm, bãi đậu xe của các tòa nhà chung cư, trung tâm thương mại.</li><li>Phòng máy, phòng kỹ thuật, khu vực chứa thiết bị quan trọng.</li></ul>`,
    specs: {'Giới hạn chịu lửa': 'EI 90 phút (ngăn lửa và cách nhiệt)', 'Vật liệu': 'Vải chống cháy đa lớp, bông gốm ceramic cách nhiệt', 'Độ dày': '3.0mm - 5.0mm', 'Cơ chế hoạt động': 'Tự động, điều khiển bằng Motor, có thể tích hợp UPS', 'Tiêu chuẩn': 'QCVN 06:2021/BXD'}
  },
  {
    id: 'rem-ei-60',
    name: 'Rèm/ màn ngăn cháy EI 60 phút',
    price: 5060000,
    category: 'Rèm/Màn cuốn ngăn cháy',
    categorySlug: 'rem',
    sku: 'RNC-03',
    images: ['/anh/ie 60 test.webp'],
    short_desc: 'Giải pháp cân bằng giữa chi phí và hiệu quả, cung cấp khả năng ngăn cháy và cách nhiệt trong 60 phút, phù hợp với đa số các công trình dân dụng và công nghiệp.',
    description: `<p>Rèm ngăn cháy EI 60 là lựa chọn phổ biến nhất hiện nay. Sản phẩm không chỉ đảm bảo các yêu cầu về PCCC mà còn có thiết kế hiện đại, dễ dàng lắp đặt và vận hành.</p>`,
    specs: {'Giới hạn chịu lửa': 'EI 60 phút (ngăn lửa và cách nhiệt)', 'Vật liệu': 'Vải thủy tinh phủ hợp chất chống cháy', 'Độ dày': '1.5mm - 2.5mm', 'Cơ chế hoạt động': 'Tự động, kết nối hệ thống báo cháy', 'Tiêu chuẩn': 'TCVN 9383:2012'}
  },
  // --- Tấm MGO ---
  {
    id: 'tam-mgo-10mm',
    name: 'Tấm Eron - MGO 10mm cách nhiệt',
    price: 350000,
    category: 'Tấm MGO chống cháy',
    categorySlug: 'mgo',
    sku: 'MGO-01',
    images: ['/anh/mgo-10mm-68a481b8947b4.webp'],
    short_desc: 'Tấm MGO (Magnesium Oxide) dày 10mm với khả năng chống cháy, cách âm, cách nhiệt và chống ẩm vượt trội, là vật liệu xanh cho xây dựng hiện đại.',
    description: `<p>Tấm MGO 10mm là vật liệu xây dựng thế hệ mới, không chứa amiăng, an toàn cho sức khỏe và thân thiện với môi trường.</p>`,
    specs: {'Độ dày': '10mm', 'Chất liệu': 'Magnesium Oxide (MGO)', 'Kích thước tiêu chuẩn': '1220mm x 2440mm', 'Chống cháy': 'Loại A1 (không cháy)'}
  },
  {
    id: 'tam-mgo-5mm',
    name: 'Tấm MGO-Eron chống cháy 5mm',
    price: 250000,
    category: 'Tấm MGO chống cháy',
    categorySlug: 'mgo',
    sku: 'MGO-02',
    images: ['/anh/mgo-eron-68a481b8ae6a0.webp'],
    short_desc: 'Phiên bản tấm MGO mỏng hơn, linh hoạt cho các ứng dụng ốp tường, trần, vách ngăn yêu cầu khả năng chống cháy nhưng cần tối ưu về trọng lượng.',
    description: `<p>Với độ dày chỉ 5mm, tấm MGO-Eron dễ dàng thi công, uốn cong, phù hợp cho nhiều thiết kế phức tạp.</p>`,
    specs: {'Độ dày': '5mm', 'Chất liệu': 'Magnesium Oxide (MGO)', 'Kích thước tiêu chuẩn': '1220mm x 2440mm', 'Chống cháy': 'Loại A1 (không cháy)'}
  },
  {
    id: 'tam-mgo-tong-hop',
    name: 'Tấm chống cháy MGO',
    price: null,
    category: 'Tấm MGO chống cháy',
    categorySlug: 'mgo',
    sku: 'MGO-03',
    images: ['/anh/tam-chong-chay-68a481c8a27e4.webp'],
    short_desc: 'Dòng sản phẩm tấm MGO đa dạng về độ dày và quy cách, đáp ứng mọi nhu cầu về giải pháp chống cháy cho công trình.',
    description: `<p>Cung cấp các loại tấm MGO với độ dày từ 3mm đến 20mm, phù hợp làm vách ngăn, sàn, trần chống cháy.</p>`,
    specs: {'Độ dày': 'Tùy chọn (3mm - 20mm)', 'Chất liệu': 'Magnesium Oxide (MGO)', 'Ứng dụng': 'Ốp tường, trần, sàn, vách ngăn', 'Chống cháy': 'Loại A1 (không cháy)'}
  },
  // --- Tấm Panel ---
  {
    id: 'panel-xop-10cm',
    name: 'PANEL LÕI XỐP THƯỜNG DÀY 10 CM',
    price: null,
    category: 'Tấm Panel chống cháy',
    categorySlug: 'panel',
    sku: 'PNL-01',
    images: ['/anh/panel-loi-xop-thuong-day-10-cm-300x300-68a481bc511d7.webp'],
    short_desc: 'Tấm panel EPS (lõi xốp) dày 10cm, giải pháp cách nhiệt, cách âm hiệu quả với chi phí hợp lý cho nhà xưởng, kho lạnh, phòng sạch.',
    description: `<p>Cấu tạo gồm 2 lớp tôn mạ màu và lớp xốp EPS ở giữa, giúp thi công nhanh chóng và tiết kiệm chi phí.</p>`,
    specs: {'Độ dày': '10 cm', 'Lõi': 'Xốp EPS (Expandable Polystyrene)', 'Tỷ trọng xốp': '10 - 16 kg/m³', 'Ứng dụng': 'Vách, trần nhà xưởng, kho lạnh'}
  },
  {
    id: 'panel-bong-khoang-100mm',
    name: 'PANEL LÕI BÔNG KHOÁNG DÀY 100 MM',
    price: null,
    category: 'Tấm Panel chống cháy',
    categorySlug: 'panel',
    sku: 'PNL-02',
    images: ['/anh/panel-loi-bong-khoang-day-100-mm-300x300-68a481bb9ce46.webp'],
    short_desc: 'Panel Rockwool (lõi bông khoáng) chống cháy vượt trội, là giải pháp tối ưu cho các công trình yêu cầu tiêu chuẩn PCCC cao.',
    description: `<p>Lõi bông khoáng có khả năng chống cháy lên đến 2 giờ, đồng thời cách âm và cách nhiệt hiệu quả.</p>`,
    specs: {'Độ dày': '100 mm', 'Lõi': 'Bông khoáng (Rockwool)', 'Tỷ trọng': '80 - 120 kg/m³', 'Chống cháy': 'Lên đến 2 giờ'}
  },
  {
    id: 'panel-mai-rockwool',
    name: 'PANEL MÁI LÕI BÔNG KHOÁNG (ROCKWOOL)',
    price: null,
    category: 'Tấm Panel chống cháy',
    categorySlug: 'panel',
    sku: 'PNL-03',
    images: ['/anh/panel-mai-loi-bong-khoang-rockwool-300x300-68a481bd0e7ab.webp'],
    short_desc: 'Loại panel chuyên dụng cho lợp mái, có tạo sóng giúp thoát nước tốt, kết hợp khả năng chống cháy, chống nóng và chống ồn ưu việt.',
    description: `<p>Thiết kế sóng tôn đặc biệt giúp tăng độ cứng và khả năng thoát nước cho mái nhà xưởng, nhà kho.</p>`,
    specs: {'Loại': 'Panel lợp mái', 'Lõi': 'Bông khoáng (Rockwool)', 'Số sóng': '3 sóng / 5 sóng', 'Chống cháy': 'Lên đến 2 giờ'}
  },
  // --- Keo Chống Cháy ---
  {
    id: 'keo-f200',
    name: 'Keo Silicone chống cháy Ssangkom Topseal F200',
    price: null,
    category: 'Keo chống cháy',
    categorySlug: 'keo',
    sku: 'KEO-01',
    images: ['/anh/keo-f200-68a481ae7cd20.webp'],
    short_desc: 'Keo silicone cao cấp gốc Acrylic, chuyên dụng để trám, bịt kín các khe hở, mối nối trong hệ thống PCCC, ngăn cháy lan hiệu quả.',
    description: `<p>Sản phẩm có khả năng bám dính tốt trên nhiều loại vật liệu xây dựng và chịu được nhiệt độ cao.</p>`,
    specs: {'Thương hiệu': 'Ssangkom Topseal', 'Mã sản phẩm': 'F200', 'Gốc': 'Acrylic', 'Ứng dụng': 'Trám khe hở, ống gió, vách ngăn'}
  },
  {
    id: 'keo-m1',
    name: 'Keo silicone chống cháy Fixacryl M1 Grey 300 ml',
    price: null,
    category: 'Keo chống cháy',
    categorySlug: 'keo',
    sku: 'KEO-02',
    images: ['/anh/keo-m1-68a481af49245.webp'],
    short_desc: 'Keo silicone chống cháy lan gốc Acrylic Polymer, đạt tiêu chuẩn M1 của Pháp về chống cháy.',
    description: `<p>Dùng để bịt kín các khe co giãn, mối nối tường, cửa chống cháy, đảm bảo tính toàn vẹn của kết cấu khi có hỏa hoạn.</p>`,
    specs: {'Thương hiệu': 'Fixacryl', 'Mã sản phẩm': 'M1', 'Màu sắc': 'Xám (Grey)', 'Dung tích': '300 ml'}
  },
  {
    id: 'keo-m1c',
    name: 'KEO SILICONE CHỐNG CHÁY LAN SELSIL M1C',
    price: null,
    category: 'Keo chống cháy',
    categorySlug: 'keo',
    sku: 'KEO-03',
    images: ['/anh/keo-m1c-68a481b03777f.webp'],
    short_desc: 'Keo trám gốc Acrylic có khả năng trương nở khi gặp nhiệt độ cao, tạo thành một lớp than hóa ngăn chặn lửa và khói hiệu quả.',
    description: `<p>Được sử dụng rộng rãi trong việc thi công các hệ thống PCCC cho tòa nhà cao tầng, nhà máy.</p>`,
    specs: {'Thương hiệu': 'Selsil', 'Mã sản phẩm': 'M1C', 'Tính năng': 'Trương nở khi gặp nhiệt', 'Đóng gói': 'Tuýp 310ml'}
  },
  // --- Ron Chống Cháy ---
  {
    id: 'ron-cua-thep',
    name: 'Ron chống cháy cửa thép',
    price: null,
    category: 'Ron chống cháy',
    categorySlug: 'ron',
    sku: 'RON-01',
    images: ['/anh/ron-chong-chay-cua-thep-300x300-68a481c75cc6f.webp'],
    short_desc: 'Ron (gioăng) cao su chuyên dụng cho cửa thép chống cháy, giúp làm kín khít giữa cánh và khung cửa, ngăn khói độc lan tỏa.',
    description: `<p>Ron cao su có độ đàn hồi tốt, chịu được nhiệt độ cao và không bị lão hóa theo thời gian.</p>`,
    specs: {'Vật liệu': 'Cao su EPDM', 'Ứng dụng': 'Lắp đặt trên khung cửa thép chống cháy', 'Tính năng': 'Ngăn khói, giảm chấn'}
  },
  {
    id: 'ron-thanh',
    name: 'Ron chống cháy thanh',
    price: null,
    category: 'Ron chống cháy',
    categorySlug: 'ron',
    sku: 'RON-02',
    images: ['/anh/ron-chong-chay-thanh-300x300-68a481c837eba.webp'],
    short_desc: 'Thanh ron (intumescent strip) có khả năng trương nở gấp nhiều lần thể tích ban đầu khi tiếp xúc nhiệt độ cao, bịt kín hoàn toàn khe hở cửa.',
    description: `<p>Thường được dán vào mép cánh cửa hoặc khung bao, là thành phần bắt buộc trong cửa chống cháy EI.</p>`,
    specs: {'Vật liệu': 'Graphite trương nở', 'Kích thước': '10x2mm, 20x2mm,...', 'Tính năng': 'Trương nở, ngăn lửa và khói'}
  },
  {
    id: 'ron-mem',
    name: 'Ron chống cháy mềm',
    price: null,
    category: 'Ron chống cháy',
    categorySlug: 'ron',
    sku: 'RON-03',
    images: ['/anh/ron-chong-chay-mem-300x300-68a481c7da4bc.webp'],
    short_desc: 'Loại ron dẻo, dễ dàng uốn lượn và lắp đặt cho các vị trí phức tạp, đảm bảo độ kín khít và khả năng ngăn cháy lan.',
    description: `<p>Giải pháp linh hoạt cho các loại cửa có hình dạng đặc biệt hoặc các khe hở không đồng đều.</p>`,
    specs: {'Vật liệu': 'Polymer chống cháy', 'Đóng gói': 'Cuộn', 'Tính năng': 'Linh hoạt, ngăn khói'}
  }
];

// Định nghĩa danh mục sản phẩm để sử dụng cho sidebar và lọc
export const categories = [
    { name: 'Tất cả sản phẩm', slug: 'all' },
    { name: 'Rèm/Màn cuốn ngăn cháy', slug: 'rem' },
    { name: 'Tấm MGO chống cháy', slug: 'mgo' },
    { name: 'Tấm Panel chống cháy', slug: 'panel' },
    { name: 'Keo chống cháy', slug: 'keo' },
    { name: 'Ron chống cháy', slug: 'ron' },
];