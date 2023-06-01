import { API_URL } from "@/config"



export default function handler(req, res) {
  const api = JSON.stringify(`${API_URL}api/photos`)
  res.status(200).json({ api })
}
