import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { articles, getArticle } from '@/lib/blog'
import ArticlePage from './article-content'

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.id }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = getArticle((await params).slug)
  if (!article) return {}
  return { title: `${article.title} | Dawa Mkononi`, description: article.summary }
}

export default async function Page({ params }: Props) {
  const article = getArticle((await params).slug)
  if (!article) notFound()
  return <ArticlePage article={article} />
}
