import useGetNews from 'hooks/useGetNews'

const News = () => {
  const NewsFromContentful = useGetNews()

  return (
    <div>
      <>{console.log(NewsFromContentful?.data)}</>
      this is the news page
    </div>
  )
}

export default News
