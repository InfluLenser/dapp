import SearchInflulenser from '../components/Home/SearchInflulenser';
import Logo from '../components/Layout/Logo-main';

function Home() {
  return (
    <>
      <header className="text-gray-700 body-font border-b border-gray-200">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" href="https://tailblocks.cc" target="_blank">
      <div className='flex flex-shrink-0 items-center px-4 object-cover'>
        <Logo />
      </div>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <a className="mr-5 hover:text-gray-900">First Link</a>
      <a className="mr-5 hover:text-gray-900">Second Link</a>
      <a className="mr-5 hover:text-gray-900">Third Link</a>
      <a className="mr-5 hover:text-gray-900">Fourth Link</a>
    </nav>
    <button className="inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0">Button
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
  </div>
</header>
<section className="text-gray-700 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Partner with Lens influencers big and small to support your brand
    
      </h1>
      <p className="mb-8 text-2xl leading-relaxed">Whether you are a DAO, clothing company, or community organization, sponsorship marketing can be a powerful tool to spread your message around the world.</p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">Hire Influencers</button>
        <button className="ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg">Get Paid for Posts</button>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img className="object-cover object-center rounded" alt="hero" src="images/influencer-3.webp"></img>
    </div>
  </div>
</section>
<section className="text-gray-700 body-font border-t border-gray-200">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h2 className="text-xs text-green-500 tracking-widest font-medium title-font mb-1">INFLULENSERS ARE HARD AT WORK</h2>
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">Influencer marketing, tailored for your organization</h1>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-green-500 text-white flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">Publicize DAO Votes</h2>
          </div>
          <div className="flex-grow">
            <p className="leading-relaxed text-base">Trying to rally your community to vote on key initiatives? Ask influencers for help spreading the word.</p>
            <a className="mt-3 text-green-500 inline-flex items-center">Post a Sponsorship Opportnity
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-green-500 text-white flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">Sell Your Product</h2>
          </div>
          <div className="flex-grow">
            <p className="leading-relaxed text-base">Reach out to niche clothing, sports, beauty, nomad, and other influencers. Sell products with hyper-targeted influencer marketing.</p>
            <a className="mt-3 text-green-500 inline-flex items-center">Post a Sponsorship Opportnity
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-green-500 text-white flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <circle cx="6" cy="6" r="3"></circle>
                <circle cx="6" cy="18" r="3"></circle>
                <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
              </svg>
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">Organizations</h2>
          </div>
          <div className="flex-grow">
            <p className="leading-relaxed text-base">Publicize social good causes by tapping into influencer's audiences. Grow your movement alongside loyal followers.</p>
            <a className="mt-3 text-green-500 inline-flex items-center">Post a Sponsorship Opportnity
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section className="text-gray-700 body-font border-t border-gray-200">
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
    <img className="object-cover object-center rounded" alt="hero" src="images/influencer-1.webp"></img>
    </div>
    <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
      <div className="flex flex-col mb-10 lg:items-start items-center">
        <div className="flex-grow">
          <h2 className="text-gray-900 text-lg title-font font-medium mb-3">🌿 Lens Protocol Native 🌿</h2>
          <p className="leading-relaxed text-base">Right after being hired for a sponsorship gig, InfluLENSers can immediatley post on Lens - all from their influencer dashboard.</p>
          <a className="mt-3 text-green-500 inline-flex items-center">Learn About Lens
          </a>
        </div>
      </div>
      <div className="flex flex-col mb-10 lg:items-start items-center">

        <div className="flex-grow">
          <h2 className="text-gray-900 text-lg title-font font-medium mb-3">🍀 Hiring Powered by TalentLayer 🦝</h2>
          <p className="leading-relaxed text-base">Your influencer marketing posts are broadcast to TalentLayer's network of interoperable hiring platforms.</p>
          <a className="mt-3 text-green-500 inline-flex items-center">Learn About TalentLayer
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
<section className="text-gray-700 body-font border-t border-gray-200">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">PROUDLY BUILT WITH</h1>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="border border-gray-300 p-6 rounded-lg">
          
          
        </div>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="border border-gray-300 p-6 rounded-lg">
          
          
        </div>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="border border-gray-300 p-6 rounded-lg">
          
        </div>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="border border-gray-300 p-6 rounded-lg">
          
          
        </div>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="border border-gray-300 p-6 rounded-lg">
          
        </div>
      </div>
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="border border-gray-300 p-6 rounded-lg">
          
        </div>
      </div>
    </div>
    <button className="flex mx-auto mt-16 text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">Button</button>
  </div>
</section>
<section className="text-gray-700 body-font border-t border-gray-200">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Our Team</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">We're a scrappy crew of Lens lovers who are passionate about helping creators monetize on Lens.</p>
    </div>
    <div className="flex flex-wrap -m-2">
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="images/joao.png"></img>
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium">Joao</h2>
            <p className="text-gray-500">Vice Executive of Frontend Stuff</p>
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="images/default-avatar-1.jpeg"></img>
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium">Chloe</h2>
            <p className="text-gray-500">Senior Chief of DAPP Design</p>
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="images/default-avatar-10.jpeg"></img>
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium">Rafael</h2>
            <p className="text-gray-500">Deputy of Frontend Stuff</p>
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="images/quentin.png"></img>
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium">Quentin</h2>
            <p className="text-gray-500">Senior Lead Head of Integrations</p>
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="images/kirsten.png"></img>
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium">Kirsten</h2>
            <p className="text-gray-500">Vice Deputy to the Cheif of Frontend</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section className="text-gray-700 body-font border-t border-gray-200">
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
    <img className="object-cover object-center rounded" alt="hero" src="images/code.png"></img>
    </div>
    <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
      <div className="flex flex-col mb-10 lg:items-start items-center">
        <div className="flex-grow">
          <h2 className="text-gray-900 text-5xl title-font font-medium mb-3">🌿 Lens Protocol Native 🌿</h2>
          <p className="leading-relaxed text-base">Right after being hired for a sponsorship gig, InfluLENSers can immediatley post on Lens - all from their influencer dashboard.</p>
          <a className="mt-3 text-green-500 inline-flex items-center">Learn About Lens
          </a>
        </div>
      </div>
      <div className="flex flex-col mb-10 lg:items-start items-center">

        <div className="flex-grow">
          <h2 className="text-gray-900 text-lg title-font font-medium mb-3">🍀 Hiring Powered by TalentLayer 🦝</h2>
          <p className="leading-relaxed text-base">Your influencer marketing posts are broadcast to TalentLayer's network of interoperable hiring platforms.</p>
          <a className="mt-3 text-green-500 inline-flex items-center">Learn About TalentLayer
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
<a href="https://github.com/InfluLenser" className="rounded-full w-12 h-12 bg-gray-100 fixed bottom-0 right-0 flex items-center justify-center text-gray-800 mr-8 mb-8 shadow-sm border-gray-300 border" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg></a>
    </>
  );
}

export default Home;
