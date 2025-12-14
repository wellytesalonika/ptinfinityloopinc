import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { ArrowLeft, FileText, Shield, Users, Gavel } from 'lucide-react'
import Link from 'next/link'

export default function PrivacyPage() {
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
            <Shield className="h-8 w-8 text-blue-600" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Kebijakan Privasi
          </h1>
          <p className="text-lg text-slate-600">
            PT INFINITY LOOP TRADE INC berkomitmen untuk melindungi privasi dan keamanan data pribadi Anda.
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
                Kebijakan Privasi ini menjelaskan bagaimana PT INFINITY LOOP TRADE INC mengumpulkan, 
                menggunakan, dan melindungi informasi pribadi Anda ketika menggunakan layanan kami. 
                Kami berkomitmen untuk memastikan bahwa privasi Anda dilindungi sesuai dengan 
                peraturan perundang-undangan yang berlaku di Indonesia.
              </p>
            </CardContent>
          </Card>

          {/* Data Collection */}
          <Card className="border-slate-200">
            <CardHeader>
              <CardTitle className="text-slate-900 flex items-center">
                <Users className="mr-2 h-5 w-5 text-blue-600" />
                Pengumpulan Data
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-slate-600">
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Data yang Kami Kumpulkan:</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Nama lengkap dan informasi identitas</li>
                    <li>Informasi kontak (email, telepon, alamat)</li>
                    <li>Informasi perusahaan dan bisnis</li>
                    <li>Data transaksi dan riwayat perdagangan</li>
                    <li>Informasi penggunaan website dan layanan</li>
                    <li>Data komunikasi dengan tim kami</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Cara Pengumpulan:</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Formulir pendaftaran dan kontak</li>
                    <li>Komunikasi langsung dengan tim kami</li>
                    <li>Penggunaan website dan platform digital</li>
                    <li>Transaksi bisnis dan kerjasama</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Data Usage */}
          <Card className="border-slate-200">
            <CardHeader>
              <CardTitle className="text-slate-900 flex items-center">
                <Shield className="mr-2 h-5 w-5 text-blue-600" />
                Penggunaan Data
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-slate-600">
                <p>
                  Kami menggunakan data pribadi Anda untuk:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Menyediakan layanan perdagangan yang Anda minta</li>
                  <li>Memproses transaksi dan administrasi bisnis</li>
                  <li>Memberikan informasi tentang produk dan layanan kami</li>
                  <li>Meningkatkan kualitas layanan dan pengalaman pengguna</li>
                  <li>Memenuhi kewajiban hukum dan peraturan</li>
                  <li>Keperluan analisis bisnis dan pengembangan</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Data Protection */}
          <Card className="border-slate-200">
            <CardHeader>
              <CardTitle className="text-slate-900">Perlindungan Data</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-slate-600">
                <p>
                  PT INFINITY LOOP TRADE INC menerapkan langkah-langkah keamanan yang komprehensif:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Enkripsi data selama transmisi dan penyimpanan</li>
                  <li>Akses terbatas ke data pribadi</li>
                  <li>System keamanan berlapis untuk melindungi dari akses tidak sah</li>
                  <li>Regular security audit dan update</li>
                  <li>Pelatihan tim tentang keamanan data</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Data Sharing */}
          <Card className="border-slate-200">
            <CardHeader>
              <CardTitle className="text-slate-900">Berbagi Data</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-slate-600">
                <p>
                  Kami tidak menjual, menyewakan, atau membagikan data pribadi Anda kepada pihak ketiga 
                  kecuali dalam kondisi berikut:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Dengan persetujuan eksplisit dari Anda</li>
                  <li>Untuk memenuhi layanan yang Anda minta</li>
                  <li>Untuk kepatuhan hukum dan peraturan</li>
                  <li>Untuk melindungi hak, properti, atau keselamatan kami atau pihak lain</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* User Rights */}
          <Card className="border-slate-200">
            <CardHeader>
              <CardTitle className="text-slate-900">Hak Pengguna</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-slate-600">
                <p>
                  Sebagai pengguna, Anda memiliki hak untuk:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Mengakses data pribadi yang kami simpan</li>
                  <li>Memperbaiki data yang tidak akurat</li>
                  <li>Menghapus data pribadi Anda</li>
                  <li>Menolak pemrosesan data tertentu</li>
                  <li>Meminta salinan data pribadi Anda</li>
                  <li>Menarik persetujuan yang telah diberikan</li>
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
                  Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini atau ingin 
                  menggunakan hak privasi Anda, silakan hubungi kami:
                </p>
                <div className="bg-slate-50 p-4 rounded-lg">
                  <p className="font-semibold text-slate-900">PT INFINITY LOOP TRADE INC</p>
                  <p className="mt-2">Jalan Udayana No. 164, Desa/Kelurahan Buruan</p>
                  <p>Kec. Blahbatuh, Kab. Gianyar, Provinsi Bali</p>
                  <p>Kode Pos: 80581</p>
                  <p className="mt-2">Telepon: 082382466226</p>
                  <p>Email: privacy@infinitylooptrade.com</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Policy Updates */}
          <Card className="border-slate-200">
            <CardHeader>
              <CardTitle className="text-slate-900">Pembaruan Kebijakan</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600">
                Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. Perubahan 
                akan diberitahukan melalui website atau email Anda. Kami menyarankan Anda 
                untuk secara berkala meninjau kebijakan ini untuk tetap mendapatkan informasi 
                tentang bagaimana kami melindungi data Anda.
              </p>
            </CardContent>
          </Card>

          {/* Effective Date */}
          <div className="text-center py-8">
            <p className="text-slate-600">
              Kebijakan Privasi ini berlaku efektif sejak: <span className="font-semibold text-slate-900">1 Januari 2024</span>
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