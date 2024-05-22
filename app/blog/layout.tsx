import NavBlog from "@/components/NavBlog";

export default function BlogLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="">
      {/* Include shared UI here e.g. a header or sidebar */}
      <NavBlog />
      {children}
    </section>
  );
}
