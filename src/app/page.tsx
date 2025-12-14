'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { 
  Menu, 
  X, 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  Users, 
  TrendingUp, 
  Shield,
  ArrowRight,
  Star,
  CheckCircle
} from 'lucide-react'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">∞</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900">PT INFINITY LOOP TRADE INC</h1>
                <p className="text-xs text-slate-500">Professional Trading Solutions</p>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-slate-600 hover:text-blue-600 transition-colors">Beranda</a>
              <a href="#about" className="text-slate-600 hover:text-blue-600 transition-colors">Tentang</a>
              <a href="#services" className="text-slate-600 hover:text-blue-600 transition-colors">Layanan</a>
              <a href="#contact" className="text-slate-600 hover:text-blue-600 transition-colors">Kontak</a>
              <Button variant="outline" size="sm">
                <a href="/privacy">Privacy</a>
              </Button>
              <Button variant="outline" size="sm">
                <a href="/terms">Terms</a>
              </Button>
            </div>

            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 text-slate-600 hover:text-blue-600">Beranda</a>
              <a href="#about" className="block px-3 py-2 text-slate-600 hover:text-blue-600">Tentang</a>
              <a href="#services" className="block px-3 py-2 text-slate-600 hover:text-blue-600">Layanan</a>
              <a href="#contact" className="block px-3 py-2 text-slate-600 hover:text-blue-600">Kontak</a>
              <Separator />
              <a href="/privacy" className="block px-3 py-2 text-slate-600 hover:text-blue-600">Privacy Policy</a>
              <a href="/terms" className="block px-3 py-2 text-slate-600 hover:text-blue-600">Terms & Conditions</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl mb-6">
              <span className="text-white font-bold text-3xl">∞</span>
            </div>
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
              Trusted Trading Partner
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                PT INFINITY LOOP TRADE INC
              </span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
              Solusi perdagangan profesional dengan standar tertinggi. Kami menghubungkan peluang bisnis dengan keunggulan operasional untuk kesuksesan tak terbatas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Hubungi Kami
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                Pelajari Lebih Lanjut
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Mengapa Memilih Kami
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Dengan pengalaman bertahun-tahun dan komitmen terhadap keunggulan, kami menjadi mitra perdagangan terpercaya untuk bisnis Anda.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-slate-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-slate-900">Pertumbuhan Berkelanjutan</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-600">
                  Strategi perdagangan inovatif yang mendukung pertumbuhan bisnis jangka panjang dengan hasil yang terukur.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-slate-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-slate-900">Keamanan Terjamin</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-600">
                  Standar keamanan tertinggi dalam setiap transaksi dengan perlindungan data dan aset yang komprehensif.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-slate-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-slate-900">Tim Profesional</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-600">
                  Ahli berpengalaman yang siap memberikan solusi terbaik untuk kebutuhan perdagangan Anda.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Layanan Kami
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Berbagai layanan perdagangan komprehensif yang disesuaikan dengan kebutuhan bisnis Anda.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Import & Export',
              'Supply Chain Management',
              'Market Analysis',
              'Risk Management'
            ].map((service, index) => (
              <Card key={index} className="border-slate-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center mb-4">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">{service}</h3>
                  <p className="text-sm text-slate-600">
                    Solusi profesional untuk {service.toLowerCase()} dengan efisiensi maksimal.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-blue-100">Klien Puas</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">10+</div>
              <div className="text-blue-100">Tahun Pengalaman</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-blue-100">Negara Partner</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-blue-100">Dukungan</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Hubungi Kami
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Siap untuk memulai kerjasama? Tim kami siap membantu Anda mencapai kesuksesan.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-6">Informasi Kontak</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-blue-600 mt-1" />
                  <div>
                    <div className="font-medium text-slate-900">Alamat</div>
                    <div className="text-slate-600">
                      Jalan Udayana No. 164, Desa/Kelurahan Buruan, Kec. Blahbatuh, Kab. Gianyar, Provinsi Bali
                    </div>
                    <div className="text-slate-600">Kode Pos: 80581</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-blue-600" />
                  <div>
                    <div className="font-medium text-slate-900">Telepon</div>
                    <div className="text-slate-600">082382466226</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-blue-600" />
                  <div>
                    <div className="font-medium text-slate-900">Email</div>
                    <div className="text-slate-600">info@infinitylooptrade.com</div>
                  </div>
                </div>
              </div>
            </div>

            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="text-slate-900">Kirim Pesan</CardTitle>
                <CardDescription>
                  Kami akan merespons pesan Anda secepatnya.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Nama</label>
                  <input 
                    type="text" 
                    className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Nama lengkap Anda"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Pesan</label>
                  <textarea 
                    rows={4} 
                    className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Pesan Anda..."
                  />
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Kirim Pesan
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">∞</span>
                </div>
                <div>
                  <h3 className="font-bold">PT INFINITY LOOP TRADE INC</h3>
                </div>
              </div>
              <p className="text-slate-400 text-sm">
                Mitra perdagangan terpercaya untuk kesuksesan bisnis Anda.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Layanan</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Import & Export</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Supply Chain</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Market Analysis</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Risk Management</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Perusahaan</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#about" className="hover:text-white transition-colors">Tentang Kami</a></li>
                <li><a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-white transition-colors">Terms & Conditions</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Kontak</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Newsletter</h4>
              <p className="text-slate-400 text-sm mb-4">
                Dapatkan informasi terbaru tentang layanan kami.
              </p>
              <div className="flex space-x-2">
                <input 
                  type="email" 
                  placeholder="Email Anda" 
                  className="flex-1 px-3 py-2 bg-slate-800 border border-slate-700 rounded-md text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
          <Separator className="my-8 bg-slate-800" />
          <div className="text-center text-slate-400 text-sm">
            <p>&copy; 2024 PT INFINITY LOOP TRADE INC. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}