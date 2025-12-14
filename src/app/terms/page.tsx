import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { ArrowLeft, FileText, Shield, Users, Gavel, AlertCircle } from 'lucide-react'
import Link from 'next/link'

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <Link href="/" className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">∞</span>
                </div>
                <div>
                  <h1 className="text-xl font-bold text-slate-900">PT INFINITY LOOP TRADE INC</h1>
                  <p className="text-xs text-slate-500">Professional Trading Solutions</p>
                </div>
              </Link>
            </div>
            <Link href="/">
              <Button variant="outline" size="sm">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Kembali ke Beranda
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
            <Gavel className="h-8 w-8 text-blue-600" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Syarat dan Ketentuan
          </h1>
          <p className="text-lg text-slate-600">
            Syarat dan ketentuan penggunaan layanan PT INFINITY LOOP TRADE INC.
          </p>
        </div>

        <div className="space-y-8">
          {/* Introduction */}
          <Card className="border-slate-200">
            <CardHeader>
              <CardTitle className="text-slate-900 flex items-center">
                <FileText className="mr-2 h-5 w-5 text-blue-600" />
                Pendahuluan
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 leading-relaxed">
                Selamat datang di PT INFINITY LOOP TRADE INC. Syarat dan Ketentuan ini mengatur 
                penggunaan layanan kami dan hubungan hukum antara Anda dan PT INFINITY LOOP TRADE INC. 
                Dengan menggunakan layanan kami, Anda setuju untuk mematuhi syarat dan ketentuan ini.
              </p>
            </CardContent>
          </Card>

          {/* Company Information */}
          <Card className="border-slate-200">
            <CardHeader>
              <CardTitle className="text-slate-900 flex items-center">
                <Users className="mr-2 h-5 w-5 text-blue-600" />
                Informasi Perusahaan
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-slate-600">
                <div className="bg-slate-50 p-4 rounded-lg">
                  <p className="font-semibold text-slate-900">PT INFINITY LOOP TRADE INC</p>
                  <p className="mt-2">Jalan Udayana No. 164, Desa/Kelurahan Buruan</p>
                  <p>Kec. Blahbatuh, Kab. Gianyar, Provinsi Bali</p>
                  <p>Kode Pos: 80581</p>
                  <p className="mt-2">Telepon: 082382466226</p>
                  <p>Email: info@infinitylooptrade.com</p>
                </div>
                <p>
                  Perusahaan bergerak di bidang perdagangan umum, import, export, dan jasa terkait 
                  dengan kegiatan perdagangan sesuai dengan peraturan perundang-undangan yang berlaku 
                  di Republik Indonesia.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Services */}
          <Card className="border-slate-200">
            <CardHeader>
              <CardTitle className="text-slate-900">Layanan Kami</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-slate-600">
                <p>
                  PT INFINITY LOOP TRADE INC menyediakan layanan:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Import dan Export barang</li>
                  <li>Supply Chain Management</li>
                  <li>Market Analysis dan Konsultasi</li>
                  <li>Risk Management</li>
                  <li>Trading dan Distribusi</li>
                  <li>Layanan logistik dan pengiriman</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* User Obligations */}
          <Card className="border-slate-200">
            <CardHeader>
              <CardTitle className="text-slate-900 flex items-center">
                <Shield className="mr-2 h-5 w-5 text-blue-600" />
                Kewajiban Pengguna
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-slate-600">
                <p>
                  Sebagai pengguna layanan kami, Anda setuju untuk:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Memberikan informasi yang akurat dan lengkap</li>
                  <li>Mematuhi semua peraturan perundang-undangan yang berlaku</li>
                  <li>Tidak menggunakan layanan untuk kegiatan ilegal</li>
                  <li>Melindungi informasi login dan akses pribadi</li>
                  <li>Memenuhi kewajiban pembayaran tepat waktu</li>
                  <li>Memberikan dokumen yang diperlukan untuk transaksi</li>
                  <li>Berkomunikasi secara profesional dengan tim kami</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Payment Terms */}
          <Card className="border-slate-200">
            <CardHeader>
              <CardTitle className="text-slate-900">Syarat Pembayaran</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-slate-600">
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Metode Pembayaran:</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Transfer Bank ke rekening perusahaan</li>
                    <li>Letter of Credit (L/C)</li>
                    <li>Telegraphic Transfer (T/T)</li>
                    <li>Metode pembayaran lain yang disepakati</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Syarat Pembayaran:</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Pembayaran sesuai dengan invoice yang diterbitkan</li>
                    <li>Pembayaran DP minimal 50% untuk pesanan khusus</li>
                    <li>Pelunasan sebelum pengiriman barang</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Delivery and Shipping */}
          <Card className="border-slate-200">
            <CardHeader>
              <CardTitle className="text-slate-900">Pengiriman dan Pengantaran</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-slate-600">
                <p>
                  Ketentuan pengiriman:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Pengiriman dilakukan setelah pembayaran lunas</li>
                  <li>Biaya pengiriman ditanggung pembeli</li>
                  <li>Risiko pengiriman beralih kepada pembeli setelah barang diserahkan</li>
                  <li>Waktu pengiriman disesuaikan dengan kesepakatan</li>
                  <li>Kami berhak menolak pengiriman ke alamat yang tidak valid</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Warranty and Returns */}
          <Card className="border-slate-200">
            <CardHeader>
              <CardTitle className="text-slate-900">Garansi dan Pengembalian</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-slate-600">
                <p>
                  Kebijakan garansi dan pengembalian:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Garansi sesuai dengan ketentuan produsen</li>
                  <li>Pengembalian hanya untuk barang cacat produksi</li>
                  <li>Klaim garansi harus disertai bukti pembelian</li>
                  <li>Pengembalian diproses dalam 14 hari kerja</li>
                  <li>Ongkos kirim pengembalian ditanggung pembeli</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Intellectual Property */}
          <Card className="border-slate-200">
            <CardHeader>
              <CardTitle className="text-slate-900">Hak Kekayaan Intelektual</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-slate-600">
                <p>
                  Semua konten, merek, dan hak kekayaan intelektual milik PT INFINITY LOOP TRADE INC 
                  dilindungi oleh hukum yang berlaku. Anda tidak diperbolehkan:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Menggunakan merek kami tanpa izin</li>
                  <li>Menyalin konten website kami</li>
                  <li>Mendistribusikan materi yang dilindungi hak cipta</li>
                  <li>Menggunakan data kami untuk keperluan komersial</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Limitation of Liability */}
          <Card className="border-slate-200">
            <CardHeader>
              <CardTitle className="text-slate-900 flex items-center">
                <AlertCircle className="mr-2 h-5 w-5 text-blue-600" />
                Pembatasan Tanggung Jawab
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-slate-600">
                <p>
                  PT INFINITY LOOP TRADE INC tidak bertanggung jawab atas:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Kerugian tidak langsung atau konsekuensial</li>
                  <li>Keterlambatan pengiriman karena force majeure</li>
                  <li>Kesalahan yang disebabkan oleh pihak ketiga</li>
                  <li>Kerusakan akibat penggunaan yang tidak tepat</li>
                  <li>Kehilangan data atau informasi</li>
                </ul>
                <p>
                  Tanggung jawab maksimal kami sebatas nilai transaksi yang terjadi.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Dispute Resolution */}
          <Card className="border-slate-200">
            <CardHeader>
              <CardTitle className="text-slate-900">Penyelesaian Sengketa</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-slate-600">
                <p>
                  Sengketa yang timbul dari penggunaan layanan kami akan diselesaikan melalui:
                </p>
                <ol className="list-decimal list-inside space-y-2 ml-4">
                  <li>Musyawarah dan mufakat antara kedua belah pihak</li>
                  <li>Mediasi melalui pihak ketiga yang netral</li>
                  <li>Arbitrase sesuai dengan aturan BANI</li>
                  <li>Pengadilan Negeri Gianyar, Bali</li>
                </ol>
              </div>
            </CardContent>
          </Card>

          {/* Termination */}
          <Card className="border-slate-200">
            <CardHeader>
              <CardTitle className="text-slate-900">Pemutusan Hubungan</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-slate-600">
                <p>
                  Kami berhak menghentikan layanan jika:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Anda melanggar syarat dan ketentuan</li>
                  <li>Informasi yang diberikan tidak akurat</li>
                  <li>Terjadi penyalahgunaan layanan</li>
                  <li>Alasan keamanan dan kepatuhan</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="border-slate-200">
            <CardHeader>
              <CardTitle className="text-slate-900">Informasi Kontak</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-slate-600">
                <p>
                  Untuk pertanyaan tentang Syarat dan Ketentuan ini, hubungi kami:
                </p>
                <div className="bg-slate-50 p-4 rounded-lg">
                  <p className="font-semibold text-slate-900">PT INFINITY LOOP TRADE INC</p>
                  <p className="mt-2">Jalan Udayana No. 164, Desa/Kelurahan Buruan</p>
                  <p>Kec. Blahbatuh, Kab. Gianyar, Provinsi Bali</p>
                  <p>Kode Pos: 80581</p>
                  <p className="mt-2">Telepon: 082382466226</p>
                  <p>Email: legal@infinitylooptrade.com</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Effective Date */}
          <div className="text-center py-8">
            <p className="text-slate-600">
              Syarat dan Ketentuan ini berlaku efektif sejak: <span className="font-semibold text-slate-900">1 Januari 2024</span>
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">∞</span>
            </div>
            <h3 className="font-bold">PT INFINITY LOOP TRADE INC</h3>
          </div>
          <p className="text-slate-400 text-sm">
            &copy; 2024 PT INFINITY LOOP TRADE INC. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}