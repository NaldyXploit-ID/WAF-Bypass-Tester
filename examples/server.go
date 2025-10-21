package main
import (
  "encoding/json"
  "log"
  "net/http"
  "time"
)
type Resp struct { Project string `json:"project"` Time string `json:"time"` }
func handler(w http.ResponseWriter, r *http.Request) {
  w.Header().Set("Content-Type", "application/json")
  resp := Resp{Project: "`echo ${REPO_NAME}`", Time: time.Now().Format(time.RFC3339)}
  json.NewEncoder(w).Encode(resp)
}
func main(){
  http.HandleFunc("/", handler)
  log.Println("Listening :8080")
  log.Fatal(http.ListenAndServe(":8080", nil))
}
