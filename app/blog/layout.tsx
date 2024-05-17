import Blog from "@/components/Blog";
import Nav from "@/components/Nav";

export default function BlogLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <Nav containerStyles="" />
      {children}
    </section>
  );
}
