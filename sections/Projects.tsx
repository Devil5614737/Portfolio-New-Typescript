import React, { useRef } from 'react'
import { Card } from '../components/Card'
import { Container } from '../components/container'
import { SectionHeader } from '../components/SectionHeader'
import { data } from '../helpers/data'


export const Projects = () => {
  
  return (
<section className='mt-10'

>
    <SectionHeader title='Projects' subtitle='Here are some of my projects'/>
    <Container>
    <div
    
    className="grid md:grid-cols-3 gap-[32px] gap-y-[4rem] mt-10">
       {data.map(item=>
      <Card
      key={item.id}
      title={item.title}
      tag={item.tag}
      src={item.src}
      link={item.link}
      desc={item.desc}
      />
       )}
    </div>
    </Container>
</section>
  )
}
