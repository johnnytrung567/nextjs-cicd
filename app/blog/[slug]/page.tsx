type Params = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  const slugs: string[] = []; // or fetch slugs
  return slugs.length > 0
    ? slugs.map(slug => ({ slug }))
    : [{ slug: 'placeholder' }];
}


export async function generateMetadata({ params }: Params) {
  return { title: `Post: ${params.slug}` };
}

export default function Page({ params }: Params) {
  return <h1>Slug: {params.slug}</h1>;
}
