'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { ArrowLeft, MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: ''
      })
    }, 3000)
  }

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
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Hubungi <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Kami</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Kami siap membantu Anda menemukan solusi perdagangan terbaik untuk kebutuhan bisnis Anda.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="space-y-8">
                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle className="text-slate-900 flex items-center">
                      <MapPin className="mr-2 h-5 w-5 text-blue-600" />
                      Alamat Kantor
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600">
                      Jalan Udayana No. 164<br />
                      Desa/Kelurahan Buruan<br />
                      Kec. Blahbatuh, Kab. Gianyar<br />
                      Provinsi Bali<br />
                      Kode Pos: 80581
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle className="text-slate-900 flex items-center">
                      <Phone className="mr-2 h-5 w-5 text-blue-600" />
                      Kontak Telepon
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600">
                      <strong>Telepon:</strong> 082382466226<br />
                      <strong>WhatsApp:</strong> 082382466226
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle className="text-slate-900 flex items-center">
                      <Mail className="mr-2 h-5 w-5 text-blue-600" />
                      Email
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600">
                      <strong>Umum:</strong> info@infinitylooptrade.com<br />
                      <strong>Support:</strong> support@infinitylooptrade.com<br />
                      <strong>Partnership:</strong> partnership@infinitylooptrade.com
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle className="text-slate-900 flex items-center">
                      <Clock className="mr-2 h-5 w-5 text-blue-600" />
                      Jam Operasional
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600">
                      <strong>Senin - Jumat:</strong> 08:00 - 17:00<br />
                      <strong>Sabtu:</strong> 08:00 - 15:00<br />
                      <strong>Minggu:</strong> Tutup
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-slate-200">
                <CardHeader>
                  <CardTitle className="text-slate-900">Kirim Pesan</CardTitle>
                  <CardDescription>
                    Isi formulir di bawah ini dan tim kami akan segera menghubungi Anda.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                        <CheckCircle className="h-8 w-8 text-green-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-slate-900 mb-2">
                        Pesan Terkirim!
                      </h3>
                      <p className="text-slate-600">
                        Terima kasih telah menghubungi kami. Tim kami akan segera merespons pesan Anda.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="name" className="text-slate-700">Nama Lengkap *</Label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Masukkan nama lengkap Anda"
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="email" className="text-slate-700">Email *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="email@example.com"
                            className="mt-1"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="phone" className="text-slate-700">Nomor Telepon *</Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="08xxxxxxxxxx"
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="company" className="text-slate-700">Perusahaan</Label>
                          <Input
                            id="company"
                            name="company"
                            type="text"
                            value={formData.company}
                            onChange={handleInputChange}
                            placeholder="Nama perusahaan Anda"
                            className="mt-1"
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="subject" className="text-slate-700">Subjek *</Label>
                        <Input
                          id="subject"
                          name="subject"
                          type="text"
                          required
                          value={formData.subject}
                          onChange={handleInputChange}
                          placeholder="Subjek pesan Anda"
                          className="mt-1"
                        />
                      </div>

                      <div>
                        <Label htmlFor="message" className="text-slate-700">Pesan *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          required
                          rows={6}
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Jelaskan kebutuhan atau pertanyaan Anda..."
                          className="mt-1"
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <p className="text-sm text-slate-500">
                          * Wajib diisi
                        </p>
                        <Button type="submit" size="lg" className="bg-blue-600 hover:bg-blue-700">
                          <Send className="mr-2 h-4 w-4" />
                          Kirim Pesan
                        </Button>
                      </div>
                    </form>
                  )}
                </CardContent>
              </Card>

              {/* FAQ Section */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Pertanyaan yang Sering Diajukan</h3>
                <div className="space-y-4">
                  <Card className="border-slate-200">
                    <CardHeader>
                      <CardTitle className="text-lg text-slate-900">
                        Apa saja layanan yang tersedia?
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-600">
                        Kami menyediakan berbagai layanan perdagangan termasuk import/export, 
                        supply chain management, market analysis, dan risk management.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-slate-200">
                    <CardHeader>
                      <CardTitle className="text-lg text-slate-900">
                        Bagaimana cara memulai kerjasama?
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-600">
                        Anda dapat menghubungi kami melalui formulir kontak atau langsung menghubungi 
                        tim sales kami untuk konsultasi awal.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-slate-200">
                    <CardHeader>
                      <CardTitle className="text-lg text-slate-900">
                        Apakah ada minimum order quantity (MOQ)?
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-600">
                        MOQ bervariasi tergantung pada produk dan layanan. Tim kami akan memberikan 
                        informasi detail setelah konsultasi kebutuhan Anda.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Lokasi Kami
            </h2>
            <p className="text-lg text-slate-600">
              Kunjungi kantor kami di Bali untuk konsultasi langsung.
            </p>
          </div>
          
          <div className="bg-slate-100 rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">
              PT INFINITY LOOP TRADE INC
            </h3>
            <p className="text-slate-600 mb-4">
              Jalan Udayana No. 164, Buruan, Blahbatuh, Gianyar, Bali
            </p>
            <Button variant="outline" className="bg-blue-600 text-white hover:bg-blue-700">
              <MapPin className="mr-2 h-4 w-4" />
              Buka di Google Maps
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Siap untuk Memulai?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Tim profesional kami siap membantu Anda menemukan solusi perdagangan terbaik.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              <Phone className="mr-2 h-4 w-4" />
              Hubungi Sekarang
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
              <Mail className="mr-2 h-4 w-4" />
              Email Kami
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