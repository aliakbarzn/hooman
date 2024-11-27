import ContentContainer from '@/sections/aboutThai/content-container'
import React from 'react'

export default function page() {

  const contentData = [
    {
      title: "Herb (Thai Massage)",
      subtitle: "Traditional Thai Massage",
      text: 'This treatment incorporates herbs into traditional Thai massage techniques. The herbal compresses, typically filled with a blend of medicinal herbs, are steamed and used in conjunction with acupressure and yoga-like stretching to enhance relaxation and provide therapeutic benefits.',
      advantages: [{
        first: "Combines therapeutic herbs for added benefits.",
        second: "Promotes relaxation and pain relief.",
        third: "Enhances flexibility due to stretching."
      }],
      src: 'https://s3-alpha-sig.figma.com/img/df5e/51f5/e6f5b1eaa86c9725e0eda92e1a52443f?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=It-rEHGI~oDIpAy0DJWO8hfbEjiFbB7nx5U0NnuI45hOIxDSgfzIt-lxe9GV0RMMgQWdjKoyXjX-BGboxHUnybD3N28OQ3AO0u0hNHC-jUBi0SSauNmEZLQGto1~a6f-Yab6B1xx~wf2x1RgJQYqWgpw1Rt6oJ5GDyjgjuUA2LDT6wlF5ImkPV3pI8sZfL0o~bGYvh5lNy4jasJZ4V0IFMvuL9qfBDF0c5c8tpFXslzDUGivK7L3ZsErMoS9a~KgGe459GZ~Seo6wL8QjAgJMeqvcji31JxUuXqrbXQijO4d3-f21q-ETPwcZg7S2PoK-H3U-xVSnZhMPLm3nI34fw__'
    }
  ]

  const cardsData = [
    { cardTitle: 'Herb (Thai Massage)', imgSrc: 'https://s3-alpha-sig.figma.com/img/df5e/51f5/e6f5b1eaa86c9725e0eda92e1a52443f?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=It-rEHGI~oDIpAy0DJWO8hfbEjiFbB7nx5U0NnuI45hOIxDSgfzIt-lxe9GV0RMMgQWdjKoyXjX-BGboxHUnybD3N28OQ3AO0u0hNHC-jUBi0SSauNmEZLQGto1~a6f-Yab6B1xx~wf2x1RgJQYqWgpw1Rt6oJ5GDyjgjuUA2LDT6wlF5ImkPV3pI8sZfL0o~bGYvh5lNy4jasJZ4V0IFMvuL9qfBDF0c5c8tpFXslzDUGivK7L3ZsErMoS9a~KgGe459GZ~Seo6wL8QjAgJMeqvcji31JxUuXqrbXQijO4d3-f21q-ETPwcZg7S2PoK-H3U-xVSnZhMPLm3nI34fw__' },
    { cardTitle: 'Thai Massage', imgSrc: 'https://s3-alpha-sig.figma.com/img/3b9a/865c/caad59ba89b60f329c8e15206f3fcce8?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WSxUAv-O6QYb9CxFGmG-XldmpnoCHZoacUkRDfwNB0-MDdFxyWVsi-Kk1aYK84FtiZCatomCJVBStYWkDjwn88sCq25uoyNYGEDhglZH057APrrjJLU8yWrPiTssAc0tJAOiUAGsSPLgYqvZstB2zn5Y54x~Q4B6zU0iB1SAutkVCi~boCCRSYIAOVL0mX5Wh3oqhbWTL6nw7gyn6YIO4XYSi-AIUfBu79lIL~fiFhGDbOKGV0rwHaupJI1qWv4qo9hznIr-ksHAE16GrDACjUTnvT9tOrjCRXvN97oTj49iLfgfQVXhPEiern~9~ks7DmAGqfX8x~KUjj9gvtulsw__' },
    { cardTitle: 'Child Thai Massage', imgSrc: 'https://s3-alpha-sig.figma.com/img/074d/7d83/e9ba472cb37de42591a57a2bcffba6f4?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EDhF3x6Se51z2MZGLr8rni9GcN3NafXCgaJmCWN7S3Dt3nK3vEwhxeum73FtIkxvrzNP7MWqTxw4wWR3ZUCYwEL3aFZG83w~Tca1xmBTqgXZZb6WkfciZFMRBHnokXOHpA67cmeSQ5QLVeH9CWCYEY3D9qK7Ao3PXRQAjEOBnT8gwtIipzFQkBvkjbdAqlWdNWtzvmazKYdQC~~6xtdA9LBpt8L50hKDIk3ILN-t0LmsaqlKCMarAKqYTasm4cDzUZQTMbr3lsm-1GjbiGxo8T05p3gNARKup7fVmeuiI9y3~GYM9pR3M2e5w56qi9ZA2xugsNiwnkA3US7-Onf4ug__' },
  ]

  return (
    <div className='bg-white flex flex-col w-full'>
      {/* <CardsContainer cardsData={cardsData} /> */}
      <ContentContainer data={contentData} />
    </div>
  )
}
