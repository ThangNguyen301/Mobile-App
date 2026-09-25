export interface Medicine {
  id: number;
  maThuoc: string;
  tenThuoc: string;
  hoatChatChinh: string;
  hamLuong?: string;
  hangSanXuat: string;
  hanSuDung: string;
  gia: number;
}

const API_URL = "http://localhost:3000/medicines";

// GET
export async function getAllMedicines(): Promise<Medicine[]> {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Khong tai duoc danh sach thuoc");
  }

  const result: Medicine[] = await response.json();

  return result;
}

// POST
export async function createMedicine(
  medicine: Omit<Medicine, "id">
): Promise<Medicine> {
  const response = await fetch(API_URL, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(medicine),
  });

  if (!response.ok) {
    throw new Error("Khong them duoc thuoc");
  }

  const result = await response.json();

  return result.data;
}