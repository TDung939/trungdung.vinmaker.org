import axios from "axios"
import useSWR from "swr"

const fetcher = url => axios.get(url).then(res => res.data)

export default function useGithub () {
    const { data, error } = useSWR(`/api/github`, fetcher)
  
    return {
      github: data,
      isLoading: !error && !data,
      isError: error
    }
  }
  