
async function gatherResponse(response) {
  const { headers } = response
  const contentType = headers.get('Content-Type') || ''

  if (contentType.includes('application/json')) {
    return JSON.stringify(await response.json())
  } else if (contentType.includes('application/text')) {
    return await response.text()
  } else if (contentType.includes('text/html')) {
    return await response.text()
  } else {
    return await response.text()
  }
}

addEventListener('fetch', event => {
  const request = event.request
  const requestUrl = request.url
  const workerHost = (new URL(requestUrl)).hostname
  const evalyUrl = requestUrl.replace(workerHost, 'api.evaly.com.bd')

  const evalyRequest = new Request(evalyUrl, {
    body: request.body,
    headers: request.headers,
    method: request.method,
    redirect: request.redirect
  })

  return event.respondWith(handleRequest(evalyRequest))
})

async function handleRequest(request) {
  const response = await fetch(request)
  const results = await gatherResponse(response)
  const { headers } = response
  const newHeaders = new Headers()

  for (const header of headers.entries()) {
    newHeaders.set(header[0], header[1])
  }

  newHeaders.set('Access-Control-Allow-Origin', '*')
  newHeaders.set('Access-Control-Allow-Headers', '*')

  return new Response(results, { headers: newHeaders })
}
