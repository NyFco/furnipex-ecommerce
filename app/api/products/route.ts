import { NextApiRequest } from "next";
import data from "./data.json";

export async function GET(req: NextApiRequest) {
  const { searchParams } = new URL(req.url as any);
  const id = searchParams.get("id");

  if (id) {
    const productId = typeof id === "string" ? parseInt(id, 10) : id;
    const foundItem = data.find((item) => item.id === productId);

    if (!foundItem) {
      return Response.json({}, { status: 404 });
    }

    return Response.json([foundItem]);
  }

  return Response.json(data);
}
