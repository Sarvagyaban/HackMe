let a = [
        "Initializing Hack tool...",
  "Bypass firewall",
  "Decrypt passwords",
  "Exploit vulnerabilities",
"Inject malware",
        "Connecting to Facebook...",
        "Connecting to server 1...",
        "Connection failed. Retrying...",
        "Connecting to server 2",
        "Connected Successfully...",
  "Crack encryption",
"Phish credentials",
          "Username ...",

        "Trying Brute Force...",
  "Spoof IP addresses",
"Launch DDoS",
        "2000K passwords tried...",
  "Remote access",
        "Match found...",
  "Data breach",
        "Accessing Account...",
        "Hack Successful...",
  "Hacked..."
]

const sleep = async (seconds) => {
        return new Promise((resolve, reject) => {
                setTimeout(() => { resolve(true) }, seconds * 1000)
        })
}

const showHack = async (message) => {
        await sleep(2)
        text.innerHTML = message + "<br>"
}

(async () => {
        for (let i = 0; i < a.length; i++) {
                await showHack(a[i])
        }
})()
