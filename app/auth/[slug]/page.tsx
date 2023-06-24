import Authorisation from "@/app/ui/organisms/Authorisation";

async function fetchData(context: any) {
  return context.params.slug;
}
export default async function Auth(context: any) {
  const slug = await fetchData(context);
  const pageParams = {
    type: slug === 'signin',
    slug
  };

  return (
    <main>
        <Authorisation {...pageParams}  />
    </main>
  )
}