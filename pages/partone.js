import {useEffect, useState} from 'react'
import {Container} from '../components'

export default function PartOne() {

  const [data1, setData1] = useState([])
  const [data2, setData2] = useState([])
  const [data3, setData3] = useState([])

  useEffect(() => {
    _bilanganKelipatan(5, 100)
    _bilanganFibonacci(20)
    _replaceNumberToStar(10)
    _bilanganTerbilang(2003)
  }, [])

  const _bilanganKelipatan = (number, max) => {
    const result = [];
    
    for(var i = 1; i <= max; i++){
      if(i % number == 0) {
        let str = ''
        if(i <= 60) {
          str = `${i} KURANG`;
        }
        else if(i > 60 && i <=70) {
          str = `${i} CUKUP`;
        }
        else if(i > 70 && i <=80) {
          str = `${i} BAIK`;
        }
        else if(i > 80) {
          str = `${i} LUAR BIASA`;
        }
        
        result.push(str)
      }
    }

    setData1(result)
  }

  const _bilanganFibonacci = (length) => {
    const result = [0, 1, 1];
    for (let i = 2; i < length; i++) {
      result[i] = result[i - 1] + result[i - 2];
    }
    setData2(result);
  }

  const _replaceNumberToStar = (length) => {
    const result = [];
    
    for(var i = 1; i <= length; i++) {
      const row = [];
      
      for(var r = 1; r <= i; r++) {
        row.push('*')
      }

      result
        .push(row.toString()
        .replaceAll(',', ' '))
    } 
    setData3(result)
  }

  const _bilanganTerbilang = (_nilai) => {
      
  }

  return (
    <Container >
      <div className="p-4">
        <h1 className="text-4xl font-bold mb-4">Bagian #1: PseudoCode</h1>
        <div className="mb-10">
          <div className="mb-2">
            <span className="text-primary font-bold">#</span>
            <span>Jawaban no. 1 (Max 100):</span>
          </div>
          <div className="border-[1px] border-slate-300 rounded-lg p-4">
            <ul>
              {data1.map((data, index) => <li key={index}>{data}</li>)}
            </ul>
          </div>
        </div>
        <div className="mb-10">
          <div className="mb-2">
            <span className="text-primary font-bold">#</span>
            <span>Jawaban no. 2 (Panjang bilangan 20):</span>
          </div>
          <div className="border-[1px] border-slate-300 rounded-lg p-4">
            <div>{data2.join(', ')}</div>
          </div>
        </div>
        <div className="mb-10">
          <div className="mb-2">
            <span className="text-primary font-bold">#</span>
            <span>Jawaban no. 3 (Panjang bilangan 10):</span>
          </div>
          <div className="border-[1px] border-slate-300 rounded-lg p-4">
            {data3.map((data, index) => 
              <div key={index}>{data}</div>
            )}
          </div>
        </div>
        <div className="mb-10">
          <div className="mb-2">
            <span className="text-primary font-bold">#</span>
            <span>Jawaban no. 4 :</span>
          </div>
          <div className="border-[1px] border-slate-300 rounded-lg p-4">
            ...
          </div>
        </div>
      </div>
    </Container>
  )
}
