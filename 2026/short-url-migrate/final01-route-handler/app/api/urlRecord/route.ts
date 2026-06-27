import { STATUS_CODES } from 'node:http';
import * as v from 'valibot';

const UrlRecordCreateSchema = v.object({
  originURL: v.pipe(v.string(), v.nonEmpty(), v.url()),
});

export async function POST(request: Request) {
  const bodyObject = await request.json();

  const result = v.safeParse(UrlRecordCreateSchema, bodyObject);

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

  // TODO: get duplicated record, return existing record with 200 status code

  return Response.json(
    {
      statusCode: 201,
      message: STATUS_CODES[201],
      data: bodyObject,
    },
    {
      status: 201,
    },
  );
}
