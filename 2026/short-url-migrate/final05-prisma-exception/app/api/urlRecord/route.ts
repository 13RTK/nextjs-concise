import prisma from '@/app/_utils/prisma';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/client';
import { STATUS_CODES } from 'node:http';
import * as v from 'valibot';

const UrlRecordCreateSchema = v.object({
  originURL: v.pipe(v.string(), v.nonEmpty(), v.url()),
  urlCode: v.optional(v.pipe(v.string(), v.nonEmpty())),
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
  const urlRecordCreate = v.parse(UrlRecordCreateSchema, bodyObject);

  // Check if url code is provided
  if (urlRecordCreate.urlCode) {
    // Try to create url record with custom url code
    return await createNewUrlRecord(
      urlRecordCreate.originURL,
      urlRecordCreate.urlCode,
    );
  }

  // Generate new url code and create new url record
  let newUrlCode;
  while (true) {
    newUrlCode = crypto.randomUUID().slice(0, 6);

    const urlRecord = await prisma.urlRecord.findFirst({
      where: {
        urlCode: newUrlCode,
      },
    });

    if (!urlRecord) {
      break;
    }
  }

  return await createNewUrlRecord(urlRecordCreate.originURL, newUrlCode);
}

async function createNewUrlRecord(originURL: string, urlCode: string) {
  try {
    const newUrlRecord = await prisma.urlRecord.create({
      data: {
        originURL,
        shortURL: `${process.env.PROJECT_URL}/${urlCode}`,
        urlCode,
      },
    });

    return Response.json(
      {
        statusCode: 201,
        message: STATUS_CODES[201],
        data: newUrlRecord,
      },
      {
        status: 201,
      },
    );
  } catch (error) {
    if (error instanceof PrismaClientKnownRequestError) {
      // The .code property can be accessed in a type-safe manner
      if (error.code === 'P2002') {
        return Response.json(
          {
            statusCode: 400,
            message:
              STATUS_CODES[400] +
              ': ' +
              'Unique constraint failed on the urlCode',
          },
          {
            status: 400,
          },
        );
      }
    }
  }
}
