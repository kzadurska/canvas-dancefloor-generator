export default async function getFoo() {
  const myRequest = new Request('https://foo.com', {
    method: 'GET',
  });

  const response = await fetch(myRequest);

  return response.json();
}
