import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getProductPage, productPages } from '@/lib/products'
import ProductPageContent from './product-content'

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return productPages.map((product) => ({ slug: product.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = getProductPage((await params).slug)
  if (!product) return {}
  return { title: `${product.name} | Dawa Mkononi`, description: product.overview.en }
}

export default async function Page({ params }: Props) {
  const product = getProductPage((await params).slug)
  if (!product) notFound()
  return <ProductPageContent slug={product.slug} />
}
