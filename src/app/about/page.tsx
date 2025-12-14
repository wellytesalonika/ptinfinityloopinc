import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { ArrowLeft, Users, Target, Award, Globe, Heart, Lightbulb, Shield, TrendingUp } from 'lucide-react'
import Link from 'next/link'

export default function AboutPage() {
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

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl mb-6">
            <span className="text-white font-bold text-3xl">∞</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Tentang <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">PT INFINITY LOOP TRADE INC</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Mitra perdagangan terpercaya yang menghubungkan peluang bisnis dengan keunggulan operasional untuk kesuksesan tak terbatas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Hubungi Kami
            </Button>
            <Button variant="outline" size="lg">
              Pelajari Layanan Kami
            </Button>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Cerita Kami</h2>
              <div className="space-y-4 text-slate-600">
                <p>
                  PT INFINITY LOOP TRADE INC didirikan dengan visi untuk menjadi jembatan antara 
                  produsen lokal dan pasar global. Berlokasi di Bali, kami memanfaatkan posisi 
                  strategis Indonesia untuk menghubungkan bisnis dengan peluang perdagangan tak terbatas.
                </p>
                <p>
                  Dengan pengalaman lebih dari 10 tahun di industri perdagangan, kami telah 
                  membangun jaringan yang kuat dan reputasi yang solid sebagai mitra bisnis yang 
                  dapat diandalkan. Kami percaya bahwa kesuksesan klien adalah kesuksesan kami.
                </p>
                <p>
                  Nama "Infinity Loop" mencerminkan komitmen kami untuk menciptakan siklus 
                  pertumbuhan yang berkelanjutan bagi semua mitra bisnis kami.
                </p>
              </div>
            </div>
            <div className="bg-slate-50 p-8 rounded-2xl">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Globe className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Jangkauan Global</h3>
                    <p className="text-slate-600">50+ negara partner</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">500+ Klien Puas</h3>
                    <p className="text-slate-600">Bisnis dari berbagai industri</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Award className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Sertifikasi Terpercaya</h3>
                    <p className="text-slate-600">Standar internasional</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Visi & Misi Kami
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Panduan kami dalam setiap langkah untuk mencapai kesuksesan bersama.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-slate-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-slate-900">Visi Kami</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Menjadi perusahaan perdagangan terkemuka di Indonesia yang menghubungkan 
                  peluang bisnis global dengan keunggulan lokal, menciptakan nilai tak terbatas 
                  bagi semua stakeholder.
                </p>
              </CardContent>
            </Card>

            <Card className="border-slate-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-slate-900">Misi Kami</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-slate-600">
                  <li>• Menyediakan layanan perdagangan berkualitas tinggi</li>
                  <li>• Membangun hubungan jangka panjang dengan klien</li>
                  <li>• Mendukung pertumbuhan UMKM lokal</li>
                  <li>• Berinovasi dalam solusi perdagangan digital</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Nilai-Nilai Inti Kami
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Prinsip yang memandu setiap keputusan dan tindakan kami.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-slate-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-slate-900">Integritas</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Kejujuran dan transparansi dalam setiap transaksi dan hubungan bisnis.
                </p>
              </CardContent>
            </Card>

            <Card className="border-slate-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Lightbulb className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-slate-900">Inovasi</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Terus berinovasi untuk memberikan solusi perdagangan yang lebih baik.
                </p>
              </CardContent>
            </Card>

            <Card className="border-slate-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-slate-900">Kolaborasi</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Membangun kemitraan yang kuat untuk kesuksesan bersama.
                </p>
              </CardContent>
            </Card>

            <Card className="border-slate-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-slate-900">Keunggulan</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Berkomitmen untuk memberikan layanan terbaik di setiap aspek.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Tim Profesional Kami
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Didukung oleh tim ahli dengan pengalaman luas di industri perdagangan.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-slate-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-white font-bold text-2xl">JD</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 text-center mb-2">John Doe</h3>
                <p className="text-blue-600 text-center mb-4">CEO & Founder</p>
                <p className="text-slate-600 text-center text-sm">
                  15+ tahun pengalaman di industri perdagangan internasional dengan fokus pada market development.
                </p>
              </CardContent>
            </Card>

            <Card className="border-slate-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-white font-bold text-2xl">JS</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 text-center mb-2">Jane Smith</h3>
                <p className="text-blue-600 text-center mb-4">Operations Director</p>
                <p className="text-slate-600 text-center text-sm">
                  Ahli dalam supply chain management dan logistik dengan pengalaman 10+ tahun.
                </p>
              </CardContent>
            </Card>

            <Card className="border-slate-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-white font-bold text-2xl">RJ</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 text-center mb-2">Robert Johnson</h3>
                <p className="text-blue-600 text-center mb-4">Business Development</p>
                <p className="text-slate-600 text-center text-sm">
                  Spesialis dalam mengembangkan hubungan bisnis dan ekspansi pasar global.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Information */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Informasi Perusahaan
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-6">Data Legal</h3>
              <div className="space-y-4 text-slate-600">
                <div>
                  <span className="font-medium text-slate-900">Nama Perusahaan:</span>
                  <p>PT INFINITY LOOP TRADE INC</p>
                </div>
                <div>
                  <span className="font-medium text-slate-900">NPWP:</span>
                  <p>XX.XXX.XXX.X-XXX.XXX</p>
                </div>
                <div>
                  <span className="font-medium text-slate-900">TDP:</span>
                  <p>XX.XX.XXX.XX.XXX.XXX</p>
                </div>
                <div>
                  <span className="font-medium text-slate-900">SIUP:</span>
                  <p>XXX/SIUP/X/XXXX</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-6">Kontak Kami</h3>
              <div className="space-y-4 text-slate-600">
                <div>
                  <span className="font-medium text-slate-900">Alamat:</span>
                  <p>Jalan Udayana No. 164, Desa/Kelurahan Buruan</p>
                  <p>Kec. Blahbatuh, Kab. Gianyar, Provinsi Bali</p>
                  <p>Kode Pos: 80581</p>
                </div>
                <div>
                  <span className="font-medium text-slate-900">Telepon:</span>
                  <p>082382466226</p>
                </div>
                <div>
                  <span className="font-medium text-slate-900">Email:</span>
                  <p>info@infinitylooptrade.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Siap untuk Memulai Kerjasama?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Bergabunglah dengan ratusan klien yang telah mempercayai kami sebagai mitra perdagangan mereka.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Hubungi Tim Kami
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
              Download Company Profile
            </Button>
          </div>
        </div>
      </section>

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