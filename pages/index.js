import Head from 'next/head'
import Image from 'next/image'
import { SmoothCorners } from 'react-smooth-corners'
import itemImage from '../public/images/item-1.png'
import logoImage from '../public/logo.svg'
import {Layout, Container, Navbar, Item} from '../components'
import metadata from '../data/index.json'

export default function Home() {
  return (
    <Layout logoUrl={logoImage}>
      <Container >
        <div className="py-10">
          <h1 className="text-4xl font-bold text-center mb-16">Choose the item you like and buy it now</h1>
          <div className="grid grid-cols-4 gap-6">
            {
              metadata.map((item, index) => 
                <Item 
                  key={index}
                  imageUrl={item.image} 
                  name={item.name} 
                  price="0.002" 
                />
              )
            }
          </div>
        </div>
      </Container>
    </Layout>
  )
}
