import axios from "axios"
import useSWR from "swr"

const fetcher = url => axios.get(url).then(res => res.data)

export default function usePost (id) {
    const { data, error } = useSWR(`/api/posts/${id}`, fetcher)
  
    return {
      post: data,
      isLoading: !error && !data,
      isError: error
    }
  }
  