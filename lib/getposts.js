import axios from "axios"
import useSWR from "swr"

const fetcher = url => axios.get(url).then(res => res.data)

export default function usePosts () {
    const { data, error } = useSWR(`/api/posts`, fetcher, { refreshInterval: 500 })
  
    return {
      posts: data,
      isLoading: !error && !data,
      isError: error
    }
  }
  