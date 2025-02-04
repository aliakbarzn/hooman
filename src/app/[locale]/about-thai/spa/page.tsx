
import ContentContainer from '@/sections/aboutThai/content-container'
import React from 'react'
import image from '@/assets/images/dashboard/my-ads/female-masseur.png'



const contentData = [
  {
    title: " Spa Thai Massage",
    subtitle: "Spa Services",
    text: 'A relaxation-focused variant of traditional Thai massage, typically offered in spa settings. It emphasizes a calming environment and may include additional amenities like calming music, aromatherapy, and complementary spa services.',
    advantages: [{
      first: "Helps reduce stress and promote mental clarity.",
      second: "Can include additional spa amenities for a more holistic experience.",
      third: "Focus on relaxation in a serene environment."
    }],
    src: image
  }
]

const cardsData = [
  { cardTitle: 'Body Scrub', imgSrc: 'https://s3-alpha-sig.figma.com/img/aea9/5842/c9ce6b58fb0e8856fd4f27d2926aa7ca?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Bt5NSlF3tr1QkW3C3Bg3dsgpIM5gGLScuOBS90SaLxlmTtFp~9iXrRdSJT0bFFN3d9HWhTd4YXgLqSS1DFNcLo89-l-18SyhGGrUv5J30XH49hio3vLEK7JZ1ipcQXypKlyCJ4AzL3gupk~NcNgtI~7-cafYUeI12jiypY12M68zKO20N9t8iGnOW5dddi089DVxrOYChK0Zd5cgNKowXEb-pkF10iY4jOwB2MiYNVLXBx2KvqjAAn0V85vYtIMWlBTfnxLBSP34S6E2GMOM1MubKQ6dQ6rDOhLpKoVp4DdG9w6ZJ6SFJ-6UwntD-Dvxs2Z0X~6QsS1omrXudBhUUA__' },
  { cardTitle: 'Facial Massage', imgSrc: 'https://s3-alpha-sig.figma.com/img/6187/0928/d0b90d537a225c46c513628a5dc160aa?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=i2Tf43sg9HYX2RO9xqVJNJYUjBXsuhbFkUPCocPBNMBJW0207yyhxuqzHzq1gFWYjMA9E1P87jrssdNSI665fKVhcsR7fy0ipq949sm797fUq6SW341XSjroOFJ4wU1MHS013bX4uERVnsp6dXBRHxymAoEs3cm07jbZJOehy8Txqz24I0CtmfrEAZPfpJzLv1e2UUdUVkcLzANH192vq7cVz36pGkBPuh-JKdHb2JGKg6iYFvTZmb1lbaSAolcvHijLpk7b3RYDD1L3pKdmHQ30JfzDPZCJ121ML8fGrn98fG7b94E2qBshH~YbByLXxXYm5up-uOQwBWW96kivSw__' },
  { cardTitle: 'Foot Massage', imgSrc: 'https://s3-alpha-sig.figma.com/img/df26/13b6/8ba05448f3b465ea5e43710d8b791a7d?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SOyQDwpcrVkCCK2R8c15DtqlZCEExZ0b3FhgWrx-1g4fp56TboiJgEde~sXb7DZND7U3PqVhU7HR0KipZwIk4e6qKR493zDt3oB9x9dT8sMe063~RYgTRfcOnoFZYggzM3cA6UkRjm7G-MM20vlJlErWTx2iSCrnh6YrhJ7BLL4YxqJNNlS08l~fz7hh1nsCxcWbuYX~zN9UnwDhcOYF3a4N~UHKbnRB5XfK1jSQvbSt6inUgWjfZgKGD1-M6TO3Fg9AusIhSZtmDtUUNS-QDGD~w-IoDYfZcXs3RVEkpvpuuQLlp-JVb7y4T1Hgjax4ZIJmgXw6XBIyOEA6l6mPOQ__' },
  { cardTitle: 'Back Massage', imgSrc: 'https://s3-alpha-sig.figma.com/img/3b9a/865c/caad59ba89b60f329c8e15206f3fcce8?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WSxUAv-O6QYb9CxFGmG-XldmpnoCHZoacUkRDfwNB0-MDdFxyWVsi-Kk1aYK84FtiZCatomCJVBStYWkDjwn88sCq25uoyNYGEDhglZH057APrrjJLU8yWrPiTssAc0tJAOiUAGsSPLgYqvZstB2zn5Y54x~Q4B6zU0iB1SAutkVCi~boCCRSYIAOVL0mX5Wh3oqhbWTL6nw7gyn6YIO4XYSi-AIUfBu79lIL~fiFhGDbOKGV0rwHaupJI1qWv4qo9hznIr-ksHAE16GrDACjUTnvT9tOrjCRXvN97oTj49iLfgfQVXhPEiern~9~ks7DmAGqfX8x~KUjj9gvtulsw__' },
  { cardTitle: ' Spa Thai Massage', imgSrc: 'https://s3-alpha-sig.figma.com/img/f120/9cab/44130aa0e81ea8459775d26b4167186c?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RNAFuctHRvqIiCpRYpHHcpiR6L0EIss4HBvSXhIsAduRT~XtrUGwklEC4-HoqMOMNeWTciAijKEUncjY22StbWKB3jMDZqt1ZAiaeqOtLtW~V-CI3vDGxlQCzIDcwcAFZD6Wxk7lpTAsSoIGUaoDIid7DN8Ne3Pii7tfBTvwjHeOzPyfspfcqym-gP3S30Ki-BtVwjbVn6T9~sbQaW3bmd0MUbaRn~Wulja-fmIUkc40vG8Q3uy3gchgIkGKKnVkNY91Hvhamzd3WkJrjzdySgpBaEwQQHatD4Z5LU3L5CfiZOOhwJ8kFwpgpwZ9bn4SM7qLnzU-A8z6-1XWoNsrsw__' },
]

export default function page() {
  return (
    <div className='bg-white flex flex-col w-full'>
      {/* <CardsContainer cardsData={cardsData} /> */}
      <ContentContainer data={contentData} />
    </div>
  )
}
