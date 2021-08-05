exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      name: 'Heropy',
      age: 85,
      email: 'andy0812@naver.com'
    })
  }
}