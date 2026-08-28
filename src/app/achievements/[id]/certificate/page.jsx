import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { title } from "framer-motion/client";

const certificates = {
  1: {
    title: "Web Development Course Certificate",
    type: "pdf",
    file: "/certificates/Web development.pdf",
  },

  2: {
    title: "Research Odyssey – Basic to Advance Certificate",
    type: "image",
    file: "/certificates/Research.jpeg",
  },

  3: {
    title: "CodeChef Camp 2.0 Certificate",
    type: "pdf",
    file: "/certificates/CC-2.0_completion.pdf",
  },

  4:{
    title: "Volunteering Certificate",
    type: "image",
    file: "/certificates/Volunteering.png"
  },

  5:{
    title: "CodeChef Silver Star",
    type: "image",
    file: "/certificates/codechef-silver.png"

  }
};

export default async function CertificatePage({ params }) {
  const { id } = await params;

  const certificate = certificates[id];

  if (!certificate) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-black text-white">
        <div className="text-center">
          <h1 className="mb-5 text-3xl font-bold">
            Certificate Not Found
          </h1>

          <Link
            href="/#achievements"
            className="text-purple-400 hover:text-purple-300"
          >
            ← Back to Achievements
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black px-4 py-8 text-white sm:px-8">

      {/* Back */}
      <div className="mx-auto mb-6 max-w-7xl">
        <Link
          href={`/achievements/${id}`}
          className="inline-flex items-center gap-2 text-sm text-gray-400 transition hover:text-purple-400"
        >
          <ArrowLeft size={17} />
          Back
        </Link>
      </div>

      {/* Certificate */}
      <div className="mx-auto max-w-7xl">

        {certificate.type === "pdf" ? (
          <div className="overflow-hidden rounded-xl border border-purple-900/60 bg-[#080808] shadow-[0_0_40px_rgba(168,85,247,0.15)]">

            <iframe
              src={certificate.file}
              title={certificate.title}
              className="h-[85vh] w-full"
            />

          </div>
        ) : (
          <div className="flex justify-center rounded-xl border border-purple-900/60 bg-[#080808] p-3 shadow-[0_0_40px_rgba(168,85,247,0.15)] sm:p-6">

            <Image
              src={certificate.file}
              alt={certificate.title}
              width={1400}
              height={1000}
              priority
              className="h-auto max-h-[85vh] w-auto rounded-lg object-contain"
            />

          </div>
        )}

      </div>

    </main>
  );
}