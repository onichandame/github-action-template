import { exec } from "@actions/exec"
;(async () => {
  exec(`echo`, [`hi`])
})()
