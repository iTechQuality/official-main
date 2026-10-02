import { redirect, notFound } from "next/navigation";
import { APPS_DATA } from "@/constants/apps";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return APPS_DATA.map((app) => ({
    slug: app.slug,
  }));
}

export default async function AppSlugPage({ params }: PageProps) {
  const { slug } = await params;
  const app = APPS_DATA.find((a) => a.slug === slug);

  if (!app) {
    notFound();
  }

  // Redirect to direct canonical link like https://itechqu.com/snapdl
  redirect(`/${app.slug}`);
}
