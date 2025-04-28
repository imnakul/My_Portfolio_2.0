import AnimatedContent from '@/components/ui/AnimatedContent/AnimatedContent'
import GlowingEffect from '@/components/ui/GlowingEffect'
import GitHubCalendar from 'react-github-calendar'

const badges = [
   {
      name: 'Total time Coded',
      link: (
         <a href='https://wakatime.com/@95d7d7a3-0d63-469c-8e4c-b813f5ad1741'>
            <img
               src='https://wakatime.com/badge/user/95d7d7a3-0d63-469c-8e4c-b813f5ad1741.svg?style=for-the-badge'
               alt='Total time coded since Mar 5 2025'
            />
         </a>
      ),
   },
   {
      name: 'Portfolio v2.0',
      link: (
         <a href='https://wakatime.com/badge/user/95d7d7a3-0d63-469c-8e4c-b813f5ad1741/project/4abe9575-4c88-492a-ac69-e9e7b1c97f9e'>
            <img
               src='https://wakatime.com/badge/user/95d7d7a3-0d63-469c-8e4c-b813f5ad1741/project/4abe9575-4c88-492a-ac69-e9e7b1c97f9e.svg/?style=for-the-badge'
               alt='wakatime'
            />
         </a>
      ),
   },
   {
      name: 'Productive Pulse',
      link: (
         <a href='https://wakatime.com/badge/user/95d7d7a3-0d63-469c-8e4c-b813f5ad1741/project/45eb53fd-b612-4ba4-8902-da47b6e67f25'>
            <img
               src='https://wakatime.com/badge/user/95d7d7a3-0d63-469c-8e4c-b813f5ad1741/project/45eb53fd-b612-4ba4-8902-da47b6e67f25.svg?style=for-the-badge'
               alt='wakatime'
            />
         </a>
      ),
   },
   {
      name: 'FlexiTasks',
      link: (
         <a href='https://wakatime.com/badge/user/95d7d7a3-0d63-469c-8e4c-b813f5ad1741/project/0caf67c7-d80f-4574-8f5f-e41afe446ac8'>
            <img
               src='https://wakatime.com/badge/user/95d7d7a3-0d63-469c-8e4c-b813f5ad1741/project/0caf67c7-d80f-4574-8f5f-e41afe446ac8.svg?style=for-the-badge'
               alt='wakatime'
            />
         </a>
      ),
   },
   {
      name: 'Cognitive Twin ( AI Persona )',
      link: (
         <a href='https://wakatime.com/badge/user/95d7d7a3-0d63-469c-8e4c-b813f5ad1741/project/4bee2e9c-4b7c-4484-b416-4e025282f5c1'>
            <img
               src='https://wakatime.com/badge/user/95d7d7a3-0d63-469c-8e4c-b813f5ad1741/project/4bee2e9c-4b7c-4484-b416-4e025282f5c1.svg?style=for-the-badge'
               alt='wakatime'
            />
         </a>
      ),
   },
]

const phoneBadges = [
   {
      name: 'Total time Coded',
      link: (
         <a href='https://wakatime.com/@95d7d7a3-0d63-469c-8e4c-b813f5ad1741'>
            <img
               src='https://wakatime.com/badge/user/95d7d7a3-0d63-469c-8e4c-b813f5ad1741.svg'
               alt='Total time coded since Mar 5 2025'
            />
         </a>
      ),
   },
   {
      name: 'Portfolio v2.0',
      link: (
         <a href='https://wakatime.com/badge/user/95d7d7a3-0d63-469c-8e4c-b813f5ad1741/project/4abe9575-4c88-492a-ac69-e9e7b1c97f9e'>
            <img
               src='https://wakatime.com/badge/user/95d7d7a3-0d63-469c-8e4c-b813f5ad1741/project/4abe9575-4c88-492a-ac69-e9e7b1c97f9e.svg/'
               alt='wakatime'
            />
         </a>
      ),
   },
   {
      name: 'Productive Pulse',
      link: (
         <a href='https://wakatime.com/badge/user/95d7d7a3-0d63-469c-8e4c-b813f5ad1741/project/45eb53fd-b612-4ba4-8902-da47b6e67f25'>
            <img
               src='https://wakatime.com/badge/user/95d7d7a3-0d63-469c-8e4c-b813f5ad1741/project/45eb53fd-b612-4ba4-8902-da47b6e67f25.svg'
               alt='wakatime'
            />
         </a>
      ),
   },
   {
      name: 'FlexiTasks',
      link: (
         <a href='https://wakatime.com/badge/user/95d7d7a3-0d63-469c-8e4c-b813f5ad1741/project/0caf67c7-d80f-4574-8f5f-e41afe446ac8'>
            <img
               src='https://wakatime.com/badge/user/95d7d7a3-0d63-469c-8e4c-b813f5ad1741/project/0caf67c7-d80f-4574-8f5f-e41afe446ac8.svg'
               alt='wakatime'
            />
         </a>
      ),
   },
   {
      name: 'Cognitive Twin (AI)',
      link: (
         <a href='https://wakatime.com/badge/user/95d7d7a3-0d63-469c-8e4c-b813f5ad1741/project/4bee2e9c-4b7c-4484-b416-4e025282f5c1'>
            <img
               src='https://wakatime.com/badge/user/95d7d7a3-0d63-469c-8e4c-b813f5ad1741/project/4bee2e9c-4b7c-4484-b416-4e025282f5c1.svg'
               alt='wakatime'
            />
         </a>
      ),
   },
]

function Badges() {
   return (
      <>
         {/* //? Stats Section */}
         {/* <FadeContent
               blur={true}
               duration={1000}
               easing='ease-out'
               initialOpacity={0}
            > */}
         <div
            id='stats'
            className='flex items-center justify-center min-h-[100vh] px-6 py-20 w-full'
         >
            <div className='max-w-7xl w-full'>
               <AnimatedContent direction='vertical' distance={50} delay={300}>
                  <h2 className='text-4xl font-bold mb-12 gradient-text'>
                     Stats
                  </h2>
               </AnimatedContent>

               <div className='grid sm:[grid-template-columns:3fr_2fr] grid-cols-1 gap-8'>
                  {/* Left Side: WakaBoard (1fr) */}
                  <AnimatedContent
                     direction='horizontal'
                     distance={50}
                     delay={400}
                  >
                     <div className='glass-effect rounded-xl p-6 card-glow h-full'>
                        <GlowingEffect
                           spread={40}
                           glow={true}
                           disabled={false}
                           proximity={64}
                           inactiveZone={0.01}
                        />
                        <h3 className='text-2xl font-bold mb-2 text-purple-400'>
                           WakaBoard Stats
                        </h3>
                        <div className='h-full flex flex-col justify-center '>
                           {/* <figure>
                                    <embed src='https://wakatime.com/share/@devNakul/0175c8d3-c277-4deb-a2b9-ad139ded0f22.svg' />
                                 </figure> */}
                           <figure>
                              <embed src='https://wakatime.com/share/@devNakul/676d9287-8aa6-4881-a296-ce169c7fd8b1.svg'></embed>
                           </figure>

                           {/* <img
                                    src='https://github-readme-stats.vercel.app/api/top-langs/?username=imnakul&layout=compact&theme=radical'
                                    className=''
                                 /> */}
                        </div>
                     </div>
                  </AnimatedContent>

                  <AnimatedContent
                     direction='horizontal'
                     distance={50}
                     delay={500}
                     reverse={true}
                  >
                     <div className='grid sm:grid-rows-2 gap-4 h-full'>
                        {/* Badges for >md screen */}
                        <div className='hidden sm:block glass-effect rounded-xl p-4 card-glow h-full'>
                           <GlowingEffect
                              spread={40}
                              glow={true}
                              disabled={false}
                              proximity={64}
                              inactiveZone={0.01}
                           />
                           <h3 className='text-2xl font-bold mb-4 text-purple-400'>
                              Badges Since Mar 5, 2025
                           </h3>
                           {badges.map((badge, i) => (
                              <div
                                 key={i}
                                 className='flex items-center justify-between gap-4 mb-4'
                              >
                                 {badge.name}
                                 <div>{badge.link}</div>
                              </div>
                           ))}
                        </div>

                        {/* //Badges for phone  */}
                        <div className='sm:hidden block glass-effect rounded-xl p-4 card-glow h-full'>
                           <GlowingEffect
                              spread={40}
                              glow={true}
                              disabled={false}
                              proximity={64}
                              inactiveZone={0.01}
                           />
                           <h3 className='text-2xl font-bold mb-4 text-purple-400'>
                              Badges Since Mar 5 2025
                           </h3>
                           {phoneBadges.map((badge, i) => (
                              <div
                                 key={i}
                                 className='flex items-center justify-between gap-4 mb-4'
                              >
                                 {badge.name}
                                 <div>{badge.link}</div>
                              </div>
                           ))}
                        </div>

                        {/* GitHub Timeline */}
                        <div className='glass-effect rounded-xl p-4 card-glow h-full'>
                           <GlowingEffect
                              spread={40}
                              glow={true}
                              disabled={false}
                              proximity={64}
                              inactiveZone={0.01}
                           />
                           <h3 className='text-2xl font-bold mb-4 text-purple-400'>
                              Github Timeline
                           </h3>
                           <div className='w-full max-w-[300px] sm:max-w-[500px] mx-auto'>
                              <GitHubCalendar username='imnakul' />
                           </div>
                        </div>
                     </div>
                  </AnimatedContent>
               </div>
            </div>
         </div>
         {/* </FadeContent> */}
      </>
   )
}
export default Badges
