const getDateString = () => {
  const today = new Date()
  const dateString = today.toLocaleString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return { dateString }
}

export default getDateString
