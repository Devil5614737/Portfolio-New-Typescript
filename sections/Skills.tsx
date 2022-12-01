import React from 'react'
import { Container } from '../components/container'
import { SectionHeader } from '../components/SectionHeader'
import { Skill } from '../components/Skill'

export const Skills = () => {


  
  return (
    <section className='mt-20 bg-white py-14'>
        <SectionHeader title='Skills' subtitle='Tools and Techs I know'/>
        
     <Container>
        <div className="grid-cols-3 mt-14 grid md:grid-cols-4 gap-10 ">
            <Skill imgSrc='/assets/htmlIcon.svg' title='HTML'/>
            <Skill imgSrc='/assets/css.svg' title='CSS'/>
              <Skill imgSrc='/assets/javascript.svg' title='JAVASCRIPT'/>
            <Skill imgSrc='/assets/typescript.svg' title='TYPESCRIPT'/>
            <Skill imgSrc='/assets/react.svg' title='REACT.JS'/>
            <Skill imgSrc='/assets/nextjs.svg' title='NEXT.JS'/>
            <Skill imgSrc='/assets/nodejs.svg' title='NODE.JS'/>
            <Skill imgSrc='/assets/redux.svg' title='REDUX'/>
            <Skill imgSrc='/assets/tailwind.svg' title='TAILWIND'/>
            <Skill imgSrc='/assets/firebase.svg' title='FIREBASE'/>
            <Skill imgSrc='/assets/mongodb2.svg' title='MONGODB'/>
            <Skill imgSrc='/assets/sass2.svg' title='SASS'/>
           
        </div>
     </Container>
    </section>
  )
}
