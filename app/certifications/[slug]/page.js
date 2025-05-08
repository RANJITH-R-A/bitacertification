import CertificationPage from "@/app/components/CertificationPage";
import {seometadatas} from "@/app/util/seometadatas"

export async function generateMetadata({ params }) {
  const { slug } = params;
  // console.log(slug,'slug name');
  
  const seodata = seometadatas.find((item) => item.slug.toLowerCase() === slug.toLowerCase());; // JSON or fetch
  // console.log(data.metatitle)
  // console.log(data.metadescription)

  return {
    title: `${seodata.metatitle}`,
    description: seodata.metadescription,
    alternates: {
      canonical: `https://certificationtraining.in/certifications/${slug}`,
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
    },
    openGraph: {
      title: seodata.metatitle,
      description: seodata.metadescription,
      url: `https://certificationtraining.in/certifications/${slug}`,
      images: [
        {
          url: seodata.metaimage,
          width: 800,
          height: 600,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: seodata.metatitle,
      description: seodata.metadescription,
      images: [seodata.metaimage],
    },
  };


}


export default function Certification() {
      //  <script
      //           type="application/ld+json"
      //     dangerouslySetInnerHTML={{
      //               __html: JSON.stringify({
      //               "@context": "https://schema.org",
      //               "@type": "Course",
      //               "name": `${seodata.metatitle}`,
      //               "description": `${seodata.metadescription}`,
      //               "provider": {
      //                   "@type": "Organization",
      //                   "name": "BITA Academy",
      //                   "url": `https://certificationtraining.in/certifications/${slug}`
      //           }
      //         }),
      //     }}
      // /> 
  return(
    <>
     <CertificationPage/>
    </>
  )

}