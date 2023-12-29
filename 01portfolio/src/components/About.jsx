import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
        </div>
        <p className='text-xl mt-20'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab magnam sunt deserunt dolorum eum necessitatibus facilis blanditiis illum reprehenderit ipsum vitae in odio id totam, magni laborum, cumque tempore. Itaque quos mollitia, veritatis, tenetur accusamus quod iste sed quasi provident necessitatibus, quis laborum harum iusto saepe ipsa sit exercitationem labore?
        </p>

        <br/>
        <p className='text-xl'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus provident quaerat aspernatur iste, modi, fuga pariatur ipsam doloremque odit repellat rem! Commodi illum perferendis harum excepturi, sed non, iusto, porro ex aperiam quasi quae? Corrupti, tenetur quod. Praesentium quis in unde asperiores numquam molestias impedit ipsam, a amet nobis quia!
        </p>
      </div>
    </div>
  )
}

export default About
