function HomePage() {
  return (
    <section class="bg-white">
      <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
          <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
            Hi, I'm Daniel.
          </h1>
          <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            I'm a full-stack developer who likes to build cool things for people to enjoy.
          </p>

          {/* Turn on these buttons for features in the future */}
          {/* <a href="#" class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
          Text
                    </a> */}
          {/* <a href="#" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
          Text
                    </a> */}

        </div>
        <div class="lg:mt-0 lg:col-span-5 lg:flex">
          {/* Add an actual picture of me later */}
          <img class="rounded-lg" 
          src="https://cdn.discordapp.com/attachments/1170517472307314719/1170579212726452264/IMAG0005_2.jpg?ex=65598dd8&is=654718d8&hm=5fbbdd20aba1d53c830e08f134b2bf1c8608a5aacb438231f10faae42d3649f2&"></img>
        </div>
      </div>
    </section>
  )
};

export default HomePage;