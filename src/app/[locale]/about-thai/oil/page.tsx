import CardsContainer from '@/sections/aboutThai/cards-container'
import ContentContainer from '@/sections/aboutThai/content-container'
import React from 'react'

const contentData = [
  {
    title: "2 Masseuse Thai Oil Massage",
    subtitle: "Oil-Based Massages",
    text: ' A unique experience where two therapists work simultaneously on the client using Thai oil massage techniques. This dual approach can create a deeper sense of relaxation and comprehensive bodywork.',
    advantages: [{
      first: "Aromatherapy can enhance mood and relaxation.",
      second: "Oil reduces friction, allowing for smoother movements.",
      third: "Eases muscle tension while providing relaxation."
    }],
    src: 'https://s3-alpha-sig.figma.com/img/6ed4/deed/4f74024fe6892f5734fc788c20c84886?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WT~YSf9qgnALWtKUSip~ZvU4r4UxnYD-hT8z85LXhZWehnElzKxqEC9wn9CXQWRqZ8i~CuUw03SRdxBxnkNIDCTmNdr7ppTSgz~Av7z5-P8KC6yKkemNMswDDKemyk0sZoWMPCZjb0gbzc4Im5UyYHxf7Cluar9DKN11p-kKik-yma9vutwa4-NwgD~M6cRO5Vom8hfaqQV1LUKWgJCXeZDVvnpCvhZdYikU4GHZBNLQ3kE2yfCVbcDOqVax4hImhwS-73lKbf9T86rcUatAhUnMzC36MrX9Ht40zgfbUSQV9DdXmTIZjZ502QvER02elA4Dh3RLwaSfXSVrozbOXg__'
  }
]

const cardsData = [
  { cardTitle: '2 Masseuse Thai Oil Massage', imgSrc: 'https://s3-alpha-sig.figma.com/img/114f/7f15/65e210e28838bbe1d2a72b4edd7d4da8?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UNYFY2lzDVUx09O5vKdses8p2RR4IsHMcDI920EQ1nZ5CwJ9APDzaKWVP3~F4zdA~2LsMOmLITpFvjNOCko7hkPk74n6eWL83pQd3CpWhRmqgEsrk4VskZMa4v7xPjEHT5oK3eGKB~vBpLp5QYO3cHQYOkrdfMd0QqAn-jNx8Mi6~RhCVh45F9yQHC5L7BKZWkvuvFLcu~Pj~jHF02nkEjMqb3MMfNxXIVA25gnqCjjwLyf81auvE8D8VVdHStAQmtdNmIA7J5sxp7EH1I-HUJV~M9E1d6pHWxBAmCPwoT8Lv40iPu2OI99jTqNk6JyAR8JC6aRYX1LDs6JkvShKMQ__' },
  { cardTitle: 'Thai Oil Massage', imgSrc: 'https://s3-alpha-sig.figma.com/img/6627/23c0/1161358b54d1c7e2c46f7e0b9ee42701?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VPJL2WGLkDywQHEIW24An-fcHCA9miSmFrnkHIzauVAv5mUnGDxc1ZpyWhWbhVVGMFzSS0yYl0~1BDkWiAn~QcavxvbBVifS4jqnaBJE23sQBrBWiryRMV7Jn9wYwCdytobQ16agvM-SDe-6tNEQOZmkrW7SeVouALCT1M~x2-5V49NQl75YoV7q6BOFtYASVA1m~jVF6zBYeQM0yW0QxXByyJC3Z6eAbetPUBNcF0BCu4weNi0XGH1~sH4uzFkAXxfVK-R1ELsnMnBFQ685VReiHdFFfB8Ttfl1TtYex2AhxiZ5FGzEFX0Xnu9nVqdpLvXnC5Zhm~sM3sWKJA9mpg__' },
]

export default function page() {
  return (
    <div className='bg-white flex flex-col w-full'>
      {/* <CardsContainer cardsData={cardsData} /> */}
      <ContentContainer data={contentData} />
    </div>
  )
}
