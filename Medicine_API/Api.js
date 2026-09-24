
// lenh chay : node Api.js
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// =========================
// DỮ LIỆU 5 LOẠI THUỐC
// =========================

let medicines = [
  {
    id: 1,
    maThuoc: "T001",
    tenThuoc: "Paracetamol",
    hoatChatChinh: "Paracetamol",
    hamLuong: "500mg",
    hangSanXuat: "DHG Pharma",
    hanSuDung: "2027-12-31",
    gia: 1500
  },
  {
    id: 2,
    maThuoc: "T002",
    tenThuoc: "Amoxicillin",
    hoatChatChinh: "Amoxicillin",
    hamLuong: "500mg",
    hangSanXuat: "Imexpharm",
    hanSuDung: "2027-10-30",
    gia: 2500
  },
  {
    id: 3,
    maThuoc: "T003",
    tenThuoc: "Vitamin C",
    hoatChatChinh: "Ascorbic Acid",
    hamLuong: "500mg",
    hangSanXuat: "Traphaco",
    hanSuDung: "2028-05-20",
    gia: 1200
  },
  {
    id: 4,
    maThuoc: "T004",
    tenThuoc: "Omeprazole",
    hoatChatChinh: "Omeprazole",
    hamLuong: "20mg",
    hangSanXuat: "Mediplantex",
    hanSuDung: "2027-08-15",
    gia: 3000
  },
  {
    id: 5,
    maThuoc: "T005",
    tenThuoc: "Cetirizine",
    hoatChatChinh: "Cetirizine",
    hamLuong: "10mg",
    hangSanXuat: "Pymepharco",
    hanSuDung: "2028-01-10",
    gia: 1800
  }
];

// =========================
// GET - LẤY TẤT CẢ THUỐC
// =========================

app.get("/medicines", (req, res) => {
  res.json(medicines);
});

// =========================
// GET - LẤY 1 THUỐC THEO ID
// =========================

app.get("/medicines/:id", (req, res) => {
  const id = Number(req.params.id);

  const medicine = medicines.find((item) => item.id === id);

  if (!medicine) {
    return res.status(404).json({
      message: "Không tìm thấy thuốc"
    });
  }

  res.json(medicine);
});

// =========================
// POST - THÊM THUỐC
// =========================

app.post("/medicines", (req, res) => {
  const newMedicine = {
    id: medicines.length > 0
      ? medicines[medicines.length - 1].id + 1
      : 1,

    maThuoc: req.body.maThuoc,
    tenThuoc: req.body.tenThuoc,
    hoatChatChinh: req.body.hoatChatChinh,
    hamLuong: req.body.hamLuong,
    hangSanXuat: req.body.hangSanXuat,
    hanSuDung: req.body.hanSuDung,
    gia: req.body.gia
  };

  medicines.push(newMedicine);

  res.status(201).json({
    message: "Thêm thuốc thành công",
    data: newMedicine
  });
});

// =========================
// PUT - CẬP NHẬT THUỐC
// =========================

app.put("/medicines/:id", (req, res) => {
  const id = Number(req.params.id);

  const index = medicines.findIndex((item) => item.id === id);

  if (index === -1) {
    return res.status(404).json({
      message: "Không tìm thấy thuốc"
    });
  }

  medicines[index] = {
    id: id,
    maThuoc: req.body.maThuoc,
    tenThuoc: req.body.tenThuoc,
    hoatChatChinh: req.body.hoatChatChinh,
    hamLuong: req.body.hamLuong,
    hangSanXuat: req.body.hangSanXuat,
    hanSuDung: req.body.hanSuDung,
    gia: req.body.gia
  };

  res.json({
    message: "Cập nhật thuốc thành công",
    data: medicines[index]
  });
});

// =========================
// DELETE - XÓA THUỐC
// =========================

app.delete("/medicines/:id", (req, res) => {
  const id = Number(req.params.id);

  const index = medicines.findIndex((item) => item.id === id);

  if (index === -1) {
    return res.status(404).json({
      message: "Không tìm thấy thuốc"
    });
  }

  const deletedMedicine = medicines.splice(index, 1);

  res.json({
    message: "Xóa thuốc thành công",
    data: deletedMedicine[0]
  });
});

// =========================
// START SERVER
// =========================

app.listen(PORT, () => {
  console.log(`Server đang chạy tại http://localhost:${PORT}`);
});



