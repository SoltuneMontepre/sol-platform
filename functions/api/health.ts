function fetch(request: Request): Response {
  return new Response("OK", { status: 200 });
}

export default { fetch };
