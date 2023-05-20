import Authorisation from "@/app/ui/organisms/Authorisation";
import { useRouter } from "next/navigation";

async function fetchData(context: any) {
  const slug = context.params.slug;
  return slug;
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