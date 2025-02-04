
import ContentContainer from '@/sections/aboutThai/content-container'
import React from 'react'
import image from '@/assets/images/dashboard/my-ads/female-masseur.png'


const contentData = [
  {
    title: " Mix Thai Massage",
    subtitle: "Specialized  Techniques",
    text: ' A customized blend of different massage styles, likely incorporating elements of traditional Thai massage, oil massage, and other techniques to create a unique experience tailored to individual needs.',
    advantages: [{
      first: "Can provide a greater sense of relaxation and well-being",
      second: "Incorporates various techniques to target specific areas.",
      third: "Tailored experience to meet individual needs"
    }],
    src: image}
]

const cardsData = [
  { cardTitle: 'Herb (Thai Massage)', imgSrc: 'https://s3-alpha-sig.figma.com/img/df5e/51f5/e6f5b1eaa86c9725e0eda92e1a52443f?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=It-rEHGI~oDIpAy0DJWO8hfbEjiFbB7nx5U0NnuI45hOIxDSgfzIt-lxe9GV0RMMgQWdjKoyXjX-BGboxHUnybD3N28OQ3AO0u0hNHC-jUBi0SSauNmEZLQGto1~a6f-Yab6B1xx~wf2x1RgJQYqWgpw1Rt6oJ5GDyjgjuUA2LDT6wlF5ImkPV3pI8sZfL0o~bGYvh5lNy4jasJZ4V0IFMvuL9qfBDF0c5c8tpFXslzDUGivK7L3ZsErMoS9a~KgGe459GZ~Seo6wL8QjAgJMeqvcji31JxUuXqrbXQijO4d3-f21q-ETPwcZg7S2PoK-H3U-xVSnZhMPLm3nI34fw__' },
  { cardTitle: 'Thai Massage', imgSrc: 'https://s3-alpha-sig.figma.com/img/3b9a/865c/caad59ba89b60f329c8e15206f3fcce8?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WSxUAv-O6QYb9CxFGmG-XldmpnoCHZoacUkRDfwNB0-MDdFxyWVsi-Kk1aYK84FtiZCatomCJVBStYWkDjwn88sCq25uoyNYGEDhglZH057APrrjJLU8yWrPiTssAc0tJAOiUAGsSPLgYqvZstB2zn5Y54x~Q4B6zU0iB1SAutkVCi~boCCRSYIAOVL0mX5Wh3oqhbWTL6nw7gyn6YIO4XYSi-AIUfBu79lIL~fiFhGDbOKGV0rwHaupJI1qWv4qo9hznIr-ksHAE16GrDACjUTnvT9tOrjCRXvN97oTj49iLfgfQVXhPEiern~9~ks7DmAGqfX8x~KUjj9gvtulsw__' },
]

export default function page() {
  return (
    <div className='bg-white flex flex-col w-full'>
      {/* <CardsContainer cardsData={cardsData} /> */}
      <ContentContainer data={contentData} />
    </div>
  )
}
