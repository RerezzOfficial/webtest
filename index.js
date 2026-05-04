const express = require("express")
const app = express()

const PORT = process.env.PORT || 3000

app.get("/ads.txt", (req, res) => {
  res.type("text/plain")
  res.send("google.com, pub-4397021684170784, DIRECT, f08c47fec0942fa0")
})

app.get("/", (req, res) => {
  res.send(`
<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="google-adsense-account" content="ca-pub-4397021684170784">
<title>Im Rerezz</title>
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4397021684170784" crossorigin="anonymous"></script>
<style>
body{margin:0;font-family:Arial,sans-serif;background:#0f172a;color:#fff}
header{padding:20px;text-align:center;background:#111827}
.container{padding:20px;max-width:900px;margin:auto}
.card{background:#111827;padding:15px;margin:10px 0;border-radius:10px}
.adbox{margin:20px 0;padding:10px;border:1px solid #334155;border-radius:10px;text-align:center}
</style>
</head>
<body>
<header>
<h1>Im Rerezz</h1>
</header>
<div class="container">
<div class="card">
<h2>Welcome</h2>
<p>Website Node.js Express siap pakai dengan AdSense</p>
</div>

<div class="adbox">
<ins class="adsbygoogle"
 style="display:block"
 data-ad-client="ca-pub-4397021684170784"
 data-ad-slot="1234567890"
 data-ad-format="auto"
 data-full-width-responsive="true"></ins>
<script>
(adsbygoogle = window.adsbygoogle || []).push({})
</script>
</div>

<div class="card">
<h2>Konten</h2>
<p>Isi website kamu di sini</p>
</div>
</div>
</body>
</html>
`)
})

app.listen(PORT, () => {
  console.log("server jalan di port " + PORT)
})
