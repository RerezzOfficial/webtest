// index.js
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static('public'));

const ads.txt = `google.com, pub-1234567890123456, DIRECT, f08c47fec0942fa0`;

app.get('/ads.txt', (req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    res.send(ads.txt);
});

app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="id">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Website dengan Iklan - Contoh</title>
            <style>
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }
                body {
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    min-height: 100vh;
                }
                .container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 20px;
                }
                .header {
                    background: white;
                    border-radius: 15px;
                    padding: 30px;
                    margin-bottom: 30px;
                    box-shadow: 0 10px 40px rgba(0,0,0,0.1);
                    text-align: center;
                }
                .header h1 {
                    color: #333;
                    font-size: 2.5em;
                    margin-bottom: 10px;
                }
                .header p {
                    color: #666;
                    font-size: 1.1em;
                }
                .content {
                    display: grid;
                    grid-template-columns: 2fr 1fr;
                    gap: 30px;
                }
                .main-content {
                    background: white;
                    border-radius: 15px;
                    padding: 30px;
                    box-shadow: 0 10px 40px rgba(0,0,0,0.1);
                }
                .sidebar {
                    background: white;
                    border-radius: 15px;
                    padding: 30px;
                    box-shadow: 0 10px 40px rgba(0,0,0,0.1);
                }
                .article {
                    margin-bottom: 30px;
                    padding-bottom: 30px;
                    border-bottom: 1px solid #eee;
                }
                .article h2 {
                    color: #667eea;
                    margin-bottom: 15px;
                }
                .article p {
                    color: #555;
                    line-height: 1.6;
                    margin-bottom: 15px;
                }
                .ad-container {
                    background: #f8f9fa;
                    border: 1px solid #dee2e6;
                    border-radius: 8px;
                    padding: 20px;
                    margin: 20px 0;
                    text-align: center;
                    min-height: 250px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .ad-label {
                    font-size: 12px;
                    color: #999;
                    margin-bottom: 10px;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                }
                .sidebar-ad {
                    margin: 20px 0;
                }
                .footer {
                    background: white;
                    border-radius: 15px;
                    padding: 30px;
                    margin-top: 30px;
                    text-align: center;
                    box-shadow: 0 10px 40px rgba(0,0,0,0.1);
                }
                .footer p {
                    color: #666;
                }
                @media (max-width: 768px) {
                    .content {
                        grid-template-columns: 1fr;
                    }
                }
                .btn {
                    display: inline-block;
                    background: #667eea;
                    color: white;
                    padding: 10px 20px;
                    border-radius: 8px;
                    text-decoration: none;
                    margin-top: 10px;
                }
            </style>
            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1234567890123456" crossorigin="anonymous"></script>
            <script>
                window.adsbygoogle = window.adsbygoogle || [];
            </script>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h1>🚀 Website Sukses dengan Iklan</h1>
                    <p>Konten berkualitas + Monetisasi iklan = Penghasilan pasif</p>
                </div>

                <div class="content">
                    <div class="main-content">
                        <div class="article">
                            <h2>Tips Sukses Monetisasi Website</h2>
                            <p>Memasang iklan di website adalah cara terbaik untuk menghasilkan pendapatan pasif. Dengan konten yang berkualitas dan pengunjung yang tepat, iklan bisa menjadi sumber penghasilan yang konsisten. Pastikan kamu menggunakan Google AdSense atau jaringan iklan terpercaya lainnya untuk hasil maksimal.</p>
                            <p>Kunci sukses monetisasi website adalah fokus pada pengalaman pengguna. Jangan terlalu banyak memasang iklan karena bisa mengganggu kenyamanan pembaca. Posisikan iklan di tempat strategis seperti sidebar, di tengah artikel, atau setelah konten utama.</p>
                            <a href="#" class="btn">Baca Selengkapnya →</a>
                        </div>

                        <div class="ad-container">
                            <div>
                                <div class="ad-label">- Iklan -</div>
                                <ins class="adsbygoogle"
                                    style="display:block"
                                    data-ad-client="ca-pub-1234567890123456"
                                    data-ad-slot="1234567890"
                                    data-ad-format="auto"
                                    data-full-width-responsive="true"></ins>
                            </div>
                        </div>

                        <div class="article">
                            <h2>Strategi Konten yang Menghasilkan</h2>
                            <p>Buat konten yang benar-benar bermanfaat bagi audiensmu. Artikel tutorial, review produk, berita terkini, atau tips sehari-hari selalu memiliki peminat yang banyak. Gunakan kata kunci yang tepat agar website-mu mudah ditemukan di mesin pencari seperti Google.</p>
                            <p>Konsistensi adalah kunci. Update website secara rutin minimal 2-3 kali seminggu. Semakin banyak konten berkualitas, semakin banyak halaman yang bisa menampilkan iklan, dan semakin besar potensi penghasilanmu.</p>
                            <a href="#" class="btn">Pelajari Strategi →</a>
                        </div>

                        <div class="ad-container">
                            <div>
                                <div class="ad-label">- Iklan -</div>
                                <ins class="adsbygoogle"
                                    style="display:block"
                                    data-ad-client="ca-pub-1234567890123456"
                                    data-ad-slot="9876543210"
                                    data-ad-format="auto"
                                    data-full-width-responsive="true"></ins>
                            </div>
                        </div>

                        <div class="article">
                            <h2>Optimasi SEO untuk Traffic Maksimal</h2>
                            <p>SEO (Search Engine Optimization) adalah senjata utama untuk mendatangkan pengunjung organik. Gunakan judul yang menarik, meta deskripsi yang informatif, dan struktur heading yang rapi. Jangan lupa optimasi kecepatan loading website karena ini faktor penting di mata Google.</p>
                            <p>Bangun backlink dari website berkualitas, gunakan internal linking yang baik, dan pastikan website-mu mobile-friendly. Dengan SEO yang tepat, website-mu bisa muncul di halaman pertama Google dan mendapatkan ribuan pengunjung setiap hari.</p>
                            <a href="#" class="btn">Optimasi SEO Sekarang →</a>
                        </div>
                    </div>

                    <div class="sidebar">
                        <h3 style="color:#667eea; margin-bottom:20px;">📊 Statistik Website</h3>
                        <p style="margin-bottom:15px; color:#666;">✓ 10,000+ Pengunjung/bulan</p>
                        <p style="margin-bottom:15px; color:#666;">✓ 50+ Artikel berkualitas</p>
                        <p style="margin-bottom:25px; color:#666;">✓ 4.5/5 Rating pengguna</p>

                        <div class="sidebar-ad ad-container">
                            <div>
                                <div class="ad-label">- Iklan Sidebar -</div>
                                <ins class="adsbygoogle"
                                    style="display:block"
                                    data-ad-client="ca-pub-1234567890123456"
                                    data-ad-slot="5555555555"
                                    data-ad-format="rectangle"
                                    data-full-width-responsive="true"></ins>
                            </div>
                        </div>

                        <h3 style="color:#667eea; margin:25px 0 15px 0;">🔥 Artikel Populer</h3>
                        <ul style="list-style:none;">
                            <li style="margin-bottom:12px;">• Cara Cepat Diterima AdSense</li>
                            <li style="margin-bottom:12px;">• 10 Plugin WordPress Wajib</li>
                            <li style="margin-bottom:12px;">• Panduan SEO untuk Pemula</li>
                            <li style="margin-bottom:12px;">• Monetisasi Blog Tanpa Modal</li>
                            <li style="margin-bottom:12px;">• Tips Meningkatkan CTR Iklan</li>
                        </ul>

                        <div class="sidebar-ad ad-container" style="margin-top:25px;">
                            <div>
                                <div class="ad-label">- Iklan -</div>
                                <ins class="adsbygoogle"
                                    style="display:block"
                                    data-ad-client="ca-pub-1234567890123456"
                                    data-ad-slot="7777777777"
                                    data-ad-format="rectangle"></ins>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="footer">
                    <p>© 2024 Website Monetisasi Sukses | <a href="#" style="color:#667eea;">Kebijakan Privasi</a> | <a href="#" style="color:#667eea;">Hubungi Kami</a></p>
                    <p style="margin-top:15px; font-size:12px;">Website ini menggunakan Google AdSense untuk menampilkan iklan relevan</p>
                </div>
            </div>

            <script>
                function loadAds() {
                    try {
                        const adElements = document.querySelectorAll('.adsbygoogle');
                        for (let i = 0; i < adElements.length; i++) {
                            if (adElements[i] && !adElements[i].getAttribute('data-ads-loaded')) {
                                (window.adsbygoogle = window.adsbygoogle || []).push({});
                                adElements[i].setAttribute('data-ads-loaded', 'true');
                            }
                        }
                    } catch (e) {
                        console.log('Ad loading handled');
                    }
                }
                
                if (document.readyState === 'loading') {
                    document.addEventListener('DOMContentLoaded', loadAds);
                } else {
                    loadAds();
                }
                
                setTimeout(loadAds, 1000);
            </script>
        </body>
        </html>
    `);
});

app.listen(PORT, () => {
    console.log(`✅ Website berjalan di http://localhost:${PORT}`);
    console.log(`📱 Buka di browser untuk melihat iklan berjalan`);
    console.log(`💡 Ganti pub-1234567890123456 dengan ID AdSense asli`);
});
