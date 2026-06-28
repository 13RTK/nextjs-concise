import { STATUS_CODES } from 'node:http';
import * as v from 'valibot';

const UrlCodeSchema = v.object({
  urlCode: v.pipe(v.string(), v.nonEmpty()),
});

type UrlCode = v.InferInput<typeof UrlCodeSchema>;

export async function GET(
  _request: Request,
  { params }: { params: Promise<UrlCode> },
) {
  const paramsObject = await params;

  const result = v.safeParse(UrlCodeSchema, paramsObject);
  // Type miss match, throw error
  if (!result.success) {
    return Response.json(
      {
        statusCode: 400,
        message: STATUS_CODES[400] + ': ' + v.summarize(result.issues),
      },
      {
        status: 400,
      },
    );
  }
  // TODO: can't find matched record, return not found with 404 status code

  return Response.json(
    {
      statusCode: 200,
      message: STATUS_CODES[200],
      data: paramsObject,
    },
    {
      status: 200,
    },
  );
}
