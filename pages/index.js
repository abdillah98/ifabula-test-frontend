import Link from 'next/link'
import {Container} from '../components'

export default function Home() {

  return (
    <Container >
      <div className="p-4">
        <h1 className="text-4xl font-bold mb-4">Ifabula Test Result</h1>
        <div className="p-4 w-[100%] md:w-[40%] border-[1px] border-slate-300 rounded-lg mb-4">
          <div>Nama: Abdillah AG</div>
          <div>Bagian: FrontEnd</div>
          <div>Kontak (Whatsapp): +6281343910566</div>
        </div>
        <ul className="flex flex-col gap-2">
          <li><Link href="/partone" className="underline hover:text-primary">#1. Jawaban soal PseudoCode</Link></li>
          <li><Link href="/parttwo" className="underline hover:text-primary">#2. Jawaban soal Utama</Link></li>
        </ul>
      </div>
    </Container>
  )
}
