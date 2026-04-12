const errorHandling: PagesFunction = async (context) => {
  try {
    return await context.next();
  } catch (err: any) {
    return new Response(`${err.message}\n${err.stack}`, { status: 500 });
  }
};

export const onRequest: PagesFunction[] = [errorHandling];
