export default function ({ $axios }) {
  $axios.onRequest((config) => {
    config.headers.common.Authorization = `token ${process.env.GIT_TOKEN}`
  })
}
