import data from "../data.json";

export async function GET(req: Request, { params }: any) {
  const { id } = params;

  const product = data.find((item) => item.id.toString() === id);

  return Response.json(product);
}
